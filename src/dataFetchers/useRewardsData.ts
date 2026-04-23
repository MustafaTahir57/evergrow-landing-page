import {useState, useCallback} from "react";
import {
  createPublicClient,
  http,
  formatUnits,
  isAddress,
  type Address,
} from "viem";
import {bsc} from "viem/chains";
import {EGC_ABI, EGC_ADDRESS} from "@/lib/wagmi";
import {DISTRIBUTOR_ABI} from "./distributorAbi";

const client = createPublicClient({
  chain: bsc,
  transport: http("https://bsc-dataseed.binance.org"),
});

// Hardcoded EverGrow dividend distributor on BSC.
const DISTRIBUTOR_ADDRESS =
  "0xfbAb1D829e36EFbD13642229EAe2964004f38C41" as const;

// Approximate $EGC price in USD — used for "$ Value of Wallet" display.
// In production this would come from a price oracle / API.
const EGC_PRICE_USD = 0.00000003;

export type RewardsStats = {
  egcHeld: string;
  usdValue: string;
  totalEarned: string; // shares[user].totalRealised (BNB)
  pending: string; // getUnpaidEarnings(user) (BNB)
  totalDistributed: string; // totalDistributed() (BNB)
};

function formatNum(n: number, opts?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 4,
    ...opts,
  }).format(n);
}

export function useRewardsData() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<RewardsStats | null>(null);

  const fetchRewards = useCallback(async (address: string) => {
    setError(null);
    setStats(null);

    if (!isAddress(address)) {
      setError("Please enter a valid BSC wallet address (0x…).");
      return;
    }

    setLoading(true);
    try {
      const addr = address as Address;

      // 1) EGC token meta + user balance
      const [balanceRes, decimalsRes] = await Promise.all([
        client.readContract({
          address: EGC_ADDRESS,
          abi: EGC_ABI,
          functionName: "balanceOf",
          args: [addr],
        }),
        client.readContract({
          address: EGC_ADDRESS,
          abi: EGC_ABI,
          functionName: "decimals",
        }),
      ]);

      const balance = balanceRes as bigint;
      const decimals = Number(decimalsRes);
      const balanceNum = Number(formatUnits(balance, decimals));

      // 2) Read reward stats from the distributor contract
      const [sharesRes, pendingRes, totalDistRes] = await Promise.allSettled([
        client.readContract({
          address: DISTRIBUTOR_ADDRESS,
          abi: DISTRIBUTOR_ABI,
          functionName: "shares",
          args: [addr],
        }),
        client.readContract({
          address: DISTRIBUTOR_ADDRESS,
          abi: DISTRIBUTOR_ABI,
          functionName: "getUnpaidEarnings",
          args: [addr],
        }),
        client.readContract({
          address: DISTRIBUTOR_ADDRESS,
          abi: DISTRIBUTOR_ABI,
          functionName: "totalDistributed",
        }),
      ]);

      // shares() returns [amount, totalExcluded, totalRealised] — BNB (18 decimals)
      const totalRealised =
        sharesRes.status === "fulfilled"
          ? Number(formatUnits((sharesRes.value as readonly bigint[])[2], 18))
          : 0;

      const pending =
        pendingRes.status === "fulfilled"
          ? Number(formatUnits(pendingRes.value as bigint, 18))
          : 0;

      const totalDist =
        totalDistRes.status === "fulfilled"
          ? Number(formatUnits(totalDistRes.value as bigint, 18))
          : 0;

      setStats({
        egcHeld: formatNum(balanceNum, {maximumFractionDigits: 0}),
        usdValue: `$${formatNum(balanceNum * EGC_PRICE_USD, {
          maximumFractionDigits: 4,
        })}`,
        totalEarned: `${formatNum(totalRealised, {maximumFractionDigits: 6})} USDT`,
        pending: `${formatNum(pending, {maximumFractionDigits: 6})} USDT`,
        totalDistributed: `${formatNum(totalDist, {maximumFractionDigits: 4})} USDT`,
      });
    } catch (e) {
      const msg =
        e instanceof Error ? e.message : "Failed to fetch on-chain data.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }, []);

  console.log("stats ", stats)

  return {stats, loading, error, fetchRewards};
}

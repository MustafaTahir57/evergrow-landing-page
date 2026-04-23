import { useState } from "react";
import { createPublicClient, http, formatUnits, isAddress, type Address } from "viem";
import { bsc } from "viem/chains";
import { EGC_ABI, EGC_ADDRESS } from "@/lib/wagmi";

const client = createPublicClient({
  chain: bsc,
  transport: http("https://bsc-dataseed.binance.org"),
});

type Stats = {
  egcHeld: string;
  usdValue: string;
  totalEarned: string;
  pending: string;
  totalDistributed: string;
};

// Approximate $EGC price in USD — used for "$ Value of EGC Held" display.
// In a production app this would come from a price oracle / API.
const EGC_PRICE_USD = 0.00000003;

function formatNum(n: number, opts?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 4,
    ...opts,
  }).format(n);
}

export function RewardsDashboard() {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);

  const fetchStats = async () => {
    setError(null);
    setStats(null);

    if (!isAddress(address)) {
      setError("Please enter a valid BSC wallet address (0x…).");
      return;
    }

    setLoading(true);
    try {
      const addr = address as Address;

      // Run reads in parallel; tolerate failures for optional reward-tracker methods
      const [balanceRes, decimalsRes, withdrawableRes, withdrawnRes, totalDistRes] =
        await Promise.allSettled([
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
          client.readContract({
            address: EGC_ADDRESS,
            abi: EGC_ABI,
            functionName: "withdrawableDividendOf",
            args: [addr],
          }),
          client.readContract({
            address: EGC_ADDRESS,
            abi: EGC_ABI,
            functionName: "withdrawnDividendOf",
            args: [addr],
          }),
          client.readContract({
            address: EGC_ADDRESS,
            abi: EGC_ABI,
            functionName: "totalDividendsDistributed",
          }),
        ]);

      if (balanceRes.status !== "fulfilled") {
        throw new Error("Could not read token balance for this address.");
      }

      const decimals =
        decimalsRes.status === "fulfilled" ? Number(decimalsRes.value) : 9;
      const balance = balanceRes.value as bigint;
      const balanceNum = Number(formatUnits(balance, decimals));

      // USDT rewards are typically tracked in 18-decimal USDT (BSC)
      const withdrawable =
        withdrawableRes.status === "fulfilled"
          ? Number(formatUnits(withdrawableRes.value as bigint, 18))
          : 0;
      const withdrawn =
        withdrawnRes.status === "fulfilled"
          ? Number(formatUnits(withdrawnRes.value as bigint, 18))
          : 0;
      const totalDist =
        totalDistRes.status === "fulfilled"
          ? Number(formatUnits(totalDistRes.value as bigint, 18))
          : 0;

      setStats({
        egcHeld: formatNum(balanceNum, { maximumFractionDigits: 0 }),
        usdValue: `$${formatNum(balanceNum * EGC_PRICE_USD, { maximumFractionDigits: 4 })}`,
        totalEarned: `$${formatNum(withdrawable + withdrawn, { maximumFractionDigits: 4 })}`,
        pending: `$${formatNum(withdrawable, { maximumFractionDigits: 4 })}`,
        totalDistributed: `$${formatNum(totalDist, { maximumFractionDigits: 0 })}`,
      });
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Failed to fetch on-chain data.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const placeholder = "—";
  const cards = [
    {
      label: "Your Wallet ($EGC)",
      value: stats?.egcHeld ?? placeholder,
      accent: "primary",
    },
    {
      label: "$ Value of Wallet",
      value: stats?.usdValue ?? placeholder,
      accent: "accent",
    },
    {
      label: "Total Earned (USDT)",
      value: stats?.totalEarned ?? placeholder,
      accent: "accent",
    },
    {
      label: "Reward Not Claimed",
      value: stats?.pending ?? placeholder,
      accent: "primary",
    },
    {
      label: "Reward Distributed To Holders",
      value: stats?.totalDistributed ?? placeholder,
      accent: "accent",
    },
  ];

  return (
    <section id="rewards" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Rewards Dashboard
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            EverGrow <span className="text-gradient-primary">Rewards Dashboard</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Rewards are automatically sent every 60 minutes. It can, however, take longer
            depending on your holdings and trading volume — rewards trigger once they are big
            enough to cover gas fees. For smaller holders it may take from a couple of hours
            to a few days. A small transaction (buy, sell or transfer) can trigger unclaimed
            rewards.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8 shadow-card max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value.trim())}
              onKeyDown={(e) => e.key === "Enter" && fetchStats()}
              placeholder="0x... wallet address"
              className="flex-1 rounded-xl bg-input/60 border border-border px-5 py-4 text-foreground placeholder:text-muted-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={fetchStats}
              disabled={loading}
              className="rounded-xl bg-gradient-primary px-8 py-4 font-semibold text-primary-foreground shadow-glow-purple transition-transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Checking..." : "Check Rewards"}
            </button>
          </div>
          {error && (
            <p className="mt-4 text-sm text-destructive">{error}</p>
          )}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => (
              <div
                key={c.label}
                className={`glass rounded-2xl p-6 shadow-card border-l-4 ${
                  c.accent === "accent" ? "border-l-accent" : "border-l-primary"
                }`}
              >
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  {c.label}
                </div>
                <div
                  className={`mt-3 text-2xl md:text-3xl font-extrabold break-all ${
                    c.accent === "accent" ? "text-accent" : "text-foreground"
                  }`}
                >
                {c.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

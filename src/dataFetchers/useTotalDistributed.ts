import {useEffect, useState} from "react";
import {createPublicClient, http, formatUnits} from "viem";
import {bsc} from "viem/chains";
import {DISTRIBUTOR_ABI} from "./distributorAbi";

const client = createPublicClient({
  chain: bsc,
  transport: http("https://bsc-dataseed.binance.org"),
});

const DISTRIBUTOR_ADDRESS =
  "0x0A824F570452B90F868902f36e6495aE70dcC019" as const;

export function useTotalDistributed() {
  const [value, setValue] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await client.readContract({
          address: DISTRIBUTOR_ADDRESS,
          abi: DISTRIBUTOR_ABI,
          functionName: "totalDividends",
        });
        const num = Number(formatUnits(res as bigint, 18));

        if (!cancelled) {
          setValue(
            new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(num),
          );
        }
      } catch {
        if (!cancelled) setValue("0.00");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return value;
}

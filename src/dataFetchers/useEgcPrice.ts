import {useEffect, useState} from "react";

const POOL_URL =
  "https://api.geckoterminal.com/api/v2/networks/bsc/pools/0xd254a3c351dad83f8b369554b420047a1ed60f1c";

// Fallback price if the API is unreachable or returns invalid data.
export const FALLBACK_EGC_PRICE_USD = 0.000000000875;

export function useEgcPrice() {
  const [price, setPrice] = useState<number>(FALLBACK_EGC_PRICE_USD);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchPrice() {
      try {
        const res = await fetch(POOL_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const raw = json?.data?.attributes?.base_token_price_usd;
        const parsed = raw != null ? Number(raw) : NaN;

        if (!cancelled) {
          if (Number.isFinite(parsed) && parsed > 0) {
            setPrice(parsed);
          } else {
            setPrice(FALLBACK_EGC_PRICE_USD);
          }
        }
      } catch (e) {
        if (!cancelled) {
          setError(e instanceof Error ? e.message : "Failed to fetch price");
          setPrice(FALLBACK_EGC_PRICE_USD);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchPrice();
    return () => {
      cancelled = true;
    };
  }, []);

  return {price, loading, error};
}

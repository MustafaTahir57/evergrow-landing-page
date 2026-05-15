import {useEffect, useState} from "react";

const API_URL = "https://evergrow-backend-p7k9.onrender.com/api/egc-price";

// Fallback price
export const FALLBACK_EGC_PRICE_USD = 0.000000000;

export function useEgcPrice() {
  const [price, setPrice] = useState<number>(FALLBACK_EGC_PRICE_USD);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchPrice() {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(API_URL);

        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`);
        }

        const json = await res.json();
        const parsed = Number(json?.price);

        if (!cancelled) {
          if (Number.isFinite(parsed) && parsed > 0) {
            setPrice(parsed);
          } else {
            setPrice(FALLBACK_EGC_PRICE_USD);
          }
        }
      } catch (e) {
        if (!cancelled) {
          setError(
            e instanceof Error ? e.message : "Failed to fetch price"
          );
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
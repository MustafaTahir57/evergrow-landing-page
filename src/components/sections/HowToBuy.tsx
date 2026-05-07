import {useState} from "react";

const CONTRACT = "0xC001BBe2B87079294C63EcE98BdD0a88D761434e";
const PANCAKE_URL =
  "https://pancakeswap.finance/swap?chain=bsc&inputCurrency=BNB&outputCurrency=0x527d8D6C47dd393D939fA32ee125C99A3e386A17";

export function HowToBuy() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  const steps = [
    "You'll need BEP-20 $BNB in your wallet on BNB Chain.",
    "Enter the EverGrow $EGC contract address in the \"To:\" or \"You Receive:\" box (see below).",
    "Set the slippage to at least 15% to allow for tax and volatility.",
    "Don't forget to add the token to your wallet after you've successfully swapped.",
    "Tap the Buy from PancakeSwap button below to get straight there!",
  ];

  return (
    <section id="how-to-buy" className="relative py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            How To Buy
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            How To Buy <span className="text-gradient-primary">EverGrow $EGC</span>
          </h2>
        </div>

        <div className="glass rounded-2xl p-6 md:p-10 shadow-card">
          <ol className="space-y-5">
            {steps.map((s, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground font-bold text-sm shadow-glow-purple">
                  {i + 1}
                </span>
                <p className="text-muted-foreground leading-relaxed pt-1">{s}</p>
              </li>
            ))}
          </ol>

          <div className="mt-8">
            <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
              EGC Contract Address
            </div>
            <div className="flex flex-col sm:flex-row gap-2 items-stretch">
              <div className="flex-1 rounded-xl bg-input/60 border border-border px-4 py-3 font-mono text-xs sm:text-sm text-foreground break-all">
                {CONTRACT}
              </div>
              <button
                onClick={copy}
                className="rounded-xl border border-border bg-card/40 backdrop-blur px-5 py-3 text-sm font-semibold text-foreground hover:bg-card/70 transition-colors"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>

          <div className="mt-8 flex justify-center">
            <a
              href={PANCAKE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-glow-purple transition-transform hover:scale-105"
            >
              Buy from PancakeSwap
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

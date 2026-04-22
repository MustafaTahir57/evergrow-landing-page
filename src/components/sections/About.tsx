export function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            What is EverGrow
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            A new era of <span className="text-gradient-primary">passive crypto income</span>
          </h2>
        </div>

        <div className="glass rounded-2xl p-8 md:p-12 shadow-card">
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span className="text-foreground font-semibold">EverGrow Coin ($EGC)</span> works
            on an autonomous, frictionless yield farming and liquidity generation protocol on
            Binance Smart Chain. Simply hold $EGC tokens in your wallet and earn passive
            income in <span className="text-accent font-semibold">BEP20 USDT</span> —
            automatically delivered, no staking, no claiming required.
          </p>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Every buy, sell, and transfer triggers a transaction tax that fuels real-yield
            USDT rewards for holders, deepens liquidity on PancakeSwap, and powers an
            automatic <span className="text-primary font-semibold">buyback & burn</span>{" "}
            mechanism that permanently shrinks supply over time.
          </p>
          <p className="mt-6 text-lg text-foreground font-semibold">
            Accumulating Wealth Was Never This Simple!
          </p>
        </div>
      </div>
    </section>
  );
}

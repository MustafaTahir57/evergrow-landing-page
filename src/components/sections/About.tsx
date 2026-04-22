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
            <span className="text-foreground font-semibold">EverGrow Coin ($EGC)</span> is a
            hyper-deflationary BEP-20 token on Binance Smart Chain that pays its holders
            <span className="text-accent font-semibold"> real USDT rewards</span> on every
            single transaction. Every buy, sell, and transfer triggers an automatic 8% tax,
            of which the bulk is converted to USDT and distributed proportionally to all wallets
            holding $EGC — no staking, no claiming, no gas-heavy interactions required.
          </p>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            On top of that, a portion of every transaction goes toward an automatic
            <span className="text-primary font-semibold"> buyback & burn</span> mechanism,
            permanently shrinking the supply over time and giving long-term holders
            compounding upside. Hold and grow — that's it.
          </p>
        </div>
      </div>
    </section>
  );
}

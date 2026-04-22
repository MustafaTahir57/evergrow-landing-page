export function Structure() {
  return (
    <section id="structure" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            $EGC Token Structure
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Built for <span className="text-gradient-primary">long-term holders</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-10 shadow-card relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/20 blur-3xl" />
            <div className="relative">
              <div className="text-7xl font-extrabold text-gradient-primary mb-4">75%</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Airdropped to OGs</h3>
              <p className="text-muted-foreground leading-relaxed">
                The vast majority of the supply was airdropped to the original community —
                circulating freely, generating rewards, and powering the deflationary engine on
                every transaction. True community ownership, no whales, no hidden allocations.
              </p>
            </div>
          </div>

          <div className="glass rounded-2xl p-10 shadow-card relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl" />
            <div className="relative">
              <div className="text-7xl font-extrabold text-gradient-primary mb-4">25%</div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Initial Liquidity</h3>
              <p className="text-muted-foreground leading-relaxed">
                A quarter of the total supply was allocated to initial liquidity on PancakeSwap,
                bootstrapping a deep, stable market for $EGC from day one and supporting the
                automatic liquidity-generation mechanism on every transaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

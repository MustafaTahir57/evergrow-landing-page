const reasons = [
  {
    title: "USDT Rewards",
    desc: "All holders of $EGC earn an 8% reward from every Buy/Sell/Transfer in BEP20 USDT, automatically sent to your wallet.",
    icon: "💰",
    color: "accent",
  },
  {
    title: "Multi Buy Back",
    desc: "1% of every transaction is collected, converted to BNB, and used to buy $EGC from exchanges — those tokens are permanently removed from circulating supply, creating green candles on the price chart.",
    icon: "🔥",
    color: "primary",
  },
  {
    title: "Auto Liquidity",
    desc: "4% of every transaction is transferred into the PancakeSwap liquidity pool to create a stable price floor and deepen tradeable liquidity over time.",
    icon: "💧",
    color: "accent",
  },
];

export function WhyHodl() {
  return (
    <section id="why-hodl" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Why HODL
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Why hold <span className="text-gradient-primary">EverGrow Coin?</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            $EverGrow is a deflationary token designed to become more scarce over time —
            funded by strategic buybacks and powered by automatic USDT reflections.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="glass rounded-2xl p-8 shadow-card hover:scale-[1.02] transition-transform group"
            >
              <div className="text-5xl mb-4">{r.icon}</div>
              <h3
                className={`text-2xl font-bold mb-3 ${
                  r.color === "accent" ? "text-accent" : "text-primary"
                }`}
              >
                {r.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

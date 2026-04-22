const reasons = [
  {
    title: "8% USDT Rewards",
    desc: "Earn real-yield in USDT on every single transaction. Rewards are distributed automatically — no staking, no claiming.",
    icon: "💰",
    color: "accent",
  },
  {
    title: "Buyback & Burn",
    desc: "1% of every transaction fuels automatic buybacks and burns, permanently reducing supply and supporting price.",
    icon: "🔥",
    color: "primary",
  },
  {
    title: "Deflationary Supply",
    desc: "Total supply shrinks with every transaction. Scarcity goes up, your share of rewards goes up — forever.",
    icon: "📉",
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
            Three reasons to <span className="text-gradient-primary">hold forever</span>
          </h2>
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

const items = [
  {
    pct: "43%",
    title: "Airdropped to OGs",
    desc: "Following the burn and LP allocation, 100% of the remaining circulating supply (430,635,636,122,076) was airdropped to the top 30,000 EverGrow and Lucro holders — creating one of the largest established holder bases in crypto. A deeply engaged community with long-term alignment, strong organic reach, and shared incentives powering the ecosystem forward.",
    glow: "bg-primary/20",
  },
  {
    pct: "14%",
    title: "Initial Liquidity",
    desc: "14% of the total supply (143,545,212,040,692) was allocated to initial PancakeSwap liquidity, creating a strong trading foundation for $EGC from launch. Deep liquidity supports healthier price stability, smoother trading, and a stronger long-term ecosystem for both existing and new holders.",
    glow: "bg-accent/20",
  },
  {
    pct: "43%",
    title: "Burnt at Launch",
    desc: "43% of the total supply (425,819,151,837,232) was permanently burnt at launch, significantly reducing circulating supply from day one. A substantial burn strengthens scarcity, increases the impact of future deflation, and aligns the ecosystem toward long-term value creation for holders.",
    glow: "bg-destructive/20",
  },
];

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

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="glass rounded-2xl p-8 shadow-card relative overflow-hidden">
              <div className={`absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl ${it.glow}`} />
              <div className="relative">
                <div className="text-6xl font-extrabold text-gradient-primary mb-4">{it.pct}</div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">{it.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Hero() {
  const scrollToRewards = () =>
    document.getElementById("rewards")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 bg-hero-gradient">
      <div className="relative z-10 max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur mb-8">
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
          Live on Binance Smart Chain
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight">
          Hyper Deflationary Token{" "}
          <span className="text-gradient-primary">with USD Reflections</span>
        </h1>

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Earn passive income in <span className="text-accent font-semibold">USDT</span>{" "}
          just by holding $EGC. Real yield, automatic rewards, deflationary by design —
          no staking, no claiming, no friction.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToRewards}
            className="rounded-xl bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-glow-purple transition-transform hover:scale-105"
          >
            Buy $EGC Now
          </button>
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-xl border border-border bg-card/40 backdrop-blur px-8 py-4 text-base font-semibold text-foreground hover:bg-card/70 transition-colors"
          >
            Learn More
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { v: "8%", l: "USDT Rewards" },
            { v: "1%", l: "Buyback & Burn" },
            { v: "100K+", l: "Holders" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-xl p-4 md:p-6">
              <div className="text-2xl md:text-3xl font-bold text-gradient-primary">{s.v}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

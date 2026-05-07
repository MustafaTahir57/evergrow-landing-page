import usdtLogo from "@/assets/usdt.png";

export function Hero() {

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

        <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          EverGrow works on an autonomous, frictionless yield farming and liquidity
          generation protocol. Simply hold $EGC tokens in your wallet and earn passive
          income in{" "}
          <span className="inline-flex items-center gap-1.5 align-middle text-accent font-semibold">
            <img src={usdtLogo} alt="USDT" className="h-7 w-7 inline-block" />
            BEP20 USDT
          </span>
          .
        </p>

        <p className="mt-4 text-base md:text-lg text-foreground font-semibold">
          Accumulating Wealth Was Never This Simple!
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://pancakeswap.finance/swap?chain=bsc&inputCurrency=BNB&outputCurrency=0x527d8D6C47dd393D939fA32ee125C99A3e386A17"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-gradient-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-glow-purple transition-transform hover:scale-105"
          >
            Buy from PancakeSwap
          </a>
          <a
            href="https://www.dextools.io/app/bnb/pair-explorer/0x2dfe385b87b372ca5b3cd31735abe18289c5b861"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border bg-card/40 backdrop-blur px-8 py-4 text-base font-semibold text-foreground hover:bg-card/70 transition-colors"
          >
            Price Chart
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 max-w-xl mx-auto">
          {[
            { v: "8%", l: "USDT Rewards", icon: usdtLogo },
            { v: "1%", l: "Buyback & Burn" },
          ].map((s) => (
            <div key={s.l} className="glass rounded-xl p-4 md:p-6 flex flex-col items-center justify-center text-center">
              <div className="flex items-center justify-center gap-2 h-11">
                {s.icon && <img src={s.icon} alt="USDT" className="h-9 w-9 md:h-11 md:w-11" />}
                <div className="text-2xl md:text-3xl font-bold text-gradient-primary">{s.v}</div>
              </div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

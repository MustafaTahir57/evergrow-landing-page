import usdtLogo from "@/assets/usdt.png";

export function WhyHodl() {
  return (
    <section id="why-hodl" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Why HODL
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Why HOLD <span className="text-gradient-primary">EverGROW</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass rounded-2xl p-8 shadow-card">
            <div className="mb-4 flex items-center gap-3">
              <img src={usdtLogo} alt="USDT logo" className="h-16 w-16" />
              <div className="text-5xl">💰</div>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-accent">USDT Rewards</h3>
            <p className="text-muted-foreground leading-relaxed">
              $EverGrow is a deflationary token designed to become scarcer over time. All
              holders of EGC will earn an{" "}
              <span className="text-foreground font-semibold">8% reward</span> from every
              Buy/Sell/Transfer in BEP20 USDT, which is automatically sent to your wallets.
            </p>
          </div>

          <div className="glass rounded-2xl p-8 shadow-card">
            <div className="text-5xl mb-4">🔥</div>
            <h3 className="text-2xl font-bold mb-3 text-primary">Strategic Buyback</h3>
            <p className="text-muted-foreground leading-relaxed">
              Funded by strategic buyback,{" "}
              <span className="text-foreground font-semibold">1% tokens</span> are collected
              from every transaction, converted to BNB and stored in our contract. When the
              BuyBack Wallet is enabled, it purchases $EGC directly from exchanges and
              instantly removes the purchased tokens permanently from circulating supply
              while making green candles on the price chart.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

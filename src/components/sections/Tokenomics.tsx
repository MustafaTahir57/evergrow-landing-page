import {PieChart, Pie, Cell, ResponsiveContainer, Tooltip} from "recharts";

const data = [
  {name: "Rewards to Holders (USDT)", value: 8, color: "oklch(0.78 0.22 155)"},
  {name: "Buy Back + Burn", value: 0.5, color: "oklch(0.65 0.25 25)"},
  {name: "Auto Liquidity", value: 0.5, color: "oklch(0.78 0.18 280)"},
  {name: "Dev", value: 1, color: "oklch(0.75 0.18 230)"},
];

export function Tokenomics() {
  const total = data.reduce((a, b) => a + b.value, 0);

  return (
    <section id="tokenomics" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Tokenomics
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient-primary">10% transaction tax</span>, working for you
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            EverGrow is the next evolution of a reflection token on the Binance Smart
            Chain (BSC): the original USD reflection token to maximize your earnings for
            both now & the future. Simply hold $EGC tokens and get rewarded 8% in USDT from
            each transaction, automatically delivered to your wallet.
          </p>
        </div>

        <div className="glass rounded-2xl p-8 md:p-12 shadow-card grid md:grid-cols-2 gap-10 items-center mb-10">
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  innerRadius={70}
                  outerRadius={120}
                  paddingAngle={3}
                  dataKey="value"
                  stroke="oklch(0.09 0.03 275)"
                  strokeWidth={3}
                >
                  {data.map((d) => (
                    <Cell key={d.name} fill={d.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "oklch(0.16 0.05 282)",
                    border: "1px solid oklch(0.3 0.06 285)",
                    borderRadius: "8px",
                    color: "oklch(0.97 0.01 280)",
                  }}
                  formatter={(v) => `${v}%`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-4">
            <div className="text-sm text-muted-foreground mb-2">
              Total tax: <span className="text-foreground font-bold">{total}%</span>
            </div>
            {data.map((d) => (
              <div
                key={d.name}
                className="flex items-center justify-between p-4 rounded-xl bg-muted/30 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="h-4 w-4 rounded-full"
                    style={{background: d.color, boxShadow: `0 0 12px ${d.color}`}}
                  />
                  <span className="font-semibold text-foreground">{d.name}</span>
                </div>
                <span className="text-2xl font-bold text-gradient-primary">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass rounded-2xl p-8 shadow-card max-w-4xl mx-auto space-y-4">
          <div className="flex gap-4">
            <span className="text-2xl">•</span>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">8% of every buy/sell/transfer</span>{" "}
              is redistributed to all holders in USDT.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-2xl">•</span>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">0.5% of every transaction</span>{" "}
              is converted into $BNB and used to buy and permanently burn $EGC, reducing
              supply over time.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="text-2xl">•</span>
            <p className="text-muted-foreground leading-relaxed">
              <span className="text-foreground font-semibold">0.5% of every transaction</span>{" "}
              is automatically added to liquidity, helping support deeper liquidity and a
              more stable trading environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

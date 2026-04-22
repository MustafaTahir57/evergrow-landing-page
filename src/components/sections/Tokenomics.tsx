import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "USDT Rewards", value: 8, color: "oklch(0.78 0.22 155)" },
  { name: "Liquidity", value: 4, color: "oklch(0.7 0.25 305)" },
  { name: "Buyback & Burn", value: 1, color: "oklch(0.65 0.25 25)" },
  { name: "Marketing", value: 1, color: "oklch(0.75 0.18 230)" },
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
            <span className="text-gradient-primary">14% transaction tax</span>, working for you
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Every buy and sell is taxed and redistributed to reward holders, deepen liquidity,
            burn supply, and grow the ecosystem.
          </p>
        </div>

        <div className="glass rounded-2xl p-8 md:p-12 shadow-card grid md:grid-cols-2 gap-10 items-center">
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
                    style={{ background: d.color, boxShadow: `0 0 12px ${d.color}` }}
                  />
                  <span className="font-semibold text-foreground">{d.name}</span>
                </div>
                <span className="text-2xl font-bold text-gradient-primary">{d.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

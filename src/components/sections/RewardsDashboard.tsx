import { useState } from "react";
import { useRewardsData } from "@/dataFetchers/useRewardsData";
import usdtLogo from "@/assets/usdt.png";

export function RewardsDashboard() {
  const [address, setAddress] = useState("");
  const { stats, loading, error, fetchRewards } = useRewardsData();

  const placeholder = "—";
  const cards = [
    {
      label: "Your Wallet ($EGC)",
      value: stats?.egcHeld ?? placeholder,
      accent: "primary",
      showUsdt: false,
    },
    {
      label: "$ Value of Wallet",
      value: stats?.usdValue ?? placeholder,
      accent: "accent",
      showUsdt: false,
    },
    {
      label: "Total Earned (BNB)",
      value: stats?.totalEarned ?? placeholder,
      accent: "accent",
      showUsdt: false,
    },
    {
      label: "Reward Not Claimed (BNB)",
      value: stats?.pending ?? placeholder,
      accent: "primary",
      showUsdt: false,
    },
    {
      label: "Reward Distributed To Holders (BNB)",
      value: stats?.totalDistributed ?? placeholder,
      accent: "accent",
      showUsdt: false,
    },
  ];

  return (
    <section id="rewards" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Rewards Dashboard
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            EverGrow <span className="text-gradient-primary">Rewards Dashboard</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">
            Rewards are automatically sent every 60 minutes. It can, however, take longer
            depending on your holdings and trading volume — rewards trigger once they are big
            enough to cover gas fees. For smaller holders it may take from a couple of hours
            to a few days. A small transaction (buy, sell or transfer) can trigger unclaimed
            rewards.
          </p>
        </div>

        <div className="glass rounded-2xl p-6 md:p-8 shadow-card max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value.trim())}
              onKeyDown={(e) => e.key === "Enter" && fetchRewards(address)}
              placeholder="0x... wallet address"
              className="flex-1 rounded-xl bg-input/60 border border-border px-5 py-4 text-foreground placeholder:text-muted-foreground font-mono text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={() => fetchRewards(address)}
              disabled={loading}
              className="rounded-xl bg-gradient-primary px-8 py-4 font-semibold text-primary-foreground shadow-glow-purple transition-transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Checking..." : "Check Rewards"}
            </button>
          </div>
          {error && (
            <p className="mt-4 text-sm text-destructive">{error}</p>
          )}
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div
              key={c.label}
              className={`glass rounded-2xl p-6 shadow-card border-l-4 ${
                c.accent === "accent" ? "border-l-accent" : "border-l-primary"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  {c.label}
                </div>
                {c.showUsdt && (
                  <img src={usdtLogo} alt="USDT" className="h-9 w-9 shrink-0 opacity-90" />
                )}
              </div>
              <div
                className={`mt-3 text-2xl md:text-3xl font-extrabold break-all ${
                  c.accent === "accent" ? "text-accent" : "text-foreground"
                }`}
              >
                {c.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

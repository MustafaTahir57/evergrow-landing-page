import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { StarField } from "@/components/StarField";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { RewardsDashboard } from "@/components/sections/RewardsDashboard";
import { WhyHodl } from "@/components/sections/WhyHodl";
import { Tokenomics } from "@/components/sections/Tokenomics";
import { Structure } from "@/components/sections/Structure";
import { Community } from "@/components/sections/Community";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EverGrow ($EGC) — Hyper Deflationary Token with USD Reflections" },
      {
        name: "description",
        content:
          "EverGrow ($EGC) is a hyper-deflationary BSC token paying 8% USDT rewards to holders on every transaction. Earn passive income just by holding.",
      },
      { property: "og:title", content: "EverGrow ($EGC) — USDT Rewards on BSC" },
      {
        property: "og:description",
        content:
          "Earn passive USDT income just by holding $EGC. Hyper-deflationary, automatic rewards, no staking required.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen text-foreground">
      <StarField />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <RewardsDashboard />
          <WhyHodl />
          <Tokenomics />
          <Structure />
          <Community />
        </main>
      </div>
    </div>
  );
}

import { Navbar } from "@/components/Navbar";
import { StarField } from "@/components/StarField";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { RewardsDashboard } from "@/components/sections/RewardsDashboard";
import { HowToBuy } from "@/components/sections/HowToBuy";
import { WhyHodl } from "@/components/sections/WhyHodl";
import { Tokenomics } from "@/components/sections/Tokenomics";
import { Structure } from "@/components/sections/Structure";
import { Community } from "@/components/sections/Community";

export default function App() {
  return (
    <div className="relative min-h-screen text-foreground">
      <StarField />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <RewardsDashboard />
          <HowToBuy />
          <WhyHodl />
          <Tokenomics />
          <Structure />
          <Community />
        </main>
      </div>
    </div>
  );
}

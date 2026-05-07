import { useEffect, useState } from "react";
import logo from "@/assets/evergrow-logo.png";

const links = [
  { id: "about", label: "About" },
  { id: "rewards", label: "Rewards Dashboard" },
  { id: "how-to-buy", label: "How To Buy" },
  { id: "why-hodl", label: "Why HODL" },
  { id: "tokenomics", label: "Tokenomics" },
  { id: "structure", label: "Structure" },
  { id: "community", label: "Community" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-card" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <img
            src={logo}
            alt="EverGrow ($EGC) logo"
            className="h-9 w-9 rounded-full shadow-glow-purple animate-pulse-glow"
          />
          <span className="text-xl font-bold text-gradient-primary">EverGrow</span>
        </button>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/50"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("rewards")}
            className="ml-2 rounded-lg bg-gradient-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-glow-purple transition-transform hover:scale-105"
          >
            Buy $EGC
          </button>
        </div>

        <button
          className="lg:hidden text-foreground p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-strong border-t border-border px-6 py-4 space-y-2">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="block w-full text-left rounded-md px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50"
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

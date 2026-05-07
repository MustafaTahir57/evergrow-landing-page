import {useState} from "react";
import telegramIcon from "@/assets/telegram.svg";
import xIcon from "@/assets/twitter-x.png";

function CopyableContract({label, value}: {label: string; value: string}) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 font-mono text-xs">
      <span className="text-foreground/80">{label}:</span>
      <span className="break-all">{value}</span>
      <button
        onClick={copy}
        className="cursor-pointer rounded-md border border-border bg-card/40 px-2 py-1 text-[11px] font-semibold text-foreground hover:bg-card/70 transition-colors"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

const socials = [
  {
    name: "Telegram",
    href: "https://t.me/EverGrow_EGC",
    desc: "Join the discussion on Telegram",
    icon: telegramIcon,
    iconAlt: "Telegram logo",
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/EverGrowEGC_",
    desc: "Follow the latest updates on X",
    icon: xIcon,
    iconAlt: "X (Twitter) logo",
  },
];

export function Community() {
  return (
    <section id="community" className="relative py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <div className="text-sm font-semibold text-accent uppercase tracking-wider mb-3">
            Community
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Join our <span className="text-gradient-primary">community</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Extremely active community that loves our mission. Our Telegram group is filled
            with community members and moderators that would love to help you 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-8 shadow-card hover:scale-[1.03] transition-transform group flex items-center gap-5"
            >
              <div className="h-16 w-16 rounded-xl bg-background/40 ring-1 ring-border flex items-center justify-center shadow-glow-purple overflow-hidden">
                <img src={s.icon} alt={s.iconAlt} className="h-10 w-10 object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {s.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </div>
              <svg className="ml-auto h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>

        <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground space-y-3">
          <p>© 2026 EverGrow. $EGC is a BEP-20 token on Binance Smart Chain.</p>
          <CopyableContract label="EGC Contract" value="0x527d8D6C47dd393D939fA32ee125C99A3e386A17" />
          <CopyableContract label="USDT (BEP20) Contract" value="0x55d398326f99059fF775485246999027B3197955" />
        </footer>
      </div>
    </section>
  );
}

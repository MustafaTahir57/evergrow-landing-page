const socials = [
  {
    name: "Telegram",
    href: "https://t.me/evergrowofficial",
    desc: "Join 50,000+ holders chatting daily",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/evergrowcoin",
    desc: "Latest news, updates, and announcements",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
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
            Join the <span className="text-gradient-primary">EverGrow universe</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Connect with thousands of holders across the galaxy.
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
              <div className="h-16 w-16 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground shadow-glow-purple">
                {s.icon}
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

        <footer className="mt-20 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2026 EverGrow Coin. $EGC is a BEP-20 token on Binance Smart Chain.</p>
          <p className="mt-2 font-mono text-xs break-all">
            Contract: 0xC001BBe2B87079294C63EcE98BdD0a88D761434e
          </p>
        </footer>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Projects" },
  { href: "#contact", label: "Contact Us" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-ink text-concrete/80 text-sm">
        <div className="max-w-[1180px] mx-auto px-7 py-2 flex justify-between items-center">
          <div className="flex gap-6">
            <a href="tel:+2349022222225" className="hover:text-white">
              📞 +234 902 222 2225
            </a>
            <a href="mailto:info@garnetconstruct.com" className="hidden sm:inline hover:text-white">
              ✉ info@garnetconstruct.com
            </a>
          </div>
          <div className="hidden md:block">Mon–Sat, 8am–6pm · Lagos, Nigeria</div>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur border-b border-ink/10">
        <div className="max-w-[1180px] mx-auto px-7 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-ink [clip-path:polygon(0_100%,0_40%,50%_0,100%_40%,100%_100%,65%_100%,65%_55%,35%_55%,35%_100%)]" />
            <span className="font-display font-bold text-lg">
              GARNET <span className="text-rust">CONSTRUCTION</span>
            </span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm">
            {LINKS.map((link) => (
              <a key={link.href} href={link.href} className="relative py-1 group">
                {link.label}
                <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-rust transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-block bg-ink text-paper px-5 py-2.5 text-sm font-medium hover:bg-rust transition-colors"
          >
            Get a quote
          </a>

          <button
            className="md:hidden text-2xl"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {open && (
          <nav className="md:hidden border-t border-ink/10 bg-paper flex flex-col">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-7 py-3 border-b border-ink/10 text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}

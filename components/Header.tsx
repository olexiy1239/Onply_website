"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "features", label: "Features" },
  { id: "demo", label: "Demo" },
  { id: "market", label: "Market" },
  { id: "competition", label: "Competition" },
  { id: "roadmap", label: "Roadmap" },
  { id: "team", label: "Team" },
  { id: "faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToId = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 80; // щоб хедер не перекривав секцію
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false); // закрити бургер після кліку
  };

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? "backdrop-blur-lg bg-black/30" : ""
      }`}
    >
      <div className="container h-16 flex items-center justify-between">
        {/* Логотип */}
        <button
          type="button"
          onClick={scrollToTop}
          className="text-lg font-semibold tracking-wide focus:outline-none"
        >
          <span className="bg-[linear-gradient(90deg,#FF5CA8,#A066FF)] bg-clip-text text-transparent">
            ONPLY
          </span>
        </button>

        {/* Десктопна навігація */}
        <nav className="hidden md:flex gap-6 text-sm text-textSecondary">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => scrollToId(s.id)}
              className="hover:text-white transition-colors"
            >
              {s.label}
            </button>
          ))}
        </nav>

        {/* Правий блок: десктопні кнопки + бургер */}
        <div className="flex items-center gap-3">
          {/* Десктопні Support / Invest */}
          <button
            type="button"
            onClick={() => scrollToId("support")}
            className="btn-ghost hidden sm:inline-block"
          >
            Support
          </button>
          <button
            type="button"
            onClick={() => scrollToId("invest")}
            className="btn-primary hidden sm:inline-block"
          >
            Invest
          </button>

          {/* Бургер для мобіли */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex md:hidden items-center justify-center w-9 h-9 rounded-full border border-white/20 bg-black/40"
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              // Х (закрити)
              <span className="text-xl leading-none">✕</span>
            ) : (
              // ☰ (бургер)
              <span className="text-xl leading-none">☰</span>
            )}
          </button>
        </div>
      </div>

      {/* Мобільне меню (показується тільки коли menuOpen === true) */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-black/90 backdrop-blur-lg">
          <div className="container py-3 flex flex-col gap-2 text-sm">
            {SECTIONS.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => scrollToId(s.id)}
                className="text-left py-2 text-textSecondary hover:text-white"
              >
                {s.label}
              </button>
            ))}

            <div className="mt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => scrollToId("support")}
                className="btn-ghost w-full"
              >
                Support
              </button>
              <button
                type="button"
                onClick={() => scrollToId("invest")}
                className="btn-primary w-full"
              >
                Invest
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

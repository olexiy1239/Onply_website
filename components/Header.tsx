"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`sticky top-0 z-50 ${scrolled ? "backdrop-blur-lg bg-black/30" : ""}`}>
      <div className="container h-16 flex items-center justify-between">
        <div className="text-lg font-semibold tracking-wide">
          <span className="bg-[linear-gradient(90deg,#FF5CA8,#A066FF)] bg-clip-text text-transparent">ONPLY</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-textSecondary">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#demo" className="hover:text-white">Demo</a>
          <a href="#market" className="hover:text-white">Market</a>
          <a href="#competition" className="hover:text-white">Competition</a>
          <a href="#roadmap" className="hover:text-white">Roadmap</a>
          <a href="#team" className="hover:text-white">Team</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#support" className="btn-ghost hidden sm:inline-block">Support</a>
          <a href="#invest" className="btn-primary">Invest</a>
        </div>
      </div>
    </header>
  );
}

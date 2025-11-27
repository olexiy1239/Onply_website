"use client";
import { useState } from "react";

export default function CTACluster() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState<boolean | null>(null);

  async function subscribe() {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      body: JSON.stringify({ email, tag: "investor" }),
      headers: { "Content-Type": "application/json" }
    });
    setOk(res.ok);
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 max-w-xl">
      {/* Кнопка Pitch Deck */}
      <a
        href="#invest"
        className="btn-ghost text-xs sm:text-sm px-4 py-2.5 rounded-xl whitespace-nowrap"
      >
        Request Pitch Deck
      </a>

      {/* Емейл + Join */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 flex-1">
        <div className="flex-1">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full bg-white/5 border border-white/15 rounded-xl px-3 py-2.5 text-xs sm:text-sm outline-none placeholder:text-white/40"
          />
        </div>
        <button
          onClick={subscribe}
          className="btn-ghost text-xs sm:text-sm px-4 py-2.5 rounded-xl whitespace-nowrap"
        >
          Join Waitlist
        </button>
      </div>

      {/* Статус */}
      {ok === true && (
        <span className="text-[11px] sm:text-xs text-emerald-400">
          Joined!
        </span>
      )}
      {ok === false && (
        <span className="text-[11px] sm:text-xs text-rose-400">
          Failed.
        </span>
      )}
    </div>
  );
}

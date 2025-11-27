"use client";

import { useEffect, useMemo, useState } from "react";

type Summary = { raised: number; goal: number; backers: number; currency: string };

// ✅ Читаємо env СТАТИЧНО — Next підставить значення у збірці
const PRICE_IDS = {
  SUPPORTER: process.env.NEXT_PUBLIC_PRICE_ID_SUPPORTER,
  FOUNDER:   process.env.NEXT_PUBLIC_PRICE_ID_FOUNDER,
  ANGEL:     process.env.NEXT_PUBLIC_PRICE_ID_ANGEL,
  SPONSOR:   process.env.NEXT_PUBLIC_PRICE_ID_SPONSOR
} as const;

function formatMoney(cents: number, currency = "GBP") {
  return (cents / 100).toLocaleString(undefined, { style: "currency", currency });
}

export default function SectionTiers() {
  const [loading, setLoading] = useState<string | null>(null);
  const [summary, setSummary] = useState<Summary | null>(null);
  const currency = summary?.currency ?? "GBP";

  // тягнемо зведення кожні 30с
  useEffect(() => {
    let alive = true;
    async function load() {
      try {
        const r = await fetch("/api/support/summary", { cache: "no-store" });
        if (!r.ok) return;
        const j = await r.json();
        if (alive) setSummary(j);
      } catch {}
    }
    load();
    const id = setInterval(load, 30000);
    return () => { alive = false; clearInterval(id); };
  }, []);

  const pct = useMemo(() => {
    if (!summary) return 0;
    const p = Math.round((summary.raised / summary.goal) * 100);
    return Math.min(100, Math.max(0, p));
  }, [summary]);

  async function startCheckout(priceId: string, tierName: string) {
    setLoading(priceId);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, metadata: { tier: tierName } })
      });
      const data = await res.json();
      if (data?.url) window.location.href = data.url;
      else alert(data?.error ?? "Checkout error");
    } catch (e: any) {
      alert(e?.message ?? "Network error");
    } finally {
      setLoading(null);
    }
  }

  const tiers = [
    { name: "Supporter", priceId: PRICE_IDS.SUPPORTER, label: "£5",    perks: ["Early access badge"] },
    { name: "Founder",   priceId: PRICE_IDS.FOUNDER,   label: "£25",   perks: ["Beta + Private Discord"] },
    { name: "Angel",     priceId: PRICE_IDS.ANGEL,     label: "£100",  perks: ["Wall of Thanks + early username"] },
    { name: "Sponsor",   priceId: PRICE_IDS.SPONSOR,   label: "£500+", perks: ["Logo in footer (3 mo) + build insights"] }
  ] as const;

  return (
    <section id="support" className="container py-16 scroll-mt-24">
      <h3 className="text-2xl font-semibold mb-2">Support ONPLY</h3>
      <p className="text-textSecondary mb-6">
        Help us launch the AI-mixed music platform. Choose a tier — you’ll be redirected to secure Stripe Checkout.
      </p>

      <div className="grid md:grid-cols-4 gap-5">
        {tiers.map((t) => {
          const missing = !t.priceId;
          const isLoading = !missing && loading === t.priceId;

          return (
            <div key={t.name} className="card p-5 flex flex-col">
              <div className="flex items-baseline justify-between mb-1">
                <div className="text-lg font-semibold">{t.name}</div>
                <div className="text-sm text-textSecondary">{t.label}</div>
              </div>

              <ul className="text-textSecondary text-sm mb-4 list-disc list-inside space-y-1">
                {t.perks.map((p) => <li key={p}>{p}</li>)}
              </ul>

              <button
                className="btn-primary mt-auto disabled:opacity-50"
                disabled={missing || isLoading}
                aria-busy={isLoading}
                onClick={() => !missing && startCheckout(t.priceId!, t.name)}
                title={missing ? `Set NEXT_PUBLIC_PRICE_ID_${t.name.toUpperCase()} in .env.local` : ""}
              >
                {missing ? `Set NEXT_PUBLIC_PRICE_ID_${t.name.toUpperCase()}` : (isLoading ? "Redirecting…" : "Contribute")}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[linear-gradient(90deg,#FF5CA8,#A066FF)] transition-[width] duration-700"
            style={{ width: `${pct}%` }}
            role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}
          />
        </div>
        <p className="text-xs text-textSecondary mt-2">
          {summary
            ? `${formatMoney(summary.raised, currency)} / ${formatMoney(summary.goal, currency)} (${pct}%) • ${summary.backers} backers`
            : "Loading progress…"}
        </p>
      </div>

      <div className="mt-3 text-[11px] text-white/40">
        Tip: set <code>NEXT_PUBLIC_PRICE_ID_*</code> in <code>.env.local</code>. Currency is {currency}.
      </div>
    </section>
  );
}

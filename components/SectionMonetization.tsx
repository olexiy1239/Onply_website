export default function SectionMonetization() {
    const items = [
      { h: "Freemium + Premium", p: "Ad-supported free tier; Premium unlocks HQ audio, offline, pro features." },
      { h: "Ads & Sponsorships", p: "Native sponsored mixes; brand integrations for launches." },
      { h: "In-App Purchases", p: "Effect packs, extended mix slots." },
      { h: "B2B Licensing", p: "License AI-DJ tech to partners (fitness, radio, apps)." }
    ];
    return (
      <section className="container py-16">
        <h3 className="text-2xl font-semibold mb-6">Monetization</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(i => (
            <div className="card p-5" key={i.h}>
              <div className="font-semibold mb-1">{i.h}</div>
              <p className="text-textSecondary">{i.p}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
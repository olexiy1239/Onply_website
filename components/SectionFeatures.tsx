export default function SectionFeatures() {
    const feats = [
      { title: "AI Seamless Transitions", desc: "Beat-matched, key-aware mixing with zero silence between songs." },
      { title: "Swipe Feed", desc: "TikTok-style discovery for audio — jump vibes instantly." },
      { title: "UGC Mixes", desc: "TikTok-style discovery for audio — jump vibes instantly." },
      { title: "Personalization", desc: "Your flow improves with every like, skip, and listen." }
    ];
    return (
      <section id="features" className="container py-16">
        <h2 className="text-3xl font-semibold mb-6">Why ONPLY stands out</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {feats.map((f) => (
            <div key={f.title} className="card p-5">
              <div className="mb-2 font-semibold">{f.title}</div>
              <p className="text-textSecondary">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
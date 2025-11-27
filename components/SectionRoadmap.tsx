import roadmap from "@/content/roadmap.json";

export default function SectionRoadmap() {
  return (
    <section id="roadmap" className="container py-16">
      <h3 className="text-2xl font-semibold mb-6">Roadmap</h3>
      <div className="relative">
        <div className="absolute left-5 top-0 bottom-0 w-px bg-white/15" />
        <div className="space-y-6">
          {roadmap.items.map((it) => (
            <div key={it.q} className="pl-10">
              <div className="relative">
                <div className="font-semibold">{it.q} — <span className="text-textSecondary">{it.status}</span></div>
                <div className="text-textSecondary">{it.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

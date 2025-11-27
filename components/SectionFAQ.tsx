import faq from "@/content/faq.json";

export default function SectionFAQ() {
  return (
    <section id="faq" className="container py-16">
      <h3 className="text-2xl font-semibold mb-6">FAQ</h3>
      <div className="grid md:grid-cols-2 gap-5">
        {faq.items.map((i) => (
          <div key={i.q} className="card p-5">
            <div className="font-semibold mb-2">{i.q}</div>
            <p className="text-textSecondary">{i.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

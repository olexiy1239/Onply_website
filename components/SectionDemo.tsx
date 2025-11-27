export default function SectionDemo() {
    return (
      <section id="demo" className="container py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="card aspect-video flex items-center justify-center text-textSecondary">
            {/* встав свій відео-демо сорс */}
            <span>Demo video placeholder (60s)</span>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-3">See it in action</h3>
            <ul className="list-disc list-inside text-textSecondary space-y-2">
              <li>Instant swipe transitions (no dead air)</li>
              <li>AI DJ blends BPM & keys</li>
              <li>Lock energy to keep the vibe</li>
            </ul>
            <a className="btn-ghost mt-4 inline-block" href="#invest">Open interactive demo</a>
          </div>
        </div>
      </section>
    );
  }
  
export default function SectionMarket() {
    return (
      <section id="market" className="container py-16">
        <h3 className="text-2xl font-semibold mb-3">Market opportunity</h3>
        <p className="text-textSecondary mb-6">
          Massive intersection of streaming (~$47B+) and short-form discovery. ONPLY targets Gen Z / Millennials globally.
        </p>
        <div className="card p-6">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-semibold">+$20B</div>
              <div className="text-textSecondary text-sm">Global streaming market</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">700M+</div>
              <div className="text-textSecondary text-sm">Streaming users worldwide</div>
            </div>
            <div>
              <div className="text-3xl font-semibold">1B+</div>
              <div className="text-textSecondary text-sm">short-form media users</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
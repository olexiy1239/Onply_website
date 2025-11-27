export default function SectionTeam() {
    return (
      <section id="team" className="container py-16">
        <h3 className="text-2xl font-semibold mb-3">Team</h3>
        <p className="text-textSecondary mb-6">
          Solo founder (product + vision). Advisors onboarding (AI audio, music licensing).
          With funding: hire AI/ML, Mobile, Partnerships, Growth.
        </p>
        <div id="invest" className="card p-6">
          <h4 className="font-semibold mb-2">Raising pre-seed</h4>
          <p className="text-textSecondary mb-4">Request the pitch deck and a live demo.</p>
          <a href="mailto:founder@shoomapp.com" className="btn-primary">Contact Founder</a>
        </div>
      </section>
    );
  }
  
import data from "@/content/competition.json";

export default function SectionCompetition() {
  return (
    <section id="competition" className="container py-16">
      <h3 className="text-2xl font-semibold mb-4">Competitive landscape</h3>
      <div className="overflow-x-auto card">
        <table className="w-full text-sm">
          <thead className="text-left">
            <tr className="border-b border-white/10">
              {data.headers.map((h) => (
                <th key={h} className="px-4 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((row, idx) => (
              <tr key={idx} className="border-b border-white/5">
                {row.map((cell, i) => (
                  <td key={i} className="px-4 py-3">{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

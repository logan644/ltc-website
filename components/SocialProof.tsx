const testimonials = [
  {
    quote:
      "Logan is an outstanding business partner. He takes the time to thoroughly understand the data behind a problem, conducts comprehensive research, and provides concrete examples that make troubleshooting far more efficient. His problem-solving skills are exceptional.",
    name: "Senior Partner",
    title: "Fortune 500 Company",
  },
  {
    quote:
      "Logan brought a wealth of knowledge of data structures and solutions to the table immediately and helped lead the inventory and assessment work for our enterprise reporting partners. He is never shy to share his perspective, which is exactly what you want in a fast-paced initiative.",
    name: "Senior Partner",
    title: "Fortune 500 Company",
  },
  {
    quote:
      "Before working with Logan, we had no consistent or meaningful metrics to evidence our delivery performance. He built them from the ground up, sought feedback throughout, and made sure he fully understood the data before committing to any visualization. The result met the needs of multiple stakeholders across different teams and workflows.",
    name: "Senior Partner",
    title: "Fortune 500 Company",
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Stakeholder feedback
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-slate-50 rounded-xl p-7 border border-slate-200 flex flex-col"
            >
              <p className="text-slate-700 text-sm leading-relaxed flex-1 italic">
                {t.quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

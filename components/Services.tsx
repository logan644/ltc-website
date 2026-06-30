const services = [
  {
    icon: "📈",
    title: "Business Insight & Analysis",
    description:
      "Do you have data but struggle to draw clear conclusions from it? I examine what your business is producing, surface the patterns that matter, and deliver findings in plain language your leadership team can act on.",
    bullets: [
      "Revenue, cost, and operational analysis",
      "Trend identification and root cause investigation",
      "Executive-ready summaries and recommendations",
    ],
  },
  {
    icon: "🔗",
    title: "Data Pipeline & Automation",
    description:
      "Is your data spread across spreadsheets, applications, or databases that requires significant manual effort to consolidate? I build automated workflows that bring it together, keep it current, and free your team to focus on higher-value work.",
    bullets: [
      "Data extraction, transformation, and loading",
      "Scheduled automation & alerting",
      "Reduced manual reporting overhead",
    ],
  },
  {
    icon: "📊",
    title: "Dashboards & Reporting",
    description:
      "I translate your raw data into clear, reliable dashboards tailored to your team's needs. Whether you need a simple weekly summary or an interactive report, I'll build it in the tool that fits your workflow.",
    bullets: [
      "Dashboards designed for non-technical stakeholders",
      "Custom data models built for your business",
      "Flexible delivery across leading BI platforms",
    ],
  },
  {
    icon: "🏗️",
    title: "Data Warehouse Setup",
    description:
      "If your data doesn't yet have a centralized home, I'll build one. I set up clean, well-organized warehouses your whole team can query — without requiring a dedicated data engineer on staff.",
    bullets: [
      "Structured for clarity and long-term maintainability",
      "Roles and permissions configured from the start",
      "SQL-ready from day one",
    ],
  },
  {
    icon: "🌐",
    title: "Data Web Apps",
    description:
      "I build lightweight data applications and internal tools that live on the web, giving your team an accessible, interactive way to explore and act on their data without opening a separate BI tool.",
    bullets: [
      "Internal dashboards and reporting tools",
      "Interactive data exploration for non-technical users",
      "Fully deployed and maintained",
    ],
  },
  {
    icon: "🔍",
    title: "Data Audit & Roadmap",
    description:
      "Unsure where to start or how to prioritize? I review your current data landscape — including spreadsheets, databases, and reporting tools — and deliver a clear assessment of where you are, what gaps exist, and what to address first.",
    bullets: [
      "Current-state review of your data landscape",
      "Specific, prioritized recommendations",
      "Delivered as a written report you can act on",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What I can do for your business
          </h2>
          <p className="text-slate-600 text-lg">
            Project-based engagements with clear deliverables. I work with
            one client at a time to ensure every engagement
            gets the attention it deserves.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-xl p-7 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all"
            >
              <span className="text-3xl mb-4 block">{s.icon}</span>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {s.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {s.description}
              </p>
              <ul className="space-y-1.5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-slate-500">
                    <span className="text-blue-600 mt-0.5 shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

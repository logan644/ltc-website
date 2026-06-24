import Image from "next/image";

const tools = [
  "Python", "SQL", "Snowflake", "Supabase",
  "Jupyter", "QuickSight", "Looker", "Power BI", "Vercel",
  "AI"
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Hi, I'm Logan
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I've spent over a decade working in data across supply
                chain, logistics, pricing, financial services, pharmaceuticals,
                and manufacturing where the stakes of getting the analysis
                wrong are real. That experience has given me a strong sense of what
                rigorous, decision-grade analytical work looks like, and how to
                deliver it efficiently.
              </p>
              <p>
                I also hold an MBA and a Six Sigma Black Belt, which shape how I approach every engagement.
                The goal of a data project isn't a clean pipeline or a
                well-designed dashboard — it's the business decision those things
                enable. I seek to understand
                the business problem first, then work backward to the data.
              </p>
              <p>
                I started this practice to bring that caliber of analytical
                thinking to smaller organizations that don't have the internal
                resources to access it. You get the same standard of work,
                applied directly to your problem, without the overhead.
              </p>
            </div>

            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center text-blue-700 font-semibold hover:text-blue-900 transition-colors"
              >
                Let's work together →
              </a>
            </div>
          </div>

          {/* Right column: photo + stack */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
              <Image
                src="/headshot.jpeg"
                alt="Logan Taylor"
                width={600}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
              <h3 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wider">
                Tools &amp; technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t}
                    className="bg-white border border-slate-200 text-slate-700 text-sm font-medium px-3 py-1.5 rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

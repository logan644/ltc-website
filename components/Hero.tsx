export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-28 md:py-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Your data has answers.
            <br />
            <span className="text-blue-400">I find them.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
            I help small and medium-sized businesses turn raw data into clear
            business insights — without the overhead of a large consulting firm.
            You get direct access to world-class analytical expertise, focused
            entirely on your problem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
            >
              Book a free discovery call
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-sm"
            >
              See what I offer
            </a>
          </div>
          <p className="text-slate-500 text-xs mt-4">
            30 minutes. No obligation. We'll talk through your data challenges and whether I'm the right fit.
          </p>
        </div>
      </div>

    </section>
  );
}

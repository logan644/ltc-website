"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    // TODO: wire up to a form backend (Resend, Formspree, etc.)
    console.log("Form submission:", data);

    // Simulate success for now
    await new Promise((r) => setTimeout(r, 800));
    setStatus("sent");
  }

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left copy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's start with a conversation
            </h2>
            {/* Reciprocity — lead with the free offer, make it feel low-stakes */}
            <p className="text-slate-300 leading-relaxed mb-2">
              I'd love to schedule a 30-minute discovery call with you! There's no
              obligation — I want to understand your data challenges
              and give you an honest assessment of what's possible.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              If we're a good fit, I'll follow up with a clear proposal. If not,
              you'll still walk away with a clearer picture of where to focus.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-xl mt-0.5">✉</span>
                <div>
                  <div className="text-sm font-semibold text-white">Email</div>
                  <a
                    href="mailto:logan@logantaylor.co"
                    className="text-slate-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    logan@logantaylor.co
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-xl mt-0.5">⏱</span>
                <div>
                  <div className="text-sm font-semibold text-white">Response time</div>
                  <div className="text-slate-400 text-sm">Within one business day</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-blue-400 text-xl mt-0.5">📍</span>
                <div>
                  <div className="text-sm font-semibold text-white">Location</div>
                  <div className="text-slate-400 text-sm">Remote — available worldwide</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            {status === "sent" ? (
              <div className="bg-blue-900/40 border border-blue-700 rounded-xl p-8 text-center">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="text-xl font-semibold mb-2">Message received</h3>
                <p className="text-slate-300 text-sm">
                  Thank you for reaching out. I'll be in touch within one
                  business day to set up a time to talk.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="name">
                      Name <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      className="w-full bg-white/5 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="email">
                      Email <span className="text-blue-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      className="w-full bg-white/5 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full bg-white/5 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1.5" htmlFor="message">
                    What are you working on? <span className="text-blue-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Describe your data challenges and what you're hoping to accomplish. There are no wrong answers here."
                    className="w-full bg-white/5 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  {status === "sending" ? "Sending..." : "Request a free discovery call"}
                </button>
                <p className="text-center text-slate-500 text-xs">
                  30 minutes. No obligation. No sales pressure.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

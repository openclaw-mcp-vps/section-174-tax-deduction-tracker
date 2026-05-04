export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#1f2937] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Section 174 Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Calculate Lost Section 174 Deductions for Software Companies
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Track R&amp;D expenses that can no longer be deducted immediately, quantify your tax impact, and generate professional reports for lobbying efforts — all in one secure dashboard.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Tracking — $99/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. Instant access after payment.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-4xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {[
          { title: "Expense Tracking", desc: "Log and categorize all qualifying R&D expenditures by project and employee." },
          { title: "Tax Impact Calculator", desc: "Instantly see how amortization rules increase your effective tax burden year over year." },
          { title: "Lobbying Reports", desc: "Export polished PDF reports showing legislators the real cost to your business." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Professional</p>
          <p className="text-5xl font-bold text-white mb-1">$99</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited R&D expense entries",
              "Real-time Section 174 tax calculator",
              "PDF & CSV report exports",
              "Multi-user team access",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "What is Section 174 and why does it matter?",
              a: "Section 174 of the US tax code previously allowed software companies to immediately deduct R&D expenses. Since 2022, these costs must be amortized over 5 years (15 for foreign research), significantly increasing tax burdens for software businesses."
            },
            {
              q: "Who should use this tool?",
              a: "CFOs, controllers, and tax professionals at software companies of any size who need to track the financial impact of Section 174 amortization and communicate that impact to stakeholders or legislators."
            },
            {
              q: "Is my financial data secure?",
              a: "Yes. All data is encrypted in transit and at rest. We use industry-standard security practices and never share your financial information with third parties."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Section 174 Tracker. All rights reserved.
      </footer>
    </main>
  );
}

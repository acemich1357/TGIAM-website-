export default function GlobalImpactPage() {
  const impactGoals = [
    {
      metric: "Millions",
      target: "Train millions of leaders",
      description: "Through our education platforms, leadership academies, and mentorship programs.",
      icon: "👔",
    },
    {
      metric: "Thousands",
      target: "Support thousands of startups",
      description: "Via accelerator programs, venture studios, and incubation ecosystems.",
      icon: "🚀",
    },
    {
      metric: "Global",
      target: "Accelerate Web3 & AI adoption",
      description: "Making cutting-edge technology accessible to communities worldwide.",
      icon: "🌐",
    },
    {
      metric: "Millions",
      target: "Drive financial inclusion",
      description: "Through UNBNKD and decentralized banking for the unbanked.",
      icon: "💳",
    },
    {
      metric: "Global",
      target: "Empower creators globally",
      description: "Providing tools for monetization, ownership, and distribution.",
      icon: "🎨",
    },
    {
      metric: "Global",
      target: "Support climate innovation",
      description: "Through sustainable platforms and environmental management systems.",
      icon: "🌱",
    },
  ];

  const roadmap = [
    { year: "2024", milestones: ["Foundation building", "MVP launches", "Community growth"] },
    { year: "2025", milestones: ["Platform expansion", "Global outreach", "Strategic partnerships"] },
    { year: "2026", milestones: ["Ecosystem maturity", "Scale operations", "Impact measurement"] },
    { year: "2027+", milestones: ["Global footprint", "Industry leadership", "Sustainable impact"] },
  ];

  return (
    <main className="min-h-screen bg-black">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
            Global <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Impact</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Our vision extends beyond technology — we&apos;re building a better future for millions.
          </p>

          {/* Impact Goals */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {impactGoals.map((goal, idx) => (
              <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
                <div className="text-4xl mb-4">{goal.icon}</div>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-purple-400">{goal.metric}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{goal.target}</h3>
                <p className="text-gray-400 text-sm">{goal.description}</p>
              </div>
            ))}
          </div>

          {/* World Map Visual */}
          <div className="p-8 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20 rounded-2xl border border-white/10 mb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Global Expansion Roadmap</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {roadmap.map((phase, idx) => (
                <div key={idx} className="text-center">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg mb-4">
                    <span className="text-white font-bold">{phase.year}</span>
                  </div>
                  <ul className="space-y-2">
                    {phase.milestones.map((milestone, i) => (
                      <li key={i} className="text-gray-400 text-sm">{milestone}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Join Us in Making an Impact</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Whether you&apos;re an investor, partner, or community member, there&apos;s a place for you in the TGIAM ecosystem.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

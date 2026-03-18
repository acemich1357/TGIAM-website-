export default function BusinessModelPage() {
  const revenueStreams = [
    {
      category: "Platform Revenue",
      items: [
        "Platform subscriptions",
        "Enterprise SaaS licensing",
        "Transaction fees",
        "Marketplace commissions",
      ],
      icon: "💼",
      color: "from-blue-600 to-cyan-600",
    },
    {
      category: "Digital Assets",
      items: [
        "NFT minting & royalties",
        "Blockchain property listings",
        "Digital identity services",
      ],
      icon: "🎨",
      color: "from-purple-600 to-pink-600",
    },
    {
      category: "Ventures",
      items: [
        "Startup accelerator equity",
        "Venture capital",
        "Strategic investments",
      ],
      icon: "🚀",
      color: "from-green-600 to-teal-600",
    },
    {
      category: "Infrastructure",
      items: [
        "Telecom & infrastructure services",
        "Blockchain as a Service",
        "API & developer services",
      ],
      icon: "⚡",
      color: "from-yellow-600 to-orange-600",
    },
    {
      category: "Real Economy",
      items: [
        "Property and coworking revenue",
        "Hospitality services",
        "E-commerce marketplace",
      ],
      icon: "🏢",
      color: "from-indigo-600 to-purple-600",
    },
    {
      category: "Sustainability",
      items: [
        "Climate data & environmental credits",
        "Agricultural blockchain systems",
        "Waste & recycling economy",
      ],
      icon: "🌱",
      color: "from-green-600 to-emerald-600",
    },
    {
      category: "Grants & Partnerships",
      items: [
        "Government grants",
        "Corporate partnerships",
        "Sponsorships",
      ],
      icon: "🤝",
      color: "from-cyan-600 to-blue-600",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
            Business <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Model</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Sustainable revenue generation through diversified platform ecosystems.
          </p>

          <div className="p-8 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20 rounded-2xl border border-white/10 mb-16">
            <p className="text-xl text-gray-300 text-center">
              <span className="text-purple-400 font-semibold">Free access</span> for communities.
              <span className="mx-2">•</span>
              <span className="text-green-400 font-semibold">Sustainable revenue</span> through platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {revenueStreams.map((stream, idx) => (
              <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
                <div className={`w-12 h-12 bg-gradient-to-r ${stream.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                  {stream.icon}
                </div>
                <h2 className="text-xl font-bold text-white mb-4">{stream.category}</h2>
                <ul className="space-y-2">
                  {stream.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-400 text-sm">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

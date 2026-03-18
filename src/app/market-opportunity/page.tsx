export default function MarketOpportunityPage() {
  const markets = [
    {
      name: "AI Market",
      size: "$1.8T+",
      growth: "Rapid growth",
      description: "Artificial intelligence revolutionizing every industry from healthcare to finance.",
      color: "from-purple-600 to-blue-600",
    },
    {
      name: "Fintech",
      size: "$1.5T+",
      growth: "Strong growth",
      description: "Digital financial services transforming banking and payments globally.",
      color: "from-blue-600 to-cyan-600",
    },
    {
      name: "E-commerce",
      size: "$6T+",
      growth: "Steady growth",
      description: "Global online retail continuing to expand across emerging markets.",
      color: "from-green-600 to-teal-600",
    },
    {
      name: "Creator Economy",
      size: "$250B+",
      growth: "Explosive growth",
      description: "Empowering creators with direct monetization and ownership of their work.",
      color: "from-pink-600 to-purple-600",
    },
    {
      name: "Climate Tech",
      size: "Rapid growth",
      growth: "Emerging opportunity",
      description: "Innovative solutions for sustainability and environmental impact.",
      color: "from-green-600 to-emerald-600",
    },
    {
      name: "Web3 & Blockchain",
      size: "Trillion-dollar potential",
      growth: "Early stage",
      description: "Decentralized infrastructure reshaping ownership and value transfer.",
      color: "from-yellow-600 to-orange-600",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
            Market <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Opportunity</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Operating at the intersection of multiple trillion-dollar markets.
          </p>

          <div className="p-8 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20 rounded-2xl border border-white/10 mb-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Multi-Trillion Dollar TAM</h2>
            <p className="text-gray-400">
              TGIAM sits at the convergence of AI, blockchain, fintech, and creator economy - all rapidly growing markets with massive global potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {markets.map((market, idx) => (
              <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${market.color} rounded-lg mb-4`}>
                  <span className="text-white font-bold">{market.name}</span>
                </div>
                <div className="flex items-end justify-between mb-4">
                  <span className="text-4xl font-bold text-white">{market.size}</span>
                  <span className="text-green-400 text-sm mb-1">{market.growth}</span>
                </div>
                <p className="text-gray-400 text-sm">{market.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-400 mb-2">6+</div>
              <div className="text-white font-semibold">Core Markets</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-400 mb-2">$10T+</div>
              <div className="text-white font-semibold">Combined TAM</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-cyan-400 mb-2">Global</div>
              <div className="text-white font-semibold">Reach</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

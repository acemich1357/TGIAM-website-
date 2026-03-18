export default function DefensibilityPage() {
  const defensibilityFactors = [
    {
      title: "Ecosystem Network Effects",
      description: "As more platforms connect within TGIAM, each becomes more valuable. Users of UNBNKD can access Chunbiyo startups, who can list on our marketplace - creating a self-reinforcing growth cycle.",
      icon: "🔗",
      color: "from-purple-600 to-blue-600",
    },
    {
      title: "Interconnected Platforms",
      description: "Our platforms are designed to work together seamlessly. A creator on Makona can monetize through UNBNKD, access funding through Chunbiyo, and list property on our marketplace - all within one ecosystem.",
      icon: "🌐",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Community Scale",
      description: "With foundations, education programs, and developer guilds building our community, we create a large, engaged user base that drives adoption and creates switching costs.",
      icon: "👥",
      color: "from-pink-600 to-purple-600",
    },
    {
      title: "Proprietary Integrations",
      description: "Custom blockchain infrastructure, AI tools, and cross-platform APIs create technical barriers that are difficult for competitors to replicate.",
      icon: "🔐",
      color: "from-yellow-600 to-orange-600",
    },
    {
      title: "Developer Ecosystem",
      description: "Developer guilds, certification programs, and our AI Vibe Coding platform create a workforce skilled in our ecosystem, making it the natural choice for new projects.",
      icon: "💻",
      color: "from-green-600 to-teal-600",
    },
    {
      title: "Multi-Sector Infrastructure",
      description: "From telecom to agriculture, healthcare to hospitality - our broad infrastructure across industries creates resilience and multiple growth vectors.",
      icon: "🏢",
      color: "from-indigo-600 to-purple-600",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Defensibility</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Not a single app — a global system. Our competitive moats run deep.
          </p>

          <div className="p-8 bg-gradient-to-r from-purple-900/20 via-black to-blue-900/20 rounded-2xl border border-white/10 mb-16 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Not a Single App — A Global System</h2>
            <p className="text-gray-400">
              TGIAM is built as an interconnected ecosystem where each platform strengthens the others, creating durable competitive advantages that compound over time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {defensibilityFactors.map((factor, idx) => (
              <div key={idx} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
                <div className="flex items-start">
                  <div className={`w-14 h-14 bg-gradient-to-r ${factor.color} rounded-xl flex items-center justify-center text-2xl mr-4 flex-shrink-0`}>
                    {factor.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white mb-3">{factor.title}</h2>
                    <p className="text-gray-400 leading-relaxed">{factor.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

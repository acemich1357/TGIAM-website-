export default function EcosystemPage() {
  const ecosystemSections = [
    {
      title: "Core Infrastructure",
      icon: "⚡",
      color: "from-purple-600 to-blue-600",
      items: [
        "UNBNKD – Decentralized banking & digital identity",
        "Blockchain telecom",
        "Blockchain business systems",
        "AI Vibe Coding platform",
      ],
    },
    {
      title: "Entrepreneurship",
      icon: "🚀",
      color: "from-blue-600 to-cyan-600",
      items: [
        "Chunbiyo – Accelerator & Venture Studio",
        "Startup incubator",
        "Global coworking spaces",
        "MoranVerse – Virtual collaboration",
      ],
    },
    {
      title: "Creator Economy",
      icon: "🎨",
      color: "from-pink-600 to-purple-600",
      items: [
        "Makona – NFT creation",
        "Blockchain streaming platform",
        "Blockchain media platform",
        "NFT property & rental marketplace",
      ],
    },
    {
      title: "Education & Leadership",
      icon: "🎓",
      color: "from-yellow-600 to-orange-600",
      items: [
        "UECSO education platform",
        "Leadership academies",
        "Developer guilds",
        "Peer-to-peer mentorship",
        "Certification programs",
      ],
    },
    {
      title: "Sustainability & Real Economy",
      icon: "🌱",
      color: "from-green-600 to-teal-600",
      items: [
        "Lishe – Urban & vertical farming",
        "Taka Bank – Waste & recycling economy",
        "Climate management app",
        "Environmental management platform",
        "Agriculture blockchain system",
      ],
    },
    {
      title: "Industry Platforms",
      icon: "🏢",
      color: "from-indigo-600 to-purple-600",
      items: [
        "Blockchain e-commerce marketplace",
        "Property management platform",
        "Hospitality & tourism platform",
        "Gemstone & jewelry marketplace",
        "Medical protocol & community health platform",
        "Audio-visual & 3D printing studio",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
            The <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">TGIAM</span> Ecosystem
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            An interconnected network of platforms powering the next generation of global innovation.
          </p>

          {/* Interactive Ecosystem Visual */}
          <div className="relative mb-24 p-12 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20 rounded-3xl border border-white/10">
            <div className="flex flex-wrap justify-center gap-8">
              {ecosystemSections.map((section, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className={`w-24 h-24 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-lg`}>
                    {section.icon}
                  </div>
                  <span className="text-white font-semibold text-center">{section.title}</span>
                </div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">TGIAM</span>
              </div>
            </div>
          </div>

          {/* Platform Details */}
          <div className="space-y-16">
            {ecosystemSections.map((section, idx) => (
              <div key={idx} className="p-8 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center text-2xl mr-4`}>
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                </div>
                <ul className="grid md:grid-cols-2 gap-4">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
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

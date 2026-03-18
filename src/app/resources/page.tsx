export default function ResourcesPage() {
  const resources = [
    {
      category: "Whitepapers",
      items: [
        { name: "TGIAM Whitepaper", description: "Complete ecosystem overview", status: "Available" },
        { name: "Tokenomics Model", description: "TGIAM token economics", status: "Coming Soon" },
        { name: "Technical Architecture", description: "Platform technical details", status: "Coming Soon" },
      ],
      icon: "📄",
      color: "from-purple-600 to-blue-600",
    },
    {
      category: "Roadmaps",
      items: [
        { name: "2024-2025 Roadmap", description: "Development milestones", status: "Available" },
        { name: "Platform Launch Timeline", description: "MVP and launch schedule", status: "Available" },
        { name: "Expansion Plan", description: "Global growth strategy", status: "Coming Soon" },
      ],
      icon: "🗺️",
      color: "from-blue-600 to-cyan-600",
    },
    {
      category: "Governance",
      items: [
        { name: "TGIAM Constitution", description: "Core principles and values", status: "Available" },
        { name: "Governance Model", description: "Decision-making framework", status: "Available" },
        { name: "Community Guidelines", description: "Participation rules", status: "Available" },
      ],
      icon: "⚖️",
      color: "from-green-600 to-teal-600",
    },
    {
      category: "Press & Media",
      items: [
        { name: "Press Kit", description: "Brand assets and press releases", status: "Available" },
        { name: "Media Coverage", description: "News and interviews", status: "Coming Soon" },
        { name: "Blog / Insights", description: "Thought leadership articles", status: "Coming Soon" },
      ],
      icon: "📰",
      color: "from-pink-600 to-purple-600",
    },
    {
      category: "Developer Resources",
      items: [
        { name: "API Documentation", description: "Integration guides", status: "Coming Soon" },
        { name: "SDK Downloads", description: "Development tools", status: "Coming Soon" },
        { name: "GitHub Repositories", description: "Open source projects", status: "Coming Soon" },
      ],
      icon: "💻",
      color: "from-yellow-600 to-orange-600",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Resources</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Documentation, guides, and materials for our community and partners.
          </p>

          <div className="space-y-8">
            {resources.map((category, idx) => (
              <div key={idx} className="p-8 bg-white/5 rounded-2xl border border-white/10">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center text-2xl mr-4`}>
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="p-4 bg-black/30 rounded-xl border border-white/5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-semibold">{item.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${item.status === 'Available' ? 'bg-green-600/20 text-green-400' : 'bg-yellow-600/20 text-yellow-400'}`}>
                          {item.status}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                      {item.status === "Available" && (
                        <button className="mt-3 text-purple-400 text-sm hover:text-purple-300 transition-colors">
                          Download →
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

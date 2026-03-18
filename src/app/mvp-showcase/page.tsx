import Link from "next/link";

export default function MVPShowcasePage() {
  const mvpProjects = [
    {
      name: "UNBNKD MVP",
      status: "Live",
      statusColor: "bg-green-500",
      description: "Offline banking protocol with digital identity system and payment infrastructure.",
      features: [
        "Offline banking protocol",
        "Digital identity system",
        "Payment infrastructure",
      ],
      cta: "Request Access",
    },
    {
      name: "Chunbiyo MVP",
      status: "In Progress",
      statusColor: "bg-yellow-500",
      description: "Accelerator framework with startup onboarding system and innovation ecosystem.",
      features: [
        "Accelerator framework",
        "Startup onboarding system",
        "Innovation ecosystem",
      ],
      cta: "Join Waitlist",
    },
    {
      name: "NFT Rental & Property Marketplace",
      status: "In Progress",
      statusColor: "bg-yellow-500",
      description: "Smart contract rental agreements with blockchain property listings and transparent leasing systems.",
      features: [
        "Smart contract rental agreements",
        "Blockchain property listings",
        "Transparent leasing systems",
      ],
      cta: "Request Access",
    },
    {
      name: "Pastures Platform",
      status: "In Progress",
      statusColor: "bg-yellow-500",
      description: "Community and property ecosystem connecting landowners, investors, and agricultural ventures.",
      features: [
        "Community ecosystem",
        "Property management",
        "Agricultural investments",
      ],
      cta: "Learn More",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
            MVP <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Showcase</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Explore our live and in-progress platforms powering the TGIAM ecosystem.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {mvpProjects.map((project, idx) => (
              <div key={idx} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                  <div className="flex items-center">
                    <span className={`w-3 h-3 ${project.statusColor} rounded-full mr-2`} />
                    <span className="text-gray-400 text-sm">{project.status}</span>
                  </div>
                </div>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <ul className="space-y-2 mb-8">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  {project.cta}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl border border-white/10 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Want Early Access?</h2>
            <p className="text-gray-400 mb-6">Join our waitlist to get early access to our platforms and help shape the future of TGIAM.</p>
            <Link href="/partners" className="inline-block px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

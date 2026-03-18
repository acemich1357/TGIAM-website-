export default function FoundationsPage() {
  const foundations = [
    {
      name: "Dak Maliet Foundation",
      mission: "Empowering communities through education and sustainable development initiatives.",
      focus: ["Education access", "Community development", "Youth empowerment"],
      programs: ["Scholarship programs", "Community centers", "Skill training"],
      impact: "10,000+ beneficiaries",
    },
    {
      name: "Kujari Ngidari Foundation",
      mission: "Fostering innovation and entrepreneurship in underserved regions.",
      focus: ["Startup support", "Innovation hubs", "Economic development"],
      programs: ["Business incubation", "Mentorship networks", "Seed funding"],
      impact: "500+ startups supported",
    },
    {
      name: "AK Foundation",
      mission: "Advancing leadership and personal development across generations.",
      focus: ["Leadership training", "Character building", "Mentorship"],
      programs: ["Leadership academies", "Young leaders program", "Executive coaching"],
      impact: "5,000+ leaders trained",
    },
    {
      name: "Humanitarian Division",
      mission: "Providing rapid response and sustainable aid to communities in need.",
      focus: ["Disaster relief", "Food security", "Healthcare access"],
      programs: ["Emergency response", "Food distribution", "Medical missions"],
      impact: "50,000+ aid recipients",
    },
    {
      name: "Leadership Development Programs",
      mission: "Building the next generation of visionary global leaders.",
      focus: ["Executive leadership", "Team management", "Strategic thinking"],
      programs: ["CEO mentorship", "Leadership summits", "Industry forums"],
      impact: "1,000+ executives developed",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Foundations</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            TGIAM operates as a company with affiliate foundations dedicated to driving positive change across education, entrepreneurship, leadership, and humanitarian efforts.
          </p>

          <div className="space-y-8">
            {foundations.map((foundation, idx) => (
              <div key={idx} className="p-8 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{foundation.name}</h2>
                    <p className="text-gray-400">{foundation.mission}</p>
                  </div>
                  <div className="mt-4 md:mt-0 px-4 py-2 bg-purple-600/20 rounded-lg border border-purple-500/30">
                    <span className="text-purple-400 font-semibold">{foundation.impact}</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-white font-semibold mb-3">Focus Areas</h3>
                    <ul className="space-y-2">
                      {foundation.focus.map((area, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                          {area}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-3">Programs</h3>
                    <ul className="space-y-2">
                      {foundation.programs.map((program, i) => (
                        <li key={i} className="flex items-center text-gray-300">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-3" />
                          {program}
                        </li>
                      ))}
                    </ul>
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

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        
        {/* Orbital ecosystem visual */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-96 h-96">
            <div className="absolute inset-0 border border-purple-500/30 rounded-full animate-pulse" style={{ animationDuration: '3s' }} />
            <div className="absolute inset-8 border border-blue-500/30 rounded-full animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute inset-16 border border-cyan-500/30 rounded-full animate-pulse" style={{ animationDuration: '5s' }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">TGIAM</span>
              </div>
            </div>
            {/* Orbiting nodes */}
            <div className="absolute w-3 h-3 bg-purple-500 rounded-full top-0 left-1/2 -translate-x-1/2 animate-spin" style={{ animationDuration: '8s' }} />
            <div className="absolute w-3 h-3 bg-blue-500 rounded-full bottom-0 left-1/4 animate-spin" style={{ animationDuration: '10s' }} />
            <div className="absolute w-3 h-3 bg-cyan-500 rounded-full bottom-0 right-1/4 animate-spin" style={{ animationDuration: '12s' }} />
            <div className="absolute w-3 h-3 bg-pink-500 rounded-full top-1/4 right-0 animate-spin" style={{ animationDuration: '14s' }} />
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Building the Infrastructure for the<br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Next Global Innovation Economy
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A global ecosystem powered by AI, blockchain, entrepreneurship, and leadership development.
          </p>
          <p className="text-2xl md:text-3xl text-gray-400 mb-12 italic">
            &quot;The sky is not the limit when you can see the space.&quot;
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/ecosystem" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Explore the Ecosystem
            </Link>
            <Link href="/mvp-showcase" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
              View Our Platforms
            </Link>
            <Link href="/partners" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
              Partner With Us
            </Link>
            <Link href="/partners" className="px-8 py-4 bg-transparent text-white font-semibold rounded-lg border border-cyan-500/50 hover:bg-cyan-500/10 transition-colors">
              Invest in the Future
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 px-4 bg-gradient-to-b from-black to-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Who We Are
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                A MORAN : TGIAM is a global development, leadership, and technology ecosystem building interconnected platforms that empower entrepreneurs, creators, developers, students, and communities.
              </p>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We combine:
              </p>
              <ul className="space-y-4">
                {['AI innovation', 'Blockchain infrastructure', 'Startup acceleration', 'Creator economies', 'Digital finance', 'Climate & sustainability systems', 'Global collaboration'].map((item) => (
                  <li key={item} className="flex items-center text-gray-300">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-8">
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
                <p className="text-gray-300">To unlock global human potential through technology and opportunity.</p>
              </div>
              <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                <p className="text-gray-300">To build the world&apos;s most powerful decentralized innovation ecosystem.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK LINKS SECTION */}
      <section className="py-24 px-4 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Explore TGIAM</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Ecosystem', desc: 'Discover our interconnected platforms', href: '/ecosystem', color: 'from-purple-600 to-blue-600' },
              { title: 'MVP Showcase', desc: 'See our live and in-progress platforms', href: '/mvp-showcase', color: 'from-blue-600 to-cyan-600' },
              { title: 'Business Model', desc: 'How we create sustainable value', href: '/business-model', color: 'from-cyan-600 to-green-600' },
              { title: 'Market Opportunity', desc: 'Trillion-dollar markets we operate in', href: '/market-opportunity', color: 'from-green-600 to-yellow-600' },
              { title: 'Global Impact', desc: 'Our vision for transforming lives', href: '/global-impact', color: 'from-yellow-600 to-orange-600' },
              { title: 'Partner With Us', desc: 'Join the innovation revolution', href: '/partners', color: 'from-orange-600 to-red-600' },
            ].map((item) => (
              <Link key={item.title} href={item.href} className="group p-8 bg-black rounded-2xl border border-white/10 hover:border-white/30 transition-all hover:transform hover:-translate-y-1">
                <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} rounded-lg mb-4`}>
                  <span className="text-white font-semibold">{item.title}</span>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

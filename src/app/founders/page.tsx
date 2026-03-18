import Link from "next/link";

export default function FoundersPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Founder</span>
          </h1>

          <div className="p-8 bg-white/5 rounded-2xl border border-white/10">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-48 h-48 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-6xl font-bold">AM</span>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-2">Ace Michel</h2>
                <p className="text-purple-400 text-lg mb-4">Founder</p>
                <p className="text-gray-400 mb-6">
                  Visionary entrepreneur focused on AI, blockchain, and global innovation ecosystems.
                </p>
                
                <div className="flex gap-4 mb-6">
                  <a 
                    href="https://www.linkedin.com/in/ace-michel-ngidari-36896013a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-8 bg-white/5 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Founder Story</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              An unconventional entrepreneur, Ace has been homeless, fought with drug abuse, been misunderstood by his peers and even his family due to his ambitions and beliefs in deep tech, future tech, and life philosophies and religious freedom.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              But he has been part of great innovations and seen the conception of great innovations under web3 and is currently working on building the next big thing in web3 with A Moran: TGIAM.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              A believer in redemption and second chances, his vision is to create greatness in people and societies. The next big ecosystem run by a believer in remote work before they became mainstream, he believes he has it cracked.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The first adopter of the slogan <span className="text-purple-400 font-semibold">TGIAM</span>, <span className="italic">greatness is the limit</span>
            </p>
          </div>

          <div className="mt-8 p-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Vision Statement</h3>
            <p className="text-2xl text-purple-400 font-bold">The great I Ace Michel</p>
          </div>
        </div>
      </section>
    </main>
  );
}

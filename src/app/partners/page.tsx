"use client";

import { useState } from "react";

function getInitialPitchDeckState() {
  if (typeof window === "undefined") {
    return { available: false, name: "" };
  }
  const deck = localStorage.getItem("tgiam_pitch_deck");
  const name = localStorage.getItem("tgiam_pitch_deck_name");
  return {
    available: !!deck,
    name: name || "Pitch Deck",
  };
}

const initialPitchDeck = getInitialPitchDeckState();

export default function PartnersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    interest: "",
    message: "",
  });
  const [pitchDeckAvailable] = useState(initialPitchDeck.available);
  const [pitchDeckName] = useState(initialPitchDeck.name);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! We will be in touch soon.");
  };

  const partnershipTypes = [
    {
      title: "Partner with us",
      description: "Strategic partnerships to expand the ecosystem",
      icon: "🤝",
    },
    {
      title: "Join the ecosystem",
      description: "Become part of our interconnected platform network",
      icon: "🌐",
    },
    {
      title: "Invest in TGIAM",
      description: "Investment opportunities in our vision and platforms",
      icon: "💰",
    },
    {
      title: "Become a founding member",
      description: "Get exclusive early access and governance rights",
      icon: "⭐",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
            Partner with <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">TGIAM</span>
          </h1>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-3xl mx-auto">
            Join the innovation revolution. Connect with us to build the future together.
          </p>

          {/* Partnership Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {partnershipTypes.map((type, idx) => (
              <div key={idx} className="p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-colors text-center">
                <div className="text-4xl mb-4">{type.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                <p className="text-gray-400 text-sm">{type.description}</p>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
              <p className="text-gray-400 mb-8">
                Whether you&apos;re interested in partnering, investing, or joining our ecosystem, we&apos;d love to hear from you.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Interest</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                    required
                  >
                    <option value="">Select your interest</option>
                    <option value="partner">Partner with us</option>
                    <option value="invest">Invest in TGIAM</option>
                    <option value="ecosystem">Join the ecosystem</option>
                    <option value="founding">Become a founding member</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:border-purple-500 focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
                >
                  Submit
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Download Resources</h2>
              <div className="space-y-4">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2">Pitch Deck</h3>
                  <p className="text-gray-400 text-sm mb-4">Comprehensive overview of TGIAM vision, ecosystem, and opportunities.</p>
                  {pitchDeckAvailable ? (
                    <a
                      href={typeof window !== "undefined" ? localStorage.getItem("tgiam_pitch_deck") || "" : ""}
                      download={pitchDeckName}
                      className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      Download PDF
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm">Coming Soon</span>
                  )}
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                  <h3 className="text-lg font-bold text-white mb-2">Whitepaper</h3>
                  <p className="text-gray-400 text-sm mb-4">Technical deep-dive into our platforms, technology, and tokenomics.</p>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Download PDF
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

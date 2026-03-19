import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A MORAN : THE GREAT I AM (TGIAM) | Global Innovation Ecosystem",
  description: "A global ecosystem powered by AI, blockchain, entrepreneurship, and leadership development. Building the infrastructure for the next global innovation economy.",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/foundations", label: "Foundations" },
  { href: "/mvp-showcase", label: "MVP Showcase" },
  { href: "/business-model", label: "Business Model" },
  { href: "/market-opportunity", label: "Market" },
  { href: "/defensibility", label: "Defensibility" },
  { href: "/global-impact", label: "Impact" },
  { href: "/founders", label: "Founders" },
  { href: "/partners", label: "Partners" },
  { href: "/resources", label: "Resources" },
  { href: "/admin", label: "Admin" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2">
                <span className="text-xl font-bold text-white">TGIAM</span>
              </Link>
              <div className="hidden md:flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
        <div className="pt-16">{children}</div>
        <footer className="bg-black border-t border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-bold text-white mb-4">A MORAN : TGIAM</h3>
                <p className="text-gray-400 text-sm">Building the infrastructure for the next global innovation economy.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Platforms</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/ecosystem" className="hover:text-white">Ecosystem</Link></li>
                  <li><Link href="/mvp-showcase" className="hover:text-white">MVP Showcase</Link></li>
                  <li><Link href="/business-model" className="hover:text-white">Business Model</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/founders" className="hover:text-white">Founders</Link></li>
                  <li><Link href="/foundations" className="hover:text-white">Foundations</Link></li>
                  <li><Link href="/partners" className="hover:text-white">Partners</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><a href="https://www.linkedin.com/in/ace-michel-ngidari-36896013a" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
                  <li><Link href="/resources" className="hover:text-white">Resources</Link></li>
                  <li><Link href="/admin" className="hover:text-white">Admin Login</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-sm text-gray-400">
                <a href="mailto:amorantgiam@gmail.com" className="hover:text-white">✉ amorantgiam@gmail.com</a>
                <span className="hidden md:inline">|</span>
                <a href="tel:+254700757159" className="hover:text-white">📞 +254700757159</a>
                <span className="hidden md:inline">|</span>
                <a href="https://www.tgiam.org" target="_blank" rel="noopener noreferrer" className="hover:text-white">🌐 www.tgiam.org</a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
              <p>&copy; {new Date().getFullYear()} A MORAN : THE GREAT I AM (TGIAM). All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "MeetYourBot — Your Law Firm's New Team Member",
  description: 'AI chatbot agents for law firms. 24/7 lead capture, instant notifications, branded to your firm. Bot in a Box™ onboarding.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <nav className="bg-[#0F172A] text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-xl font-black tracking-tight hover:opacity-90 transition-opacity">
              <span className="text-2xl">🤖</span>
              <span>Meet<span className="text-[#FF6B35]">Your</span>Bot</span>
            </Link>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <Link href="/how-it-works" className="hover:text-[#FF6B35] transition-colors">How It Works</Link>
              <Link href="/for-law-firms" className="hover:text-[#FF6B35] transition-colors">For Law Firms</Link>
              <Link href="/pricing" className="hover:text-[#FF6B35] transition-colors">Pricing</Link>
              <Link href="/blog" className="hover:text-[#FF6B35] transition-colors">Blog</Link>
              <Link href="/about" className="hover:text-[#FF6B35] transition-colors">About</Link>
              <Link href="/pricing" className="bg-[#FF6B35] hover:bg-[#FF8C69] text-white px-5 py-2 rounded-full font-semibold transition-colors">
                Meet Your Bot →
              </Link>
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="bg-[#0F172A] text-white py-12 mt-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 text-lg font-black mb-3">
                  <span>🤖</span>
                  <span>Meet<span className="text-[#FF6B35]">Your</span>Bot</span>
                </div>
                <p className="text-gray-400 text-sm">Your new team member never sleeps, never takes a day off, and never misses a lead.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-[#FF6B35]">Product</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                  <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                  <li><Link href="/for-law-firms" className="hover:text-white transition-colors">For Law Firms</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-[#FF6B35]">Company</h4>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-[#FF6B35]">Get Started</h4>
                <Link href="/pricing" className="bg-[#FF6B35] hover:bg-[#FF8C69] text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors inline-block">
                  Meet Your Bot →
                </Link>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
              <p>© 2026 MeetYourBot. Founded March 27, 2026. The bot that never sleeps, never misses a lead, and fits in a box.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}

import Link from 'next/link'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#0F172A] text-white py-24 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-[#FF6B35] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
              Now Available for Texas Law Firms
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Your law firm&apos;s new team member{' '}
              <span className="text-[#FF6B35]">never sleeps.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              MeetYourBot puts a smart, branded chatbot on your website — one that captures leads,
              answers client questions, and notifies your phone the moment someone needs you.
              All day. All night. Every day of the year.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/pricing"
                className="bg-[#FF6B35] hover:bg-[#FF8C69] text-white px-8 py-4 rounded-full text-lg font-bold transition-colors shadow-lg"
              >
                Meet Your Bot →
              </Link>
              <Link
                href="/how-it-works"
                className="border border-white/30 hover:border-[#FF6B35] text-white hover:text-[#FF6B35] px-8 py-4 rounded-full text-lg font-semibold transition-colors"
              >
                See how it works →
              </Link>
            </div>
          </div>

          {/* Bot in a Box™ Animation */}
          <div className="flex justify-center items-center">
            <div className="perspective-box flex flex-col items-center">
              {/* Bot rising from box */}
              <div className="bot-rise bot-float text-8xl mb-[-16px] z-10">🤖</div>
              {/* Box lid opening */}
              <div className="box-lid text-6xl leading-none">🪄</div>
              {/* Box body */}
              <div className="text-7xl leading-none">📦</div>
              <div className="mt-6 text-center">
                <span className="inline-block bg-[#FF6B35]/20 border border-[#FF6B35]/40 text-[#FF6B35] text-sm font-bold px-4 py-2 rounded-full">
                  ✨ Bot in a Box™
                </span>
                <p className="text-gray-400 text-sm mt-2">Unbox your bot. Go live in 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-[#FF6B35] py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-8 text-white text-sm font-semibold">
          <span>⭐ Trusted by 50+ law firms across Texas</span>
          <span>•</span>
          <span>📞 Average 3.2x more leads captured after hours</span>
          <span>•</span>
          <span>⚡ Live in 24 hours or less</span>
          <span>•</span>
          <span>🔒 No case data ever stored in your bot&apos;s memory</span>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0F172A] mb-4">
              Everything your firm needs. Nothing it doesn&apos;t.
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your bot works the late shift, the weekend shift, and every holiday. Here&apos;s what it does.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">24/7 Answers</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your bot answers client questions around the clock — case types, fee structures,
                office hours, next steps. No voicemail. No waiting.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Lead Capture</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every visitor is a potential client. Your bot collects names, phone numbers,
                case details, and intent — then stores it all in your dashboard.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">📲</div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Instant Notifications</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                The moment someone fills out a lead form, your phone buzzes. Real-time push
                notifications mean you can respond before your competitor does.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Branded Bot</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your bot has your firm&apos;s name, colors, and personality. Clients feel like they&apos;re
                talking to your team — because they are. (Sort of.)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0F172A] mb-4">How it works</h2>
            <p className="text-xl text-gray-600">Three steps. One very happy law firm.</p>
          </div>
          <div className="space-y-12">
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#FF6B35] text-white text-2xl font-black flex items-center justify-center shadow-lg">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Purchase your plan</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Pick a tier that fits your firm. Starter gets you one bot. Pro gets you three.
                  Agency gets you as many as you want. All plans include our core features —
                  24/7 chat, lead capture, and instant notifications. No contracts. Cancel any time.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#FF6B35] text-white text-2xl font-black flex items-center justify-center shadow-lg">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">
                  Unbox your bot{' '}
                  <span className="text-[#FF6B35] text-lg font-semibold">(Bot in a Box™)</span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  This is our favorite part. After purchase, you&apos;re treated to the Bot in a Box™ experience —
                  a dramatic animated unboxing where your bot literally rises out of a box, ready to work.
                  You name it. You brand it. You watch it come to life. It&apos;s ridiculous fun.
                  And then it gets to work.
                </p>
              </div>
            </div>
            <div className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#FF6B35] text-white text-2xl font-black flex items-center justify-center shadow-lg">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Go live in 24 hours</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Paste one line of code on your website (or we do it for you). Upload your documents —
                  FAQs, fee schedules, case types. We train your bot. It goes live within 24 hours.
                  From that moment on, not a single after-hours lead slips through the cracks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-24 px-4 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-[#0F172A] mb-4">Simple, honest pricing</h2>
            <p className="text-xl text-gray-600">No setup fees. No surprises. No enterprise BS.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#0F172A] mb-1">Starter</h3>
              <p className="text-gray-500 text-sm mb-4">Perfect for solo practitioners</p>
              <div className="mb-6">
                <span className="text-5xl font-black text-[#0F172A]">$49</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li className="flex gap-2"><span className="text-[#FF6B35]">✓</span> 1 branded bot</li>
                <li className="flex gap-2"><span className="text-[#FF6B35]">✓</span> 500 conversations/mo</li>
                <li className="flex gap-2"><span className="text-[#FF6B35]">✓</span> Lead capture + notifications</li>
                <li className="flex gap-2"><span className="text-[#FF6B35]">✓</span> Email support</li>
                <li className="flex gap-2"><span className="text-[#FF6B35]">✓</span> Bot in a Box™ onboarding</li>
              </ul>
              <Link href="/pricing" className="block text-center border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Get started →
              </Link>
            </div>

            {/* Pro — Most Popular */}
            <div className="bg-[#0F172A] rounded-2xl p-8 border border-[#FF6B35] shadow-xl relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B35] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Pro</h3>
              <p className="text-gray-400 text-sm mb-4">For growing law firms</p>
              <div className="mb-6">
                <span className="text-5xl font-black text-white">$149</span>
                <span className="text-gray-400">/mo</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-300 mb-8">
                <li className="flex gap-2"><span className="text-[#FF6B35]">✓</span> 3 branded bots</li>
                <li className="flex gap-2"><span className="text-[#FF6B35]">✓</span> 2,500 conversations/mo</li>
                <li className="flex gap-2"><span className="text-[#FF6B35]">✓</span> Priority support</li>
                <li className="flex gap-2"><span className="text-[#FF6B35]">✓</span> More powerful AI model</li>
                <li className="flex gap-2"><span className="text-[#FF6B35]">✓</span> Everything in Starter</li>
              </ul>
              <Link href="/pricing" className="block text-center bg-[#FF6B35] hover:bg-[#FF8C69] text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Get started →
              </Link>
            </div>

            {/* Agency */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-[#0F172A] mb-1">Agency</h3>
              <p className="text-gray-500 text-sm mb-4">Multi-location firms & agencies</p>
              <div className="mb-6">
                <span className="text-5xl font-black text-[#0F172A]">$349</span>
                <span className="text-gray-500">/mo</span>
              </div>
              <ul className="space-y-3 text-sm text-gray-600 mb-8">
                <li className="flex gap-2"><span className="text-[#FF6B35]">✓</span> Unlimited bots</li>
                <li className="flex gap-2"><span className="text-[#FF6B35]">✓</span> Unlimited conversations</li>
                <li className="flex gap-2"><span className="text-[#FF6B35]">✓</span> Dedicated support</li>
                <li className="flex gap-2"><span className="text-[#FF6B35]">✓</span> Best AI model available</li>
                <li className="flex gap-2"><span className="text-[#FF6B35]">✓</span> Everything in Pro</li>
              </ul>
              <Link href="/pricing" className="block text-center border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-6 py-3 rounded-full font-semibold transition-colors">
                Get started →
              </Link>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Knowledge Base add-on: $29/mo per bot. Train your bot on your own documents, PDFs, and website content.
          </p>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="bg-[#FF6B35] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">🤖</div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to meet your bot?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join 50+ Texas law firms that stopped losing after-hours leads.
            Your bot is waiting in its box. Let&apos;s open it.
          </p>
          <Link
            href="/pricing"
            className="inline-block bg-white text-[#FF6B35] hover:bg-[#F8FAFC] px-10 py-5 rounded-full text-xl font-black transition-colors shadow-xl"
          >
            Meet Your Bot — Starting at $49/mo →
          </Link>
          <p className="text-white/70 text-sm mt-4">No contracts. Cancel any time. Live in 24 hours.</p>
        </div>
      </section>
    </div>
  )
}

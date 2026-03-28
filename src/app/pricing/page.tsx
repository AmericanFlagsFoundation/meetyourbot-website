import Link from 'next/link'

export const metadata = {
  title: 'Pricing — MeetYourBot',
  description: 'Simple, honest pricing for law firm chatbots. Starter $49/mo, Pro $149/mo, Agency $349/mo. No contracts. Live in 24 hours.',
}

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0F172A] text-white py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-black mb-6">
            Pricing that makes <span className="text-[#FF6B35]">sense.</span>
          </h1>
          <p className="text-xl text-gray-300">
            No setup fees. No annual lock-ins. No calling a sales rep to get a quote.
            Pick a plan, meet your bot, go live. That&apos;s it.
          </p>
        </div>
      </section>

      {/* Model-Gated Tiers Callout */}
      <section className="bg-[#FF6B35]/10 border-y border-[#FF6B35]/20 py-5 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#0F172A] font-semibold">
            🧠 <strong>Model-gated tiers:</strong> Higher plans unlock more powerful AI models — your clients get smarter answers as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Starter */}
            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl font-black text-[#0F172A] mb-1">Starter</h2>
                <p className="text-gray-500 text-sm">Perfect for solo practitioners and small firms</p>
              </div>
              <div className="mb-6">
                <span className="text-6xl font-black text-[#0F172A]">$49</span>
                <span className="text-gray-500 text-lg">/mo</span>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8 flex-grow">
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span><strong>1</strong> branded chatbot</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span><strong>500</strong> conversations/mo</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span>Lead capture form</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span>Instant push notifications</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span>Bot in a Box™ onboarding</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span>Email support</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span>Standard AI model</span></li>
                <li className="flex gap-2 items-start text-gray-400"><span className="font-bold mt-0.5">–</span><span>Knowledge Base (add-on available)</span></li>
              </ul>
              <Link href="#" className="block text-center border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-6 py-3 rounded-full font-bold transition-colors">
                Get Started →
              </Link>
            </div>

            {/* Pro */}
            <div className="rounded-2xl border-2 border-[#FF6B35] p-8 shadow-xl flex flex-col bg-[#0F172A] text-white relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF6B35] text-white text-xs font-black px-5 py-1.5 rounded-full uppercase tracking-widest">
                Most Popular
              </div>
              <div className="mb-6">
                <h2 className="text-2xl font-black mb-1">Pro</h2>
                <p className="text-gray-400 text-sm">For growing firms with multiple practice areas</p>
              </div>
              <div className="mb-6">
                <span className="text-6xl font-black">$149</span>
                <span className="text-gray-400 text-lg">/mo</span>
              </div>
              <ul className="space-y-3 text-gray-300 mb-8 flex-grow">
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span><strong className="text-white">3</strong> branded chatbots</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span><strong className="text-white">2,500</strong> conversations/mo</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span>Lead capture form</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span>Instant push notifications</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span>Bot in a Box™ onboarding</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span>Priority support</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span><strong className="text-white">More powerful AI model</strong></span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span>Knowledge Base (add-on available)</span></li>
              </ul>
              <Link href="#" className="block text-center bg-[#FF6B35] hover:bg-[#FF8C69] text-white px-6 py-3 rounded-full font-bold transition-colors">
                Get Started →
              </Link>
            </div>

            {/* Agency */}
            <div className="rounded-2xl border border-gray-200 p-8 shadow-sm flex flex-col">
              <div className="mb-6">
                <h2 className="text-2xl font-black text-[#0F172A] mb-1">Agency</h2>
                <p className="text-gray-500 text-sm">Multi-location firms and agencies managing client bots</p>
              </div>
              <div className="mb-6">
                <span className="text-6xl font-black text-[#0F172A]">$349</span>
                <span className="text-gray-500 text-lg">/mo</span>
              </div>
              <ul className="space-y-3 text-gray-600 mb-8 flex-grow">
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span><strong>Unlimited</strong> branded chatbots</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span><strong>Unlimited</strong> conversations</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span>Lead capture form</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span>Instant push notifications</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span>Bot in a Box™ onboarding</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span>Dedicated support rep</span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span><strong>Best AI model available</strong></span></li>
                <li className="flex gap-2 items-start"><span className="text-[#FF6B35] font-bold mt-0.5">✓</span><span>Knowledge Base (add-on available)</span></li>
              </ul>
              <Link href="#" className="block text-center border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white px-6 py-3 rounded-full font-bold transition-colors">
                Get Started →
              </Link>
            </div>
          </div>

          {/* Knowledge Base Add-on */}
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-2xl p-8 text-center mb-12">
            <h3 className="text-2xl font-black text-[#0F172A] mb-2">Knowledge Base Add-on</h3>
            <p className="text-[#FF6B35] font-bold text-lg mb-3">$29/mo per bot</p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Train your bot on your own documents, PDFs, website content, and videos.
              Your bot answers with your firm&apos;s actual information — not generic responses.
              Available on all plans. Add it during signup or any time from your dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-16 px-4 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] text-center mb-10">Full feature comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0F172A] text-white">
                  <th className="text-left p-4 rounded-tl-xl">Feature</th>
                  <th className="text-center p-4">Starter</th>
                  <th className="text-center p-4 bg-[#FF6B35]">Pro</th>
                  <th className="text-center p-4 rounded-tr-xl">Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ['Monthly price', '$49', '$149', '$349'],
                  ['Number of bots', '1', '3', 'Unlimited'],
                  ['Conversations/mo', '500', '2,500', 'Unlimited'],
                  ['Lead capture form', '✓', '✓', '✓'],
                  ['Instant push notifications', '✓', '✓', '✓'],
                  ['Bot in a Box™ onboarding', '✓', '✓', '✓'],
                  ['Custom bot name & branding', '✓', '✓', '✓'],
                  ['Dashboard & analytics', '✓', '✓', '✓'],
                  ['Knowledge Base add-on', '+$29/bot', '+$29/bot', '+$29/bot'],
                  ['Support', 'Email', 'Priority email', 'Dedicated rep'],
                  ['AI model tier', 'Standard', 'Enhanced', 'Best available'],
                  ['Cancel anytime', '✓', '✓', '✓'],
                ].map(([feature, starter, pro, agency], i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-4 font-medium text-[#0F172A]">{feature}</td>
                    <td className="p-4 text-center text-gray-600">{starter}</td>
                    <td className="p-4 text-center text-gray-600 bg-[#FF6B35]/5 font-semibold">{pro}</td>
                    <td className="p-4 text-center text-gray-600">{agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] text-center mb-12">Pricing FAQ</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Is there a free trial?',
                a: 'We don\'t offer a free trial right now, but every plan comes with a 14-day money-back guarantee. If your bot isn\'t working the way you expected, we\'ll refund you — no questions asked.'
              },
              {
                q: 'What counts as a "conversation"?',
                a: 'A conversation starts when a visitor sends their first message and ends after 30 minutes of inactivity. A single visitor who chats for 45 minutes counts as two conversations. Most law firm bots average 3-5 minutes per conversation.'
              },
              {
                q: 'What happens if I go over my conversation limit?',
                a: 'We\'ll notify you when you hit 80% of your monthly limit. If you go over, we don\'t cut your bot off — we keep it running and charge overage at $0.10 per conversation. You can also upgrade your plan any time.'
              },
              {
                q: 'Can I have bots on multiple websites?',
                a: 'Yes. Each bot can be deployed on any website. Your Pro plan gives you 3 bots — you could put one on your main website, one on a specific practice area landing page, and one on a Spanish-language site, for example.'
              },
              {
                q: 'What does "model-gated" mean?',
                a: 'We use different AI models depending on your plan. Starter gets a solid, capable model. Pro unlocks a more powerful model that handles nuanced questions better. Agency gets the best model we offer. As models improve over time, your tier\'s model gets upgraded automatically.'
              },
              {
                q: 'Do you offer annual billing?',
                a: 'Yes — pay annually and save 20%. Contact us after signing up and we\'ll switch you to annual billing with the discount applied immediately.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF6B35] py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Your bot is waiting in its box.</h2>
          <p className="text-white/90 mb-8 text-lg">Pick a plan. Open the box. Go live in 24 hours.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="bg-white text-[#FF6B35] hover:bg-[#F8FAFC] px-8 py-4 rounded-full font-black text-lg transition-colors shadow-lg">
              Start with Starter — $49/mo
            </Link>
            <Link href="#" className="border-2 border-white text-white hover:bg-white hover:text-[#FF6B35] px-8 py-4 rounded-full font-bold text-lg transition-colors">
              Go Pro — $149/mo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

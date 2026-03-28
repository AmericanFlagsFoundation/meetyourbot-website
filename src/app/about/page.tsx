import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About MeetYourBot — Founded March 27, 2026 | Austin, Texas',
  description: 'MeetYourBot was founded to give every small law firm the same AI advantage that enterprise firms have. Built in Austin, Texas. Founded March 27, 2026.',
}

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0F172A] text-white py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-6xl mb-6">🤖</div>
          <h1 className="text-5xl font-black mb-6">
            We believe every business deserves a{' '}
            <span className="text-[#FF6B35]">great bot.</span>
          </h1>
          <p className="text-xl text-gray-300">
            Not just the ones with enterprise budgets and six-month implementation timelines.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] mb-6">Our mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            MeetYourBot exists to make smart, branded chatbot agents accessible to small businesses —
            starting with law firms. The same technology that enterprise companies spend hundreds of
            thousands of dollars building should be available to a two-attorney firm in Lubbock for $49 a month.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            We&apos;re not trying to replace your team. We&apos;re adding to it — with a team member who shows up
            at 3am, never forgets a lead, and always knows what to say.
          </p>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-24 px-4 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] mb-6">Why we built this</h2>
          <div className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              MeetYourBot was founded on March 27, 2026 — but the idea started years earlier,
              watching small business owners struggle to compete with larger companies that had entire
              marketing and technology teams at their disposal.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              One conversation sticks with me. A small family law attorney — brilliant, passionate,
              client-focused — told me she was losing potential clients to a bigger firm across town
              not because she was worse at the law, but because they had a receptionist who could answer
              the phones at night. She couldn&apos;t afford that. So leads slipped away while she slept.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The technology to fix that problem existed. It just wasn&apos;t packaged in a way that
              a solo practitioner could use. Setup was too complex. Pricing was too opaque.
              Onboarding took weeks. The whole experience felt like it was designed for someone else.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              So we built MeetYourBot. Simple pricing. 24-hour setup. And because we believe buying
              something new should feel exciting — not like filling out a procurement form —
              we created Bot in a Box™. The moment you purchase, you get an animated unboxing experience
              where your bot literally rises out of a box, ready to work. You name it. You brand it.
              It comes to life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We started with law firms because the need is acute and the problem is solvable.
              But MeetYourBot is built for any small business that&apos;s tired of watching leads disappear
              overnight. We&apos;re just getting started.
            </p>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] text-center mb-12">
            What makes MeetYourBot different
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Bot in a Box™</h3>
              <p className="text-gray-600 leading-relaxed">
                We invented this. No one else in B2B software has an onboarding experience like it.
                Buying a bot from us feels like Christmas morning — because it should. You&apos;re adding
                a new team member. That deserves a moment.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">24-hour go-live</h3>
              <p className="text-gray-600 leading-relaxed">
                From purchase to live bot in under 24 hours. No onboarding calls.
                No waiting on a project manager. No six-week timeline. We move fast
                because your competitors aren&apos;t waiting.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Built for professionals</h3>
              <p className="text-gray-600 leading-relaxed">
                We&apos;re not a generic chatbot widget. We&apos;re purpose-built for professional service firms:
                intake flows, lead capture, real-time notifications, and compliance-first design.
                The details are different because the stakes are higher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-center mb-12">Our values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#FF6B35] mb-3">Memorable</h3>
              <p className="text-gray-300 leading-relaxed">
                Every interaction with MeetYourBot — from the website to the onboarding to the product
                itself — should be memorable. Forgettable software gets cancelled. Memorable software
                gets recommended. We choose memorable.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#FF6B35] mb-3">Accessible</h3>
              <p className="text-gray-300 leading-relaxed">
                Great technology shouldn&apos;t require a technical background, a large budget, or a
                vendor relationship manager. If a solo attorney can&apos;t set it up themselves in an hour,
                we&apos;ve failed. Accessible means truly accessible — in price, in complexity, in language.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#FF6B35] mb-3">Human-first</h3>
              <p className="text-gray-300 leading-relaxed">
                Your bot enhances human relationships — it doesn&apos;t replace them. It collects information
                so your attorney can have a better first call. It answers questions so your receptionist
                can focus on complex client needs. The bot is the bridge, not the destination.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-[#FF6B35] mb-3">Honest</h3>
              <p className="text-gray-300 leading-relaxed">
                Pricing is public. Capabilities are clear. When your bot doesn&apos;t know something, it
                says so. We don&apos;t overpromise. We don&apos;t hide fees. We don&apos;t make claims we can&apos;t back up.
                Honesty is the only way to build something worth building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-[#0F172A] mb-4">Founded March 27, 2026</h2>
          <p className="text-gray-600 text-lg mb-12">
            We&apos;re early and proud of it. Here&apos;s what we&apos;ve shipped since day one.
          </p>
          <div className="space-y-6 text-left">
            {[
              { date: 'March 27, 2026', event: 'MeetYourBot founded. First line of code written.', icon: '🚀' },
              { date: 'March 27, 2026', event: 'Bot in a Box™ concept created and animated.', icon: '🎁' },
              { date: 'March 27, 2026', event: 'First Texas law firm goes live with their bot.', icon: '⚖️' },
              { date: 'Coming soon', event: 'Knowledge Base add-on launch. Upload your docs, train your bot.', icon: '🧠' },
              { date: 'Coming soon', event: 'MeetYourBot for accountants, consultants, and healthcare practices.', icon: '🏢' },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0 text-3xl">{item.icon}</div>
                <div>
                  <p className="text-xs font-bold text-[#FF6B35] uppercase tracking-widest mb-1">{item.date}</p>
                  <p className="text-gray-700 font-medium">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] mb-10 text-center">The Person Behind the Bot</h2>
          <div className="bg-[#F8FAFC] rounded-3xl p-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-20 h-20 bg-[#FF6B35] rounded-full flex items-center justify-center text-4xl flex-shrink-0">
              👤
            </div>
            <div>
              <div className="text-2xl font-black text-[#0F172A] mb-1">Jamie Lewis</div>
              <div className="text-[#FF6B35] font-semibold mb-4">Founder &amp; CEO</div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Jamie Lewis founded MeetYourBot on March 27, 2026 with one belief — that every small law firm
                in America deserves a 24/7 team member that never sleeps, never misses a lead, and fits in a box.
                Based in Austin, Texas, Jamie built MeetYourBot to give small firms the same unfair advantage
                that enterprise companies have had for years. The bot is just the beginning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF6B35] py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Come grow with us.</h2>
          <p className="text-white/90 mb-8 text-lg">
            We&apos;re just getting started. Your bot is waiting.
          </p>
          <Link href="/pricing" className="inline-block bg-white text-[#FF6B35] hover:bg-[#F8FAFC] px-8 py-4 rounded-full font-black text-lg transition-colors shadow-lg">
            Meet Your Bot →
          </Link>
        </div>
      </section>
    </div>
  )
}

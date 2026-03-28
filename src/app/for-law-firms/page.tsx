import Link from 'next/link'

export const metadata = {
  title: 'For Law Firms — MeetYourBot',
  description: 'Your firm never closes. Now your intake never does either. MeetYourBot captures leads and answers client questions 24/7 for Texas law firms.',
}

export default function ForLawFirmsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0F172A] text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-[#FF6B35] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
            Built for Texas Law Firms
          </div>
          <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
            Your firm never closes.{' '}
            <span className="text-[#FF6B35]">Now your intake never does either.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            MeetYourBot puts a smart, branded chatbot on your law firm website that captures leads,
            answers common questions, and texts your phone the second someone needs you —
            whether it&apos;s 3pm or 3am.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/pricing" className="bg-[#FF6B35] hover:bg-[#FF8C69] text-white px-8 py-4 rounded-full text-lg font-bold transition-colors shadow-lg">
              Meet Your Bot →
            </Link>
            <Link href="/how-it-works" className="border border-white/30 hover:border-[#FF6B35] text-white hover:text-[#FF6B35] px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              See how it works
            </Link>
          </div>
        </div>
      </section>

      {/* You're Losing Cases Every Night */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-[#0F172A] mb-4">
              You&apos;re losing cases every night.
            </h2>
            <p className="text-xl text-gray-600">The math is painful. But it&apos;s fixable.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100">
              <div className="text-6xl font-black text-[#FF6B35] mb-3">42%</div>
              <p className="text-gray-700 font-semibold">of legal searches happen after 5pm</p>
              <p className="text-gray-500 text-sm mt-2">Potential clients search for lawyers on their own time — evenings, weekends, emergencies.</p>
            </div>
            <div className="text-center bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100">
              <div className="text-6xl font-black text-[#FF6B35] mb-3">70%</div>
              <p className="text-gray-700 font-semibold">won&apos;t leave a voicemail</p>
              <p className="text-gray-500 text-sm mt-2">If they hit voicemail at night, most people simply move on to the next firm in Google results.</p>
            </div>
            <div className="text-center bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100">
              <div className="text-6xl font-black text-[#FF6B35] mb-3">80%</div>
              <p className="text-gray-700 font-semibold">hire the first firm to respond</p>
              <p className="text-gray-500 text-sm mt-2">Speed wins. The firm that responds first — even at midnight — gets the case.</p>
            </div>
          </div>
          <div className="bg-[#0F172A] text-white rounded-2xl p-8">
            <h3 className="text-2xl font-black mb-3">The real cost of a missed call</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              The average personal injury settlement in Texas is $52,000. The average family law case
              is $15,000. One missed late-night inquiry — one person who found your number on Google
              at 11pm and got voicemail — could represent a $15,000 to $50,000+ case walking out
              the door. That happens every week at most law firms.
            </p>
            <p className="text-gray-300 leading-relaxed">
              MeetYourBot costs $49 a month. Do the math.
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] text-center mb-12">
            What your bot handles — so you don&apos;t have to
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-3xl mb-4">🌙</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">After-hours client intake</h3>
              <p className="text-gray-600 leading-relaxed">
                Someone is searching for a DUI lawyer at midnight. Their court date is in two weeks.
                They&apos;re scared. Your bot is there — calm, professional, branded to your firm — walking
                them through initial intake questions and collecting their contact details for a morning
                callback. You wake up with a warm lead in your inbox.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">FAQ answering, done right</h3>
              <p className="text-gray-600 leading-relaxed mb-3">
                The questions your receptionist answers twenty times a day — your bot handles them 24/7.
                Real answers, based on your actual practice.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• &quot;What are your fees?&quot;</li>
                <li>• &quot;Do you handle DUI cases?&quot;</li>
                <li>• &quot;Do you work on a contingency basis?&quot;</li>
                <li>• &quot;How long does a case like mine usually take?&quot;</li>
                <li>• &quot;Do you serve clients in [city]?&quot;</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Lead capture that converts</h3>
              <p className="text-gray-600 leading-relaxed">
                Your bot doesn&apos;t just chat — it converts. At the right moment in every conversation,
                it collects the visitor&apos;s name, phone number, email, and a brief description of their
                situation. All of that goes into your dashboard, organized and ready for follow-up.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-3xl mb-4">📲</div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">Instant push notification to your phone</h3>
              <p className="text-gray-600 leading-relaxed">
                The moment a lead is captured, you get a real-time push notification on your phone —
                the person&apos;s name, their case type, a preview of the conversation. You decide whether
                to respond now or in the morning. But you always know. You never miss it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How Your Bot Handles It */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] text-center mb-4">
            A real conversation. At 2am.
          </h2>
          <p className="text-center text-gray-600 mb-12">Here&apos;s what your bot looks like in action.</p>

          {/* Mock Chat */}
          <div className="max-w-2xl mx-auto bg-[#F8FAFC] rounded-2xl border border-gray-200 overflow-hidden shadow-md">
            <div className="bg-[#0F172A] text-white px-4 py-3 flex items-center gap-3">
              <span className="text-xl">🤖</span>
              <div>
                <p className="font-bold text-sm">Lex — Henderson Law Group</p>
                <p className="text-xs text-green-400">● Online now</p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 max-w-xs text-sm text-gray-800 shadow-sm">
                  Hi there! I&apos;m Lex, the Henderson Law Group assistant. How can I help you tonight?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#FF6B35] rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs text-sm text-white">
                  I was in a car accident last week. I don&apos;t know if I have a case.
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm text-sm text-gray-800 shadow-sm">
                  I&apos;m sorry to hear that. Henderson Law Group handles personal injury cases, including car accidents. We work on a contingency basis — you pay nothing unless we win. Would you like to share a few details so one of our attorneys can review your situation?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-[#FF6B35] rounded-2xl rounded-tr-sm px-4 py-3 max-w-xs text-sm text-white">
                  Yes please
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 max-w-sm text-sm text-gray-800 shadow-sm">
                  Great. What&apos;s the best phone number for our team to reach you? We&apos;ll call you first thing tomorrow morning.
                </div>
              </div>
            </div>
            <div className="bg-[#FF6B35]/10 border-t border-[#FF6B35]/20 px-4 py-2 text-xs text-[#FF6B35] font-semibold text-center">
              📲 Lead captured · Attorney notified instantly
            </div>
          </div>
        </div>
      </section>

      {/* Legal Compliance */}
      <section className="py-24 px-4 bg-[#0F172A] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black mb-4">Built with legal compliance in mind</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We know law firms have different requirements than e-commerce stores.
              MeetYourBot is designed with those requirements at its core.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-4">🔒</div>
              <h3 className="text-lg font-bold mb-3">No case data in AI memory</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your bot never stores privileged case information in its AI memory. Conversation content
                is not used to train any AI model. We take client confidentiality as seriously as you do.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-4">🏗️</div>
              <h3 className="text-lg font-bold mb-3">Data isolation</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Each firm&apos;s data is completely isolated. Your leads, conversations, and knowledge base
                are never shared with or visible to other firms. Your data is yours.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-lg font-bold mb-3">No legal advice given</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your bot is trained to be helpful, not to practice law. It answers questions about
                your firm&apos;s services, not about specific legal strategies. Clear disclaimers are
                built into every conversation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Texas CTA */}
      <section className="bg-[#FF6B35] py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-5xl mb-6">🤠</div>
          <h2 className="text-4xl font-black text-white mb-4">
            Texas law firms: this is for you.
          </h2>
          <p className="text-white/90 text-xl mb-8 leading-relaxed">
            We started in Texas. We&apos;re built for Texas. We understand contingency-based personal injury,
            family law, criminal defense, and estate planning firms.
            If you&apos;re in Texas, you&apos;re our people.
          </p>
          <Link href="/pricing" className="inline-block bg-white text-[#FF6B35] hover:bg-[#F8FAFC] px-10 py-5 rounded-full text-xl font-black transition-colors shadow-xl">
            Meet Your Bot — Starting at $49/mo →
          </Link>
          <p className="text-white/70 text-sm mt-4">No contracts. Live in 24 hours. Money-back guarantee.</p>
        </div>
      </section>
    </div>
  )
}

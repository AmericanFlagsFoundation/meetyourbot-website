import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'How It Works — MeetYourBot | Bot in a Box™ Setup in 24 Hours',
  description: 'See how MeetYourBot works. Purchase, unbox your bot, go live in 24 hours. Your branded AI chatbot learns your law firm inside and out.',
}

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-[#0F172A] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-black mb-6">
            Simple. Fast. <span className="text-[#FF6B35]">Unforgettable.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From purchase to live bot in under 24 hours. Here&apos;s exactly how it works —
            no fluff, no buzzwords, no enterprise onboarding nightmares.
          </p>
        </div>
      </section>

      {/* 3 Steps Detail */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] text-center mb-16">The Three Steps</h2>

          {/* Step 1 */}
          <div className="mb-20">
            <div className="flex gap-6 items-start mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#FF6B35] text-white text-xl font-black flex items-center justify-center shadow-lg">1</div>
              <div>
                <h3 className="text-3xl font-black text-[#0F172A] mb-3">Purchase your plan</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Pick the tier that fits your practice. Solo practitioner? Start with Starter — one bot,
                  500 conversations a month, $49. Growing firm with multiple practice areas? Pro gives you
                  three bots. Multi-location or managing bots for other firms? Agency unlocks everything
                  with unlimited bots and conversations.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Every plan includes our full core feature set: 24/7 chat, lead capture, instant phone
                  notifications, and the legendary Bot in a Box™ onboarding experience. No setup fees.
                  No annual contracts. No hidden charges. If MeetYourBot isn&apos;t working for you,
                  cancel with one click.
                </p>
              </div>
            </div>
            <div className="ml-20 bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100">
              <h4 className="font-bold text-[#0F172A] mb-3">What you choose at this stage:</h4>
              <ul className="grid md:grid-cols-3 gap-3 text-sm text-gray-600">
                <li className="flex gap-2"><span className="text-[#FF6B35] font-bold">→</span> Number of bots</li>
                <li className="flex gap-2"><span className="text-[#FF6B35] font-bold">→</span> Monthly conversation volume</li>
                <li className="flex gap-2"><span className="text-[#FF6B35] font-bold">→</span> Knowledge Base add-on (optional)</li>
              </ul>
            </div>
          </div>

          {/* Step 2 — Bot in a Box™ */}
          <div className="mb-20">
            <div className="flex gap-6 items-start mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#FF6B35] text-white text-xl font-black flex items-center justify-center shadow-lg">2</div>
              <div>
                <h3 className="text-3xl font-black text-[#0F172A] mb-1">
                  Unbox your bot
                </h3>
                <p className="text-[#FF6B35] font-bold mb-3">Bot in a Box™ — our signature onboarding experience</p>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  Right after you purchase, something different happens. Instead of getting dumped into a
                  configuration dashboard, you get the Bot in a Box™ experience. A big box appears on screen.
                  The lid pops open. Your bot rises up, blinking, ready to introduce itself.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  You give it a name. (Some firms name it after their city: &quot;Dallas Legal Assistant.&quot;
                  Others go personal: &quot;Lex.&quot; One firm named theirs &quot;Karen&quot; — because Karen always
                  has answers.) You pick your firm&apos;s colors. You write a quick welcome message.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  And then your bot is born. We set up the integration, configure your lead capture form,
                  and connect your notification preferences. The whole process takes about ten minutes
                  and feels nothing like buying software.
                </p>
              </div>
            </div>

            {/* Bot in a Box Animation */}
            <div className="ml-20 bg-[#0F172A] rounded-2xl p-10 flex flex-col items-center">
              <div className="perspective-box flex flex-col items-center">
                <div className="bot-rise bot-float text-6xl mb-[-12px] z-10">🤖</div>
                <div className="box-lid text-5xl leading-none">🪄</div>
                <div className="text-6xl leading-none">📦</div>
              </div>
              <p className="text-white/70 text-sm mt-6 text-center">The Bot in a Box™ experience — purchase unlocks this animated onboarding</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="mb-20">
            <div className="flex gap-6 items-start mb-6">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#FF6B35] text-white text-xl font-black flex items-center justify-center shadow-lg">3</div>
              <div>
                <h3 className="text-3xl font-black text-[#0F172A] mb-3">Go live in 24 hours</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  We give you a single line of code to paste in your website&apos;s header. If you use
                  WordPress, Squarespace, Wix, or any major platform, we have a one-click plugin.
                  If you&apos;d rather we just handle it, we do that too — just send us your website login.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Within 24 hours of purchase, your branded bot is live and answering questions.
                  No waiting on an agency. No back-and-forth emails. No &quot;we&apos;ll schedule a kickoff call
                  next Tuesday.&quot; Done. Live. Working.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section className="py-24 px-4 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F172A] mb-4">The Knowledge Base</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Your bot is only as smart as what you teach it. The Knowledge Base add-on ($29/mo per bot)
              lets you train your bot on your firm&apos;s actual content.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">What you can upload</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3 items-start"><span className="text-[#FF6B35] text-lg">📄</span><div><strong>PDFs & documents</strong> — Intake forms, fee schedules, practice area guides, FAQs</div></li>
                <li className="flex gap-3 items-start"><span className="text-[#FF6B35] text-lg">🌐</span><div><strong>Website content</strong> — Paste your URL and we crawl it automatically</div></li>
                <li className="flex gap-3 items-start"><span className="text-[#FF6B35] text-lg">🎬</span><div><strong>Videos</strong> — Upload transcripts from YouTube, explainer videos, client testimonials</div></li>
                <li className="flex gap-3 items-start"><span className="text-[#FF6B35] text-lg">📝</span><div><strong>Custom Q&A</strong> — Write your own question-answer pairs for precise control</div></li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">What it means for clients</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex gap-3 items-start"><span className="text-[#FF6B35] text-lg">✓</span><div>Your bot quotes your actual fee structures</div></li>
                <li className="flex gap-3 items-start"><span className="text-[#FF6B35] text-lg">✓</span><div>It knows exactly which case types you handle</div></li>
                <li className="flex gap-3 items-start"><span className="text-[#FF6B35] text-lg">✓</span><div>It answers with your firm&apos;s voice, not generic AI phrasing</div></li>
                <li className="flex gap-3 items-start"><span className="text-[#FF6B35] text-lg">✓</span><div>It escalates properly when it doesn&apos;t know — never makes things up</div></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture & Notifications */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-[#0F172A] mb-4">Lead capture that actually works</h2>
            <p className="text-lg text-gray-600">
              The whole point of a bot isn&apos;t to chat — it&apos;s to convert visitors into clients.
              Here&apos;s how MeetYourBot closes the loop.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">How the lead capture works</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                At the right moment in every conversation — after your bot has answered a few questions
                and the visitor is clearly interested — it asks for contact information. Not in a pushy way.
                In the same natural way a receptionist would: &quot;I can have one of our attorneys
                follow up with you directly. Can I grab your name and phone number?&quot;
              </p>
              <p className="text-gray-600 leading-relaxed">
                That information goes directly into your MeetYourBot dashboard, organized by date,
                case type, and urgency. You can export it as a CSV, connect it to your CRM, or just
                work it from the dashboard itself.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-4">Instant mobile push notifications</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                The moment a lead is captured, your phone buzzes. Not an email. Not a daily digest.
                A real-time push notification with the lead&apos;s name, their case type, and a link to
                the full conversation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This matters because 80% of potential clients hire the first firm that responds.
                If a lead comes in at 11pm on a Tuesday and you respond by 11:15pm, you win.
                Your competitor won&apos;t even know the lead existed until morning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-[#0F172A] text-center mb-12">Common questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Do I need to know how to code?',
                a: 'Not at all. You paste one line of code into your website header, or you send us access and we do it for you. If you use WordPress, there\'s a plugin. Zero coding required.'
              },
              {
                q: 'What happens when the bot doesn\'t know the answer?',
                a: 'It says so — politely and helpfully. It tells the visitor it can\'t answer that specific question and offers to connect them with your team directly. It never makes things up. That\'s a hard rule.'
              },
              {
                q: 'How is this different from generic chatbot tools?',
                a: 'Most chatbots are built for e-commerce or support tickets. MeetYourBot is built specifically for professional service firms — law, accounting, consulting. The intake flow, the notification system, the knowledge base structure — all of it is designed around how law firms actually work.'
              },
              {
                q: 'Is client information secure?',
                a: 'Yes. Your bot never stores case details or privileged information in its AI memory. Lead data is stored encrypted in your dashboard only. No conversation content is used to train any AI model. We take this seriously because your clients\' trust is not negotiable.'
              },
              {
                q: 'Can I change my bot\'s name or appearance later?',
                a: 'Yes — any time, from your dashboard. Update the name, colors, welcome message, or avatar whenever you want. Takes about 30 seconds.'
              },
              {
                q: 'How does the 24-hour go-live guarantee work?',
                a: 'From the moment you complete Bot in a Box™ setup, our team configures your bot and deploys it within 24 hours. If we miss that window for any reason that\'s our fault (not yours), your first month is free.'
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-[#0F172A] mb-3">{item.q}</h3>
                <p className="text-gray-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FF6B35] py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to open the box?</h2>
          <p className="text-white/90 mb-8 text-lg">Pick your plan and meet your bot in minutes.</p>
          <Link href="/pricing" className="inline-block bg-white text-[#FF6B35] hover:bg-[#F8FAFC] px-8 py-4 rounded-full font-black text-lg transition-colors shadow-lg">
            See Pricing →
          </Link>
        </div>
      </section>
    </div>
  )
}

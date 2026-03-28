'use client'

import { useState } from 'react'

export default function BotInABox() {
  const [stage, setStage] = useState<'idle' | 'opening' | 'risen' | 'named'>('idle')
  const [botName, setBotName] = useState('')
  const [inputName, setInputName] = useState('')

  const handleUnbox = () => {
    setStage('opening')
    setTimeout(() => setStage('risen'), 1200)
  }

  const handleName = () => {
    if (inputName.trim()) {
      setBotName(inputName.trim())
      setStage('named')
    }
  }

  const handleReset = () => {
    setStage('idle')
    setBotName('')
    setInputName('')
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block bg-[#FF6B35]/20 border border-[#FF6B35]/40 text-[#FF6B35] text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
          ✨ Signature Experience
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          The Bot in a Box™ Experience
        </h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Every new client gets this. Because buying AI should feel like Christmas morning.
        </p>

        {/* The Box */}
        <div className="relative flex flex-col items-center justify-center min-h-[400px]">

          {/* Stage: idle */}
          {stage === 'idle' && (
            <div className="flex flex-col items-center gap-8">
              <div className="relative">
                {/* Box visual */}
                <div className="text-[120px] leading-none select-none drop-shadow-2xl" style={{filter: 'drop-shadow(0 0 40px rgba(255,107,53,0.3))'}}>
                  📦
                </div>
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full bg-[#FF6B35]/10 animate-pulse" />
              </div>
              <div className="text-gray-400 text-lg mb-2">Your bot is waiting inside.</div>
              <button
                onClick={handleUnbox}
                className="bg-[#FF6B35] hover:bg-[#FF8C69] text-white px-10 py-4 rounded-full text-xl font-black transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30"
              >
                🎁 Open Your Box
              </button>
            </div>
          )}

          {/* Stage: opening */}
          {stage === 'opening' && (
            <div className="flex flex-col items-center gap-4">
              <div className="text-[80px] leading-none animate-bounce select-none">🤖</div>
              <div className="text-[120px] leading-none select-none" style={{
                animation: 'shake 0.3s ease-in-out infinite'
              }}>📦</div>
              <div className="text-white text-2xl font-bold animate-pulse mt-4">Opening...</div>
              <style>{`
                @keyframes shake {
                  0%, 100% { transform: rotate(-3deg); }
                  50% { transform: rotate(3deg); }
                }
              `}</style>
            </div>
          )}

          {/* Stage: risen */}
          {stage === 'risen' && (
            <div className="flex flex-col items-center gap-6">
              <div
                className="text-[100px] leading-none select-none"
                style={{
                  animation: 'riseUp 0.8s ease-out forwards',
                  filter: 'drop-shadow(0 0 30px rgba(255,107,53,0.6))'
                }}
              >
                🤖
              </div>
              <div className="text-[80px] leading-none select-none mt-[-20px]">📦</div>
              <div className="text-white text-2xl font-bold mt-2">
                Say hello to your new team member. 👋
              </div>
              <div className="text-gray-400 mb-4">Give your bot a name. Make it yours.</div>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="e.g. Lex, Max, Ada..."
                  value={inputName}
                  onChange={(e) => setInputName(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleName()}
                  className="bg-white/10 border border-white/20 text-white placeholder-gray-500 px-6 py-3 rounded-full text-lg focus:outline-none focus:border-[#FF6B35] w-64"
                  autoFocus
                />
                <button
                  onClick={handleName}
                  className="bg-[#FF6B35] hover:bg-[#FF8C69] text-white px-8 py-3 rounded-full text-lg font-bold transition-colors"
                >
                  Name it →
                </button>
              </div>
              <style>{`
                @keyframes riseUp {
                  from { transform: translateY(80px) scale(0.5); opacity: 0; }
                  to { transform: translateY(0) scale(1); opacity: 1; }
                }
              `}</style>
            </div>
          )}

          {/* Stage: named */}
          {stage === 'named' && (
            <div className="flex flex-col items-center gap-6">
              <div
                className="text-[100px] leading-none select-none"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(255,107,53,0.8))',
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                🤖
              </div>
              <div className="mt-4">
                <div className="text-4xl font-black text-white mb-2">
                  Meet <span className="text-[#FF6B35]">{botName}</span>. ✨
                </div>
                <div className="text-gray-300 text-lg mb-2">
                  {botName} is live on your website. Right now.
                </div>
                <div className="text-gray-400 text-sm mb-8">
                  24/7. Never sleeps. Never misses a lead.
                </div>
              </div>
              <div className="flex gap-4 flex-wrap justify-center">
                <a
                  href="/pricing"
                  className="bg-[#FF6B35] hover:bg-[#FF8C69] text-white px-8 py-4 rounded-full text-lg font-bold transition-colors shadow-lg"
                >
                  Get My Real Bot →
                </a>
                <button
                  onClick={handleReset}
                  className="border border-white/20 hover:border-[#FF6B35] text-gray-400 hover:text-[#FF6B35] px-8 py-4 rounded-full text-lg transition-colors"
                >
                  Try Again
                </button>
              </div>
              <style>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-15px); }
                }
              `}</style>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

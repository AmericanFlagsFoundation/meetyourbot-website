'use client';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$79',
    badge: 'Essential AI',
    description: 'Perfect for solo practitioners and small firms. Your 24/7 AI intake bot answers client questions, captures leads, and never misses an inquiry — day or night.',
    priceId: process.env.NEXT_PUBLIC_STRIPE_STARTER_PRICE,
    features: ['1 AI chatbot', '24/7 client intake', 'Lead capture & qualification', 'FAQ automation', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$179',
    badge: 'Advanced AI',
    description: 'Ideal for growing law firms that need smarter responses. Our Pro bot handles complex legal questions with greater accuracy, nuance, and professionalism.',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE,
    features: ['1 AI chatbot', '24/7 client intake', 'Complex legal Q&A', 'Smarter lead qualification', 'Priority support'],
    popular: true,
  },
  {
    name: 'Agency',
    price: '$349',
    badge: 'Premium AI',
    description: 'For established firms that demand the best. Our most powerful AI delivers the highest quality client interactions and deepest legal understanding available.',
    priceId: process.env.NEXT_PUBLIC_STRIPE_AGENCY_PRICE,
    features: ['1 AI chatbot', '24/7 client intake', 'Highest accuracy responses', 'Advanced legal understanding', 'Dedicated support'],
  },
];

export default function PricingPage() {
  const [addKb, setAddKb] = useState(false);
  const [loading, setLoading] = useState<string | null>(null);
  const [showKbInfo, setShowKbInfo] = useState(false);

  const handleCheckout = async (priceId: string, planName: string) => {
    setLoading(planName);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId, addKb }),
      });
      const data = await res.json();
      if (data.url) window.location.href = data.url;
    } catch (err) {
      console.error(err);
    }
    setLoading(null);
  };

  return (
    <main className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-600">No contracts. Cancel anytime. Built exclusively for law firms.</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm max-w-lg mx-auto mb-6 overflow-hidden">
          <div className="flex items-center gap-4 p-6">
            <div className="flex-grow">
              <div className="flex items-center gap-2">
                <p className="font-semibold text-gray-900">Train Your Bot On Your Firm's Documents</p>
                <button
                  onClick={() => setShowKbInfo(!showKbInfo)}
                  className="w-5 h-5 rounded-full bg-gray-200 text-gray-600 text-xs font-bold flex items-center justify-center hover:bg-blue-100 hover:text-blue-700 transition-colors flex-shrink-0"
                >
                  ?
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-1">Your bot learns your practice areas, FAQs, and processes — so it answers like a member of your team.</p>
            </div>
            <button
              onClick={() => setAddKb(!addKb)}
              className={`relative w-14 h-7 rounded-full transition-colors flex-shrink-0 ${addKb ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <span className={`absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow transition-transform ${addKb ? 'translate-x-7' : ''}`} />
            </button>
          </div>

          {showKbInfo && (
            <div className="px-6 pb-6 pt-0">
              <div className="bg-blue-50 rounded-xl p-4 text-sm text-blue-800 leading-relaxed">
                <p className="font-semibold mb-1">How does this work?</p>
                <p>Your bot doesn't just use general AI knowledge — it searches your actual firm documents first, then answers based on what YOUR firm does. Upload intake forms, practice area guides, FAQs, fee schedules, and more. The result is a bot that sounds like it's been at your firm for years.</p>
              </div>
            </div>
          )}
        </div>

        {addKb && (
          <p className="text-center text-blue-600 text-sm mb-8 font-medium">+$99 one-time setup fee & $29/mo per bot will be added at checkout</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className={`bg-white rounded-2xl shadow-lg p-8 relative flex flex-col ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h2>
                <span className="inline-block bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">{plan.badge}</span>
                <p className="text-gray-500 text-sm leading-relaxed">{plan.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500">/mo</span>
                {addKb && <p className="text-blue-600 text-sm mt-1">+ $99 setup & $29/mo KB</p>}
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="text-green-500 font-bold">✓</span> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleCheckout(plan.priceId!, plan.name)}
                disabled={loading === plan.name}
                className={`w-full py-3 rounded-xl font-semibold transition-colors ${plan.popular ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'} disabled:opacity-50`}
              >
                {loading === plan.name ? 'Loading...' : 'Get Started'}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-400 text-sm mt-12">All plans include a 14-day free trial. No credit card required to start.</p>
      </div>
    </main>
  );
}

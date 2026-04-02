import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2026-03-25.dahlia',
});

export const PLANS = {
  starter: {
    name: 'Starter',
    price: '$49/mo',
    priceId: process.env.NEXT_PUBLIC_STRIPE_STARTER_PRICE!,
    features: ['1 AI chatbot', 'Basic support', 'Standard responses'],
  },
  pro: {
    name: 'Pro',
    price: '$149/mo',
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE!,
    features: ['3 AI chatbots', 'Priority support', 'Custom responses'],
  },
  agency: {
    name: 'Agency',
    price: '$349/mo',
    priceId: process.env.NEXT_PUBLIC_STRIPE_AGENCY_PRICE!,
    features: ['10 AI chatbots', 'Dedicated support', 'Full customization'],
  },
};

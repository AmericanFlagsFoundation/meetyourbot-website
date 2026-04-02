import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const { priceId, addKb } = await req.json();

    console.log('Checkout request:', { priceId, addKb });

    if (!priceId) {
      return NextResponse.json({ error: 'Missing priceId' }, { status: 400 });
    }

    const lineItems: any[] = [
      { price: priceId, quantity: 1 },
    ];

    if (addKb) {
      lineItems.push({ price: 'price_1TH6IAF6zhkheuLflNuthRyV', quantity: 1 });
      lineItems.push({ price: 'price_1TH6MaF6zhkheuLfcPmjYwur', quantity: 1 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: lineItems,
      success_url: 'https://www.meetyourbot.com/dashboard?success=true',
      cancel_url: 'https://www.meetyourbot.com/pricing?canceled=true',
    });

    console.log('Session created:', session.id);
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Stripe error:', error?.message || error);
    return NextResponse.json({ error: error?.message || 'Failed to create checkout session' }, { status: 500 });
  }
}

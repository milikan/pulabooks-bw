import { NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';

export async function POST(request: Request) {
  const sig = request.headers.get('stripe-signature') || '';
  const body = await request.text();
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET || '';

  try {
    const event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    // handle event types as needed
    console.log('Stripe event:', event.type);
    return NextResponse.json({ received: true });
  } catch (err: any) {
    console.error('Webhook error', err.message);
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
  }
}

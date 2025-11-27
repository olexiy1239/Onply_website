import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { redis } from "@/lib/redis";

export const runtime = "nodejs"; // важливо для сирих байтів

export async function POST(req: NextRequest) {
  const sig = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !secret) return NextResponse.json({ error: "No signature" }, { status: 400 });

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-06-20" });
  const raw = await req.text(); // сире тіло для валідації підпису

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw, sig, secret);
  } catch (err: any) {
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    // захист від дублювання: зберігаємо id події в set
    const already = await redis.sismember("stripe:event_ids", event.id);
    if (!already) {
      await redis.sadd("stripe:event_ids", event.id);
      // amount_total у найменших одиницях (пенси/центи)
      const amount = session.amount_total ?? 0;
      await redis.incrby("support:raised_cents", amount);
      await redis.incr("support:backers");
    }
  }

  return NextResponse.json({ received: true });
}

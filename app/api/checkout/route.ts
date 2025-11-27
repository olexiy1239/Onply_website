import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const STRIPE_KEY = process.env.STRIPE_SECRET_KEY;

if (!STRIPE_KEY) console.warn("⚠️ STRIPE_SECRET_KEY is missing");
if (!process.env.NEXT_PUBLIC_SITE_URL) console.warn("ℹ️ Using default http://localhost:3000 for URLs");

const stripe = STRIPE_KEY ? new Stripe(STRIPE_KEY, { apiVersion: "2024-06-20" }) : null;

type Mode = "payment" | "subscription";

export async function POST(req: NextRequest) {
  try {
    if (!stripe) {
      return NextResponse.json({ error: "Stripe not configured" }, { status: 500 });
    }

    const body = await req.json().catch(() => ({}));
    const priceId: string | undefined = body?.priceId;
    const metadata: Record<string, string> | undefined = body?.metadata;
    const quantity: number = Number(body?.quantity ?? 1);

    if (!priceId) {
      return NextResponse.json({ error: "priceId required" }, { status: 400 });
    }
    if (!/^price_/.test(priceId)) {
      return NextResponse.json({ error: "Invalid priceId (must start with price_...)" }, { status: 400 });
    }
    if (!Number.isFinite(quantity) || quantity < 1) {
      return NextResponse.json({ error: "quantity must be a positive number" }, { status: 400 });
    }

    // 1) Дізнаємось тип ціни (one_time чи recurring)
    const price = await stripe.prices.retrieve(priceId);
    const mode: Mode = price.recurring ? "subscription" : "payment";

    // 2) Абсолютні URL
    const successUrl = new URL("/thanks?session_id={CHECKOUT_SESSION_ID}", SITE).toString();
    const cancelUrl  = new URL("/#support", SITE).toString();

    // 3) Створюємо Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode,                                  // auto: "payment" або "subscription"
      line_items: [{ price: priceId, quantity }],
      allow_promotion_codes: true,
      metadata: metadata ?? {},              // напр. { tier: "Founder" }
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    return NextResponse.json({ url: session.url });
  } catch (e: any) {
    console.error("Checkout error:", e);
    const msg =
      e?.raw?.message ||
      e?.message ||
      "Checkout error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
  
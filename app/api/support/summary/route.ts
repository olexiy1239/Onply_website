import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";

export const dynamic = "force-dynamic";

export async function GET() {
  const raised = Number(await redis.get("support:raised_cents")) || 0;
  const backers = Number(await redis.get("support:backers")) || 0;
  const goal = Number(process.env.GOAL_CENTS || "2500000");
  const currency = process.env.CURRENCY || "GBP";

  return new NextResponse(JSON.stringify({ raised, goal, backers, currency }), {
    status: 200,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" }
  });
}

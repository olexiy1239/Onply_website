import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const Body = z.object({ email: z.string().email(), tag: z.string().optional() });

export async function POST(req: NextRequest) {
  try {
    const data = Body.parse(await req.json());
    // TODO: інтеграція з Mailerlite/ConvertKit
    console.log("New subscribe:", data);
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e.message }, { status: 400 });
  }
}

import { NextResponse } from "next/server";

export const runtime = "nodejs";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;
const MIN_FILL_MS = 2500;

/**
 * In-memory rate limit. It works per server instance, which is fine for a
 * single Node process. On serverless hosting, swap in a shared store
 * (for example Upstash Redis) if you need strict limits.
 */
const hits = new Map<string, number[]>();

function isLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function fail(status: number, error: string) {
  return NextResponse.json({ error }, { status });
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";

  if (!apiKey || !to) {
    return fail(503, "The contact form isn't set up yet. Please reach out through the links on this page.");
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isLimited(ip)) {
    return fail(429, "Too many messages sent recently. Please try again in a few minutes.");
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return fail(400, "That request couldn't be read. Please try again.");
  }

  // Spam checks: a filled honeypot or an instant submit looks like a bot.
  // Reply as if it worked so bots get no signal.
  const elapsed = typeof body.elapsed === "number" ? body.elapsed : 0;
  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }
  if (elapsed < MIN_FILL_MS) {
    return NextResponse.json({ ok: true });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2 || name.length > 100) return fail(400, "Enter your name (2 to 100 characters).");
  if (!EMAIL_RE.test(email) || email.length > 200) return fail(400, "Enter a valid email address.");
  if (message.length < 10 || message.length > 4000) return fail(400, "Write a message between 10 and 4000 characters.");

  // Keep header-bound values on one line.
  const safeName = name.replace(/[\r\n]+/g, " ");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Portfolio message from ${safeName}`,
      // Plain text only, so visitor input is never rendered as HTML.
      text: `From: ${safeName} <${email}>\n\n${message}`,
    }),
  }).catch(() => null);

  if (!res || !res.ok) {
    return fail(502, "The message couldn't be delivered. Please try again later.");
  }
  return NextResponse.json({ ok: true });
}

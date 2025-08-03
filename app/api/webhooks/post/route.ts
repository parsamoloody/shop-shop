import { NextRequest, NextResponse } from "next/server";
import crypto from 'crypto';
import { revalidatePath, revalidateTag } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const secret = process.env.WEBHOOK_SECRET;
    if (!secret) {
      return NextResponse.json({ error: "WEBHOOK_SECRET not defined in enironment variable" }, { status: 500 });
    }

    const text = await req.text();
    console.log("text", text)
    const signatureHeader = req.headers.get('x-signature-key') || '';

    const hmac = crypto.createHmac('sha256', secret);
    hmac.update(text);
    const digest = `sha256=${hmac.digest('hex')}`;

    const trusted = Buffer.from(digest, 'utf-8');
    const untrusted = Buffer.from(signatureHeader, 'utf-8');

    if (trusted.length !== untrusted.length || !crypto.timingSafeEqual(trusted, untrusted)) {
      console.log('[Next.js] Invalid signature', {
        trusted: trusted.toString('hex'),
        untrusted: untrusted.toString('hex')
      });
      return new Response('Invalid signature', { status: 400 });
    }

    const payload = JSON.parse(text);
    const tag = payload?.path;
    console.log("tag => ",tag) // tag =>  post

    if (tag) {
      console.log(`[Next.js] Revalidating /${tag}`);
      revalidateTag(`${tag}`);
      return NextResponse.json({ revalidated: tag });
    }

  } catch (e) {
    let message;
    if (e instanceof Error) {
      message = "Webhook error: " + e.message;
    } else {
      message = "Unknown error occurred";
    }
    console.error({ message });
    return new Response('Webhook failure', { status: 500 });
  }

  return NextResponse.json({ success: true });
}

import {NextRequest, NextResponse} from 'next/server';

const ALLOWED_TYPES = new Set([
  'Wedding & Reception',
  'Stay / Guest Rooms',
  'Engagement / Family Function',
  'General Question',
]);

// Simple rate-limit store (per TRD/security.md: 5 requests per IP per 10 minutes)
const rateLimitStore = new Map<string, number[]>();

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
    const now = Date.now();
    const windowMs = 10 * 60 * 1000;
    const recent = (rateLimitStore.get(ip) || []).filter(
      (ts) => now - ts < windowMs
    );

    if (recent.length >= 5) {
      return NextResponse.json(
        {
          ok: false,
          error:
            'Too many enquiry requests from this connection. Please wait a few minutes before trying again.',
        },
        {status: 429}
      );
    }

    const body = await req.json();

    // Honeypot check
    if (body.websiteUrl && String(body.websiteUrl).trim().length > 0) {
      return NextResponse.json({
        ok: true,
        refId: `GHR-${Math.floor(100000 + Math.random() * 900000)}`,
      });
    }

    const name = String(body.name || '').trim();
    const phone = String(body.phone || '').trim();
    const enquiryType = String(body.enquiryType || '').trim();
    const preferredDate = String(body.preferredDate || '').trim();
    const guests = String(body.guests || '').trim();
    const message = String(body.message || '').trim();

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        {ok: false, error: 'Please provide your name (2 to 100 characters).'},
        {status: 400}
      );
    }

    const phoneRegex = /^[+\d\s\-()]{7,20}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        {ok: false, error: 'Please provide a valid phone number.'},
        {status: 400}
      );
    }

    if (!ALLOWED_TYPES.has(enquiryType)) {
      return NextResponse.json(
        {ok: false, error: 'Please select a valid enquiry type.'},
        {status: 400}
      );
    }

    if (preferredDate.length < 2 || preferredDate.length > 60) {
      return NextResponse.json(
        {ok: false, error: 'Please share your preferred date or month.'},
        {status: 400}
      );
    }

    if (guests.length > 80 || message.length > 1200) {
      return NextResponse.json(
        {
          ok: false,
          error: 'Please keep your message within 1,200 characters.',
        },
        {status: 400}
      );
    }

    recent.push(now);
    rateLimitStore.set(ip, recent);

    const refId = `GHR-${Math.floor(100000 + Math.random() * 900000)}`;

    return NextResponse.json({
      ok: true,
      refId,
      submittedAt: new Date().toISOString(),
      notice:
        'This enquiry is a request only. A booking is confirmed after the resort communicates availability and confirms its booking process and terms.',
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error:
          'Unable to process your enquiry right now. Please check your details and try again.',
      },
      {status: 500}
    );
  }
}

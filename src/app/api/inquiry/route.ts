import nodemailer from "nodemailer";
import { checkInquiryRateLimit, getClientIp } from "@/lib/inquiry-rate-limit";

export const runtime = "nodejs";

type InquiryPayload = {
  name?: string;
  email?: string;
  message?: string;
  website?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function resolveNotificationRecipient(smtpUser: string): string {
  const configuredTo = process.env.CONTACT_TO_EMAIL?.trim();

  if (configuredTo) {
    return configuredTo;
  }

  // Avoid ImprovMX round-trip when Gmail SMTP sends to its own alias — that loop
  // rewrites Message-ID, breaks DMARC alignment, and lands in spam.
  if (smtpUser.includes("@gmail.com") || smtpUser.includes("@googlemail.com")) {
    return smtpUser;
  }

  return "sales@jnrstoneworks.com";
}

function buildInquiryHtml(data: { name: string; email: string; message: string }) {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeMessage = escapeHtml(data.message).replaceAll("\n", "<br />");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#0f0f0f;font-family:Arial,Helvetica,sans-serif;color:#f2ede4;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#0f0f0f;padding:28px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:linear-gradient(135deg,#111111 0%,#211b12 65%,#4e3d1b 100%);border:1px solid rgba(201,162,75,0.4);border-radius:12px;overflow:hidden;">
            <tr>
              <td style="padding:24px 28px 8px;">
                <p style="margin:0 0 6px;font-size:11px;letter-spacing:0.34em;text-transform:uppercase;color:#d4af37;">
                  Jnr Web Inquiry
                </p>
                <h1 style="margin:0;font-size:28px;line-height:1.1;color:#fff8ea;">
                  JNR Stone Works Trading Inc.
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 28px 24px;">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid rgba(201,162,75,0.2);font-size:14px;color:#ccb788;">Client Name</td>
                    <td style="padding:12px 0;border-bottom:1px solid rgba(201,162,75,0.2);font-size:15px;color:#fff8ea;text-align:right;">${safeName}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;border-bottom:1px solid rgba(201,162,75,0.2);font-size:14px;color:#ccb788;">Client Email</td>
                    <td style="padding:12px 0;border-bottom:1px solid rgba(201,162,75,0.2);font-size:15px;color:#fff8ea;text-align:right;">
                      <a href="mailto:${safeEmail}" style="color:#fff8ea;text-decoration:none;">${safeEmail}</a>
                    </td>
                  </tr>
                </table>
                <div style="margin-top:18px;padding:14px 16px;border:1px solid rgba(201,162,75,0.2);background:rgba(255,255,255,0.03);border-radius:8px;">
                  <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#d4af37;">Project Details</p>
                  <p style="margin:0;font-size:15px;line-height:1.7;color:#f2ede4;">${safeMessage}</p>
                </div>
                <p style="margin:18px 0 0;font-size:12px;color:#bfa97b;">
                  Reply directly to this email to continue the conversation with the client.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as InquiryPayload;
    const name = (payload.name ?? "").trim();
    const email = (payload.email ?? "").trim().toLowerCase();
    const message = (payload.message ?? "").trim();
    const honeypot = (payload.website ?? "").trim();

    if (honeypot) {
      return Response.json({ ok: true });
    }

    if (!name || !email || !message) {
      return Response.json({ error: "Name, email, and project details are required." }, { status: 400 });
    }

    if (!EMAIL_PATTERN.test(email) || name.length > 120 || message.length > 4000) {
      return Response.json({ error: "Please check your details and try again." }, { status: 400 });
    }

    const clientIp = getClientIp(request);
    const rateLimit = checkInquiryRateLimit(`${clientIp}:${email}`);

    if (!rateLimit.allowed) {
      return Response.json(
        {
          error:
            "You can send up to 3 inquiries per day. Please try again tomorrow or contact us by phone at +63 917 190 1474.",
        },
        {
          status: 429,
          headers: rateLimit.retryAfterSeconds
            ? { "Retry-After": String(rateLimit.retryAfterSeconds) }
            : undefined,
        },
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? "465");
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const fromAddress = process.env.CONTACT_FROM_EMAIL?.trim() || "sales@jnrstoneworks.com";

    if (!smtpHost || !smtpUser || !smtpPass) {
      return Response.json(
        { error: "Email service is not configured yet. Please set SMTP_HOST/SMTP_USER/SMTP_PASS." },
        { status: 500 },
      );
    }

    const toAddress = resolveNotificationRecipient(smtpUser);

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const subject = `Jnr Web Inquiry — ${name}`;
    const textBody = `Jnr Web Inquiry\n\nName: ${name}\nEmail: ${email}\n\nProject details:\n${message}\n\nReply to the client at ${email}.`;

    await transporter.sendMail({
      from: {
        name: "Jnr Web Inquiry",
        address: fromAddress,
      },
      to: toAddress,
      replyTo: {
        name,
        address: email,
      },
      envelope: {
        from: smtpUser,
        to: toAddress,
      },
      subject,
      text: textBody,
      html: buildInquiryHtml({ name, email, message }),
      headers: {
        "X-Entity-Ref-ID": `inquiry-${Date.now()}`,
      },
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Unable to send inquiry right now. Please try again." }, { status: 500 });
  }
}

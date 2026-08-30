import { NextResponse } from "next/server";

const WHATSAPP_RECIPIENT = "972526781740";

function getEnv(name: string) {
  return process.env[name]?.trim() || "";
}

async function sendWhatsAppLead({ name, age, phone, sport }: {
  name: string;
  age: string;
  phone: string;
  sport: string;
}) {
  const accessToken = getEnv("WHATSAPP_ACCESS_TOKEN");
  const phoneNumberId = getEnv("WHATSAPP_PHONE_NUMBER_ID");
  const graphVersion = getEnv("WHATSAPP_GRAPH_API_VERSION") || "v23.0";
  const templateName = getEnv("WHATSAPP_TEMPLATE_NAME");
  const templateLanguage = getEnv("WHATSAPP_TEMPLATE_LANGUAGE") || "he";

  // Keep the existing email-only flow working until WhatsApp credentials
  // are configured in Vercel.
  if (!accessToken || !phoneNumberId) {
    return { configured: false, ok: true };
  }

  const url = `https://graph.facebook.com/${graphVersion}/${phoneNumberId}/messages`;

  // Production WhatsApp Cloud API notifications should use an approved
  // template. The template should contain four body variables:
  // {{1}} name, {{2}} age, {{3}} phone, {{4}} sport.
  if (!templateName) {
    throw new Error("WHATSAPP_TEMPLATE_NAME is not configured");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: WHATSAPP_RECIPIENT,
      type: "template",
      template: {
        name: templateName,
        language: { code: templateLanguage },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: name },
              { type: "text", text: age },
              { type: "text", text: phone },
              { type: "text", text: sport },
            ],
          },
        ],
      },
    }),
  });

  if (!response.ok) {
    const details = await response.text().catch(() => "");
    console.error("WhatsApp Cloud API error", response.status, details);
    throw new Error("WhatsApp notification failed");
  }

  return { configured: true, ok: true };
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = String(formData.get("name") ?? "").trim();
    const age = String(formData.get("age") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const sport = String(formData.get("sport") ?? "").trim();

    if (!name || !age || !phone || !sport) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const submission = new FormData();
    submission.append("name", name);
    submission.append("age", age);
    submission.append("phone", phone);
    submission.append("sport", sport);
    submission.append("_subject", `פנייה חדשה מהאתר – ${sport}`);
    submission.append("_template", "table");
    submission.append("_captcha", "false");

    const emailResponse = await fetch("https://formsubmit.co/ash.sports2@gmail.com", {
      method: "POST",
      body: submission,
    });

    if (!emailResponse.ok) {
      return NextResponse.json({ error: "Email service rejected the submission" }, { status: 502 });
    }

    try {
      await sendWhatsAppLead({ name, age, phone, sport });
    } catch {
      // Do not lose the lead that was already sent by email. Report that the
      // WhatsApp notification needs attention so it can be retried/configured.
      return NextResponse.json(
        { error: "הפרטים התקבלו במייל, אך הודעת הוואטסאפ לא נשלחה. יש לבדוק את חיבור ה-WhatsApp Business." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to submit form" }, { status: 500 });
  }
}

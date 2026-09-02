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

  if (!accessToken || !phoneNumberId) {
    return { configured: false, ok: true };
  }

  if (!templateName) {
    throw new Error("WHATSAPP_TEMPLATE_NAME is not configured");
  }

  const url = `https://graph.facebook.com/${graphVersion}/${phoneNumberId}/messages`;
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

    // Email delivery is handled directly by FormSubmit from the visitor's
    // browser. This avoids FormSubmit's bot/Cloudflare protection blocking
    // server-to-server requests from Vercel. This endpoint is only responsible
    // for the optional WhatsApp notification.
    let whatsappConfigured = false;
    try {
      const result = await sendWhatsAppLead({ name, age, phone, sport });
      whatsappConfigured = result.configured;
    } catch (error) {
      console.error("WhatsApp notification error", error);
      // Email submission is independent, so a WhatsApp failure must not make
      // the visitor resubmit the form and create a duplicate lead.
    }

    return NextResponse.json({ ok: true, whatsappConfigured });
  } catch (error) {
    console.error("Leave-details submission error", error);
    return NextResponse.json({ error: "Unable to process form" }, { status: 500 });
  }
}

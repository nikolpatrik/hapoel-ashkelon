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

  const url = `https://graph.facebook.com/${graphVersion}/${phoneNumberId}/messages`;

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

    // FormSubmit's AJAX endpoint returns a machine-readable JSON response and
    // is more reliable for a server-to-server Vercel request than the normal
    // browser redirect endpoint.
    const submission = new FormData();
    submission.append("name", name);
    submission.append("age", age);
    submission.append("phone", phone);
    submission.append("sport", sport);
    submission.append("_subject", `פנייה חדשה מהאתר – ${sport}`);
    submission.append("_template", "table");
    submission.append("_captcha", "false");

    const emailResponse = await fetch("https://formsubmit.co/ajax/ash.sports2@gmail.com", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: submission,
      cache: "no-store",
    });

    const emailBody = await emailResponse.text().catch(() => "");
    if (!emailResponse.ok) {
      console.error("FormSubmit error", emailResponse.status, emailBody);
      return NextResponse.json(
        { error: "Email service rejected the submission" },
        { status: 502 },
      );
    }

    let emailResult: { success?: string; message?: string } | null = null;
    try {
      emailResult = JSON.parse(emailBody);
    } catch {
      // Some FormSubmit responses may be plain text; a successful HTTP status
      // is enough to continue in that case.
    }

    if (emailResult?.success === "false") {
      console.error("FormSubmit rejected lead", emailResult);
      return NextResponse.json(
        { error: emailResult.message || "Email service rejected the submission" },
        { status: 502 },
      );
    }

    try {
      await sendWhatsAppLead({ name, age, phone, sport });
    } catch (error) {
      console.error("WhatsApp notification error", error);
      // The lead has already been accepted by email. Do not make the user
      // resubmit and risk creating a duplicate lead.
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Leave-details submission error", error);
    return NextResponse.json({ error: "Unable to submit form" }, { status: 500 });
  }
}

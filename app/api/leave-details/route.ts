import { NextResponse } from "next/server";

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

    const response = await fetch("https://formsubmit.co/ash.sports2@gmail.com", {
      method: "POST",
      body: submission,
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Email service rejected the submission" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to submit form" }, { status: 500 });
  }
}

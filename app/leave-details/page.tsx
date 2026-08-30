"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Navbar from "../../Navbar";

const WHATSAPP_NUMBER = "972526781740";

export default function LeaveDetailsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const age = String(formData.get("age") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const sport = String(formData.get("sport") ?? "").trim();

    // Open WhatsApp from the user's click with the lead details pre-filled.
    // WhatsApp does not allow a normal wa.me link to send a message silently;
    // the user must press Send. Fully automatic delivery requires WhatsApp Business API.
    const whatsappMessage = [
      "פנייה חדשה מהאתר – העמותה לקידום הספורט באשקלון",
      "",
      `שם: ${name}`,
      `גיל: ${age}`,
      `טלפון: ${phone}`,
      `ענף ספורט: ${sport}`,
    ].join("\n");
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`;
    const whatsappWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    try {
      const response = await fetch("/api/leave-details", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        if (whatsappWindow) whatsappWindow.close();
        throw new Error("Submission failed");
      }

      setSubmitted(true);
      form.reset();
    } catch {
      setError("אירעה תקלה בשליחת הפרטים. נסו שוב בעוד רגע.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-[#17263d]">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#102f47] via-[#123c59] to-[#18b6b4]">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-[28px] border-white/10" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[28px] border-white/10" />
        <div className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-[#18b6b4]/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 text-center md:py-28">
          <div className="mb-5 inline-flex items-center rounded-full border border-[#6de3df]/40 bg-white/10 px-5 py-2 text-sm font-bold text-[#6de3df]">
            השאירו פרטים
          </div>
          <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">
            מעוניינים להצטרף?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
            השאירו לנו את הפרטים שלכם ונחזור אליכם
            <br />
            עם כל המידע על החוג המתאים לכם.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-[32px] bg-white p-7 shadow-xl ring-1 ring-slate-100 md:p-10">
            {!submitted ? (
              <>
                <div className="text-center">
                  <div className="text-sm font-bold tracking-[0.2em] text-[#18b6b4]">
                    LEAVE YOUR DETAILS
                  </div>
                  <h2 className="mt-3 text-3xl font-black text-[#102f47] md:text-4xl">
                    השאירו פרטים ונחזור אליכם
                  </h2>
                  <p className="mt-4 leading-7 text-slate-500">
                    מלאו את הפרטים ונציג מהעמותה יחזור אליכם בהקדם.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-bold text-[#102f47]">
                      שם מלא
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="הקלידו שם מלא"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-right outline-none transition focus:border-[#18b6b4] focus:bg-white focus:ring-4 focus:ring-[#18b6b4]/10"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="age" className="mb-2 block text-sm font-bold text-[#102f47]">
                        גיל
                      </label>
                      <input
                        id="age"
                        name="age"
                        type="number"
                        min="1"
                        max="120"
                        required
                        placeholder="גיל"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-right outline-none transition focus:border-[#18b6b4] focus:bg-white focus:ring-4 focus:ring-[#18b6b4]/10"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-bold text-[#102f47]">
                        מספר טלפון
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="050-0000000"
                        dir="ltr"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-left outline-none transition focus:border-[#18b6b4] focus:bg-white focus:ring-4 focus:ring-[#18b6b4]/10"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="sport" className="mb-2 block text-sm font-bold text-[#102f47]">
                      ענף ספורט
                    </label>
                    <select
                      id="sport"
                      name="sport"
                      required
                      defaultValue=""
                      className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-right outline-none transition focus:border-[#18b6b4] focus:bg-white focus:ring-4 focus:ring-[#18b6b4]/10"
                    >
                      <option value="" disabled>בחרו ענף ספורט</option>
                      <option value="סייף">🤺 סייף</option>
                      <option value="רוגבי">🏉 רוגבי</option>
                      <option value="אגרוף">🥊 אגרוף</option>
                      <option value="טניס שולחן">🏓 טניס שולחן</option>
                    </select>
                  </div>

                  {error && (
                    <p className="rounded-2xl bg-red-50 px-4 py-3 text-center text-sm font-bold text-red-600">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-full bg-[#18b6b4] px-8 py-4 text-lg font-black text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#129da0] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {submitting ? "שולחים את הפרטים..." : "השאירו פרטים ונחזור אליכם"}
                  </button>

                  <p className="text-center text-xs leading-6 text-slate-400">
                    הפרטים ישמשו לצורך חזרה אליכם בנוגע לפעילות הספורטיבית שבחרתם.
                  </p>
                </form>
              </>
            ) : (
              <div className="py-12 text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#18b6b4]/10 text-4xl">
                  ✓
                </div>
                <h2 className="mt-7 text-3xl font-black text-[#102f47]">תודה רבה!</h2>
                <p className="mx-auto mt-4 max-w-md leading-8 text-slate-500">
                  הפרטים התקבלו ונשלחו בהצלחה.
                  <br />
                  נחזור אליכם בהקדם.
                </p>
                <Link
                  href="/"
                  className="mt-8 inline-flex rounded-full bg-[#18b6b4] px-8 py-4 font-bold text-white transition hover:bg-[#129da0]"
                >
                  חזרה לאתר
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-[#0b2234] px-6 py-10 text-center text-white">
        <div className="text-xl font-black">
          העמותה לקידום
          <br />
          הספורט באשקלון
        </div>
        <p className="mt-3 text-sm text-slate-400">בית למצוינות • קהילה • ספורט</p>
      </footer>
    </main>
  );
}

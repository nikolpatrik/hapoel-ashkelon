import Image from "next/image";
import Navbar from "../Navbar";

export default function BoxingPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-[#f5f7fa] text-[#17263d]"
    >
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#102f47] via-[#123c59] to-[#18b6b4]">
        {/* Decorative circles */}
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-[28px] border-white/10" />
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[28px] border-white/10" />
        <div className="absolute -bottom-48 left-1/3 h-96 w-96 rounded-full bg-[#18b6b4]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-28 text-center md:py-36">

          <div className="mb-6 inline-flex items-center rounded-full border border-[#18b6b4]/50 bg-[#18b6b4]/10 px-5 py-2 text-sm font-bold text-[#6de3df]">
            BOXING • איגרוף 🥊
          </div>

          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">
            איגרוף באשקלון
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-slate-200 md:text-xl">
            אימוני איגרוף מקצועיים לילדים ולבוגרים,
            <br />
            עם מאמן מנוסה ורמה מקצועית גבוהה.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="tel:0548033178"
              className="rounded-full border border-white/40 px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              📞 054-8033178
            </a>

            <a
              href="https://wa.me/972548033178"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#18b6b4] px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#129da0]"
            >
              💬 מעבר ל-WhatsApp
            </a>

          </div>
        </div>
      </section>

      {/* ================= COACH ================= */}
      <section className="bg-[#f5f7fa] px-6 py-24">
        <div className="mx-auto max-w-6xl">

          <div className="grid items-center gap-14 md:grid-cols-2">

            {/* Coach Image */}
            <div className="relative overflow-hidden rounded-[32px] bg-white shadow-xl">
              <div className="relative h-[500px] w-full">
                <Image
                  src="/sergey-box.jpeg"
                  alt="סרגיי צ׳ומצ׳נקו - מאמן איגרוף"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-[50%_35%]"
                  priority
                />
              </div>
            </div>

            {/* Coach Text */}
            <div>

              <div className="text-sm font-bold tracking-[0.25em] text-[#18b6b4]">
                OUR BOXING COACH
              </div>

              <h2 className="mt-3 text-4xl font-black text-[#102f47] md:text-5xl">
                המאמן שלנו
              </h2>

              <div className="mt-4 h-1 w-16 rounded-full bg-[#18b6b4]" />

              <h3 className="mt-8 text-3xl font-black text-[#102f47]">
                סרגיי צ׳ומצ׳נקו
              </h3>

              <p className="mt-6 text-lg leading-9 text-slate-600">
                סרגיי צ׳ומצ׳נקו מתאגרף בכיר בעברו וכיום בין
                המאמנים הטובים בארץ.
              </p>

              <p className="mt-5 text-lg leading-9 text-slate-600">
                תחת כתפיו גידול אלופת ישראל הנוכחית מזה שנים רבות.
              </p>

              <div className="mt-8 rounded-2xl border border-[#18b6b4]/20 bg-white p-6 shadow-sm">
                <p className="font-bold leading-8 text-[#102f47]">
                  ניסיון, מקצועיות ומסגרת אימונים שמאפשרים לכל מתאמן
                  להתפתח, להתחזק ולהתקדם בעולם האיגרוף.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= GROUPS ================= */}
      <section
        id="groups"
        className="bg-white px-6 py-24"
      >
        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <div className="text-sm font-bold tracking-[0.25em] text-[#18b6b4]">
              TRAINING GROUPS
            </div>

            <h2 className="mt-3 text-4xl font-black text-[#102f47] md:text-5xl">
              קבוצות האימון
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-500">
              קיימות שתי קבוצות אימון, המותאמות לגיל ולרמת המתאמנים.
            </p>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">

            {/* Kids */}
            <div className="group rounded-[32px] bg-[#f5f7fa] p-8 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#18b6b4]/10 text-4xl">
                🥊
              </div>

              <h3 className="mt-7 text-3xl font-black text-[#102f47]">
                ילדים
              </h3>

              <div className="mt-3 text-lg font-bold text-[#18b6b4]">
                מעל גיל 8
              </div>

              <p className="mt-5 leading-8 text-slate-600">
                קבוצה המיועדת לילדים מעל גיל 8,
                עם דגש על יסודות האיגרוף, כושר גופני,
                משמעת, ביטחון עצמי והתפתחות אישית.
              </p>

            </div>

            {/* Adults */}
            <div className="group rounded-[32px] bg-[#102f47] p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#18b6b4]/20 text-4xl">
                🥊
              </div>

              <h3 className="mt-7 text-3xl font-black text-white">
                קבוצת בוגרים
              </h3>

              <div className="mt-3 text-lg font-bold text-[#6de3df]">
                אימונים למבוגרים
              </div>

              <p className="mt-5 leading-8 text-slate-300">
                קבוצה המיועדת לבוגרים המעוניינים להתאמן,
                לשפר כושר גופני, ללמוד איגרוף ולהתקדם
                במסגרת מקצועית.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* ================= WHY BOXING ================= */}
      <section className="bg-[#f5f7fa] px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <div className="text-sm font-bold tracking-[0.25em] text-[#18b6b4]">
              WHY BOXING
            </div>

            <h2 className="mt-3 text-4xl font-black text-[#102f47] md:text-5xl">
              למה איגרוף?
            </h2>

          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="rounded-[28px] bg-white p-7 text-center shadow-sm">
              <div className="text-4xl">💪</div>
              <h3 className="mt-5 text-xl font-black">
                כושר גופני
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                שיפור כוח, סיבולת, מהירות וקואורדינציה.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-7 text-center shadow-sm">
              <div className="text-4xl">🎯</div>
              <h3 className="mt-5 text-xl font-black">
                ריכוז
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                פיתוח יכולת תגובה, דיוק ושליטה עצמית.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-7 text-center shadow-sm">
              <div className="text-4xl">🔥</div>
              <h3 className="mt-5 text-xl font-black">
                נחישות
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                התמדה, משמעת ורצון להשתפר בכל אימון.
              </p>
            </div>

            <div className="rounded-[28px] bg-white p-7 text-center shadow-sm">
              <div className="text-4xl">🏆</div>
              <h3 className="mt-5 text-xl font-black">
                מצוינות
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-500">
                אימונים מקצועיים עם שאיפה להישגים.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className="bg-[#18b6b4]"
      >
        <div className="mx-auto max-w-5xl px-6 py-24 text-center text-white">

          <div className="text-sm font-bold tracking-[0.25em] text-white/80">
            CONTACT
          </div>

          <h2 className="mt-4 text-4xl font-black md:text-5xl">
            רוצים להצטרף?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            לפרטים נוספים על קבוצות האימון,
            שעות האימונים והצטרפות למועדון,
            צרו איתנו קשר.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

            <a
              href="tel:0548033178"
              className="flex min-w-[230px] items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-[#102f47] shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              📞
              054-8033178
            </a>

            <a
              href="https://wa.me/972548033178"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[230px] items-center justify-center gap-3 rounded-full border-2 border-white px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              💬
              מעבר ל-WhatsApp
            </a>

          </div>

        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-[#0b2234] px-6 py-12 text-white">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-3">

            {/* Brand */}
            <div>

              <div className="text-xl font-black">
                העמותה לקידום
                <br />
                הספורט באשקלון
              </div>

              <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
                בית למצוינות, קהילה וספורט.
              </p>

            </div>

            {/* Navigation */}
            <div>

              <h3 className="font-bold">
                ניווט
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">

                <a
                  href="/"
                  className="transition hover:text-[#18b6b4]"
                >
                  ראשי
                </a>

                <a
                  href="/#sports"
                  className="transition hover:text-[#18b6b4]"
                >
                  ענפי ספורט
                </a>

                <a
                  href="/#about"
                  className="transition hover:text-[#18b6b4]"
                >
                  אודות
                </a>

                <a
                  href="/#contact"
                  className="transition hover:text-[#18b6b4]"
                >
                  צור קשר
                </a>

              </div>

            </div>

            {/* Sports */}
            <div>

              <h3 className="font-bold">
                ענפי הספורט
              </h3>

              <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">

                <a
                  href="/sports/fencing"
                  className="transition hover:text-[#18b6b4]"
                >
                  🤺 סייף
                </a>

                <a
                  href="/sports/rugby"
                  className="transition hover:text-[#18b6b4]"
                >
                  🏉 רוגבי
                </a>

                <a
                  href="/sports/boxing"
                  className="transition hover:text-[#18b6b4]"
                >
                  🥊 אגרוף
                </a>

                <a
                  href="/sports/table-tennis"
                  className="transition hover:text-[#18b6b4]"
                >
                  🏓 טניס שולחן
                </a>

              </div>

            </div>

          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} העמותה לקידום הספורט באשקלון. כל הזכויות שמורות.
          </div>

        </div>

      </footer>

    </main>
  );
}

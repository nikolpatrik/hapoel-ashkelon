import Navbar from "../../../Navbar";

const chapters = [
  "ההיסטוריה של הסייף",
  "שלושת כלי הסייף",
  "איך מתנהל קרב?",
  "איך מקבלים נקודות?",
  "ציוד הסייף",
  "איך נראה אימון?",
  "למי הספורט מתאים?",
  "איך מתחילים?",
];

export default function FencingAboutPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#07131f] text-white">
      <Navbar />
      <section className="relative overflow-hidden px-5 py-10 md:px-8 md:py-14">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(24,182,180,.16),transparent_34%),radial-gradient(circle_at_25%_75%,rgba(14,52,79,.45),transparent_42%)]" />
        <div className="relative mx-auto max-w-7xl">
          <a href="/fencing" className="inline-flex items-center gap-2 text-sm font-bold text-[#72e4e1]">← חזרה לעמוד הסייף</a>
          <div className="mt-8 grid gap-8 lg:grid-cols-[235px_1fr]">
            <aside className="h-fit rounded-3xl border border-white/10 bg-[#0b2032]/90 p-5 shadow-2xl backdrop-blur">
              <div className="mb-5 flex items-center justify-between"><div className="text-lg font-black">תוכן העניינים</div><span className="text-2xl text-[#18b6b4]">☷</span></div>
              <div className="space-y-2">
                {chapters.map((chapter, i) => (
                  <button key={chapter} className={`w-full rounded-xl px-4 py-3 text-right text-sm font-bold transition ${i === 0 ? "bg-[#18b6b4] text-[#071a2f] shadow-[0_0_22px_rgba(24,182,180,.22)]" : "text-slate-300 hover:bg-white/10"}`}>
                    {i + 1}. {chapter}
                  </button>
                ))}
              </div>
            </aside>

            <div>
              <div className="mb-7 text-center">
                <div className="text-sm font-bold tracking-[0.22em] text-[#72e4e1]">FENCING • DIGITAL BOOK</div>
                <h1 className="mt-2 text-4xl font-black md:text-5xl">ההיסטוריה של הסייף</h1>
                <p className="mt-3 text-slate-400">ספר דיגיטלי אינטראקטיבי על עולם הסייף</p>
              </div>

              <div className="book-scene relative mx-auto max-w-6xl px-2 py-8 md:px-8">
                <div className="absolute bottom-5 left-[7%] right-[7%] h-16 rounded-[50%] bg-black/70 blur-2xl" />
                <div className="book-cover relative rounded-[30px] bg-gradient-to-br from-[#172f43] via-[#0b1b2b] to-[#06111d] p-3 shadow-[0_35px_70px_rgba(0,0,0,.65)] md:p-5">
                  <div className="book-pages relative grid min-h-[570px] overflow-hidden rounded-[20px] bg-[#eee3ca] text-[#17263d] shadow-inner md:grid-cols-2">
                    <article className="relative border-b border-[#c6b997] bg-[linear-gradient(105deg,#eee3ca,#faf4e4_55%,#e3d5b8)] p-8 shadow-[inset_-18px_0_28px_rgba(80,57,24,.12)] md:border-b-0 md:border-l md:p-12">
                      <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#cdbb96]/35 to-transparent" />
                      <div className="relative text-center text-xs font-bold text-[#148e91]">פרק 1</div>
                      <h2 className="relative mt-4 text-center text-3xl font-black md:text-4xl">ההיסטוריה של הסייף</h2>
                      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-[#18b6b4]" />
                      <div className="relative mx-auto mt-9 flex h-44 max-w-md items-center justify-center overflow-hidden rounded-xl border border-[#b9a57c] bg-[#d8c7a3] shadow-[0_10px_18px_rgba(40,30,15,.2)]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,.28),transparent_32%),linear-gradient(135deg,#bda77a,#e4d4b4,#ad956a)]" />
                        <div className="relative text-center text-7xl opacity-80">⚔️</div>
                      </div>
                      <p className="mt-8 text-lg leading-9 text-slate-700">כאן יופיע התוכן ההיסטורי שנוסיף לספר. העיצוב מוכן לקריאה עשירה, עם טקסט, תמונות, איורים וצירי זמן.</p>
                      <div className="absolute bottom-6 left-0 right-0 text-center text-sm text-slate-400">1</div>
                    </article>

                    <article className="relative bg-[linear-gradient(75deg,#e4d6b9,#faf3df_45%,#eee3c9)] p-8 shadow-[inset_18px_0_28px_rgba(80,57,24,.1)] md:p-12">
                      <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#cdbb96]/35 to-transparent" />
                      <div className="relative text-center text-xs font-bold text-[#148e91]">מסע בזמן</div>
                      <h2 className="relative mt-4 text-center text-2xl font-black">ממסורת עתיקה לספורט אולימפי</h2>
                      <div className="relative mt-9 mr-4 border-r-2 border-[#18b6b4] pr-7">
                        {["מקורות הלחימה בחרבות", "התפתחות הסייף כספורט", "הפיכת הסייף לענף תחרותי", "הסייף במשחקים האולימפיים", "הסייף בעולם כיום"].map((item, i) => (
                          <div key={item} className="relative mb-7">
                            <span className="absolute -right-[37px] top-1 h-4 w-4 rounded-full border-4 border-[#fbf5e6] bg-[#18b6b4] shadow-[0_0_10px_rgba(24,182,180,.35)]" />
                            <div className="font-black text-[#102f47]">{item}</div>
                            <div className="mt-1 text-sm leading-6 text-slate-500">תוכן מפורט יתווסף בפרק ההיסטוריה.</div>
                          </div>
                        ))}
                      </div>
                      <div className="absolute bottom-6 left-0 right-0 text-center text-sm text-slate-400">2</div>
                    </article>
                    <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-10 -translate-x-1/2 bg-gradient-to-r from-black/10 via-[#a58f67]/25 to-black/10 md:block" />
                  </div>
                  <div className="absolute bottom-0 left-1/2 h-4 w-24 -translate-x-1/2 rounded-t-full bg-[#06111d] shadow-inner" />
                </div>

                <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between px-0 md:px-2">
                  <button aria-label="עמוד קודם" className="pointer-events-auto grid h-14 w-14 place-items-center rounded-full border border-[#18b6b4]/60 bg-[#071a2f]/90 text-3xl font-black text-[#72e4e1] shadow-[0_0_28px_rgba(24,182,180,.2)] transition hover:scale-105 hover:bg-[#18b6b4] hover:text-[#071a2f]">›</button>
                  <button aria-label="עמוד הבא" className="pointer-events-auto grid h-14 w-14 place-items-center rounded-full border border-[#18b6b4]/60 bg-[#071a2f]/90 text-3xl font-black text-[#72e4e1] shadow-[0_0_28px_rgba(24,182,180,.2)] transition hover:scale-105 hover:bg-[#18b6b4] hover:text-[#071a2f]">‹</button>
                </div>
              </div>

              <div className="mx-auto mt-2 flex max-w-md items-center justify-center gap-5 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-300 shadow-lg backdrop-blur">
                <span>◫</span><span>עמודים 1–2 / 20</span><span>⛶</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-5 py-16 text-[#102f47] md:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="text-sm font-bold text-[#18b6b4]">מה מחכה בספר?</div>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">נבנה יחד מדריך שלם לעולם הסייף</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {["היסטוריה", "כלי הסייף", "חוקי המשחק", "ציוד ואימון"].map((item) => (
              <div key={item} className="rounded-3xl bg-[#f5f7fa] p-6 shadow-sm"><div className="text-2xl">📖</div><h3 className="mt-3 font-black">{item}</h3><p className="mt-2 text-sm leading-6 text-slate-500">פרק שיוכל להתמלא בתוכן, תמונות והסברים.</p></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

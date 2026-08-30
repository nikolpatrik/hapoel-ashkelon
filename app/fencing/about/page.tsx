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
    <main dir="rtl" className="min-h-screen bg-[#071a2f] text-white">
      <Navbar />
      <section className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <a href="/fencing" className="inline-flex items-center gap-2 text-sm font-bold text-[#72e4e1]">← חזרה לעמוד הסייף</a>
          <div className="mt-8 grid gap-8 lg:grid-cols-[230px_1fr]">
            <aside className="rounded-3xl border border-white/10 bg-white/5 p-5 h-fit">
              <div className="mb-5 text-lg font-black">תוכן העניינים</div>
              <div className="space-y-2">
                {chapters.map((chapter, i) => (
                  <button key={chapter} className={`w-full rounded-xl px-4 py-3 text-right text-sm font-bold transition ${i === 0 ? "bg-[#18b6b4] text-[#071a2f]" : "text-slate-300 hover:bg-white/10"}`}>
                    {i + 1}. {chapter}
                  </button>
                ))}
              </div>
            </aside>

            <div>
              <div className="mb-6 text-center">
                <div className="text-sm font-bold tracking-[0.2em] text-[#72e4e1]">FENCING • DIGITAL BOOK</div>
                <h1 className="mt-2 text-4xl font-black md:text-5xl">ההיסטוריה של הסייף</h1>
                <p className="mt-3 text-slate-400">ספר דיגיטלי אינטראקטיבי על עולם הסייף</p>
              </div>

              <div className="relative mx-auto max-w-5xl rounded-[28px] bg-[#d9c8a8] p-3 shadow-2xl md:p-5">
                <div className="grid min-h-[520px] overflow-hidden rounded-[20px] bg-[#f8f1df] text-[#17263d] shadow-inner md:grid-cols-2">
                  <article className="border-b border-[#c9b998] p-8 md:border-b-0 md:border-l md:p-12">
                    <div className="text-center text-xs font-bold text-[#18a4a5]">פרק 1</div>
                    <h2 className="mt-4 text-center text-3xl font-black md:text-4xl">ההיסטוריה של הסייף</h2>
                    <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#18b6b4]" />
                    <p className="mt-8 text-lg leading-9 text-slate-700">
                      כאן יופיע התוכן ההיסטורי שנוסיף לספר. העמוד בנוי מראש לקריאה נוחה, עם חלוקה לפרקים ואפשרות לדפדף בין עמודים.
                    </p>
                    <p className="mt-5 text-lg leading-9 text-slate-700">
                      בהמשך נוכל לשלב כאן טקסטים, תמונות, צירי זמן ואיורים שיעזרו להכיר את התפתחות הסייף לאורך השנים.
                    </p>
                    <div className="mt-10 text-center text-sm text-slate-400">1</div>
                  </article>

                  <article className="relative bg-[#fbf5e6] p-8 md:p-12">
                    <div className="text-center text-xs font-bold text-[#18a4a5]">ציר זמן</div>
                    <h2 className="mt-4 text-center text-2xl font-black">מסורת עתיקה לספורט אולימפי</h2>
                    <div className="relative mt-9 mr-4 border-r-2 border-[#18b6b4] pr-7">
                      {["מקורות הלחימה בחרבות", "התפתחות הסייף כספורט", "הפיכת הסייף לענף תחרותי", "הסייף במשחקים האולימפיים", "הסייף בעולם כיום"].map((item, i) => (
                        <div key={item} className="relative mb-7">
                          <span className="absolute -right-[37px] top-1 h-4 w-4 rounded-full border-4 border-[#fbf5e6] bg-[#18b6b4]" />
                          <div className="font-black text-[#102f47]">{item}</div>
                          <div className="mt-1 text-sm leading-6 text-slate-500">תוכן מפורט יתווסף בפרק ההיסטוריה.</div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 text-center text-sm text-slate-400">2</div>
                  </article>
                </div>

                <div className="pointer-events-none absolute inset-y-0 left-[-18px] right-[-18px] flex items-center justify-between">
                  <button aria-label="עמוד קודם" className="pointer-events-auto grid h-12 w-12 place-items-center rounded-full bg-[#18b6b4] text-2xl font-black text-[#071a2f] shadow-lg">›</button>
                  <button aria-label="עמוד הבא" className="pointer-events-auto grid h-12 w-12 place-items-center rounded-full bg-[#18b6b4] text-2xl font-black text-[#071a2f] shadow-lg">‹</button>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-4 text-sm text-slate-400">
                <span>עמודים 1–2</span><span>•</span><span>הספר יושלם בהדרגה</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-[#102f47] md:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <div className="text-sm font-bold text-[#18b6b4]">מה מחכה בספר?</div>
          <h2 className="mt-2 text-3xl font-black md:text-4xl">נבנה יחד מדריך שלם לעולם הסייף</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {["היסטוריה", "כלי הסייף", "חוקי המשחק", "ציוד ואימון"].map((item) => (
              <div key={item} className="rounded-3xl bg-[#f5f7fa] p-6 shadow-sm">
                <div className="text-2xl">📖</div><h3 className="mt-3 font-black">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">פרק שיוכל להתמלא בתוכן, תמונות והסברים.</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

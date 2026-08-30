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

const pages = [
  {
    number: 1,
    label: "פרק 1",
    title: "סייף – מסורת עתיקה, ספורט אולימפי ודרך להתפתחות",
    content: [
      "סייף הוא הרבה יותר מקרב בחרבות – זהו ענף ספורט אולימפי המשלב מסורת בת אלפי שנים עם מהירות, דיוק, חשיבה אסטרטגית ושליטה עצמית.",
      "שורשיו של הסייף נעוצים באומנויות הלחימה העתיקות, שבהן כלי הנשק שימשו להגנה, ללחימה ולדו־קרב. כבר במצרים העתיקה, לפני יותר מ־3,000 שנה, קיימות עדויות לתחרויות לחימה מאורגנות שבהן השתמשו בכלי נשק מוגנים, מסכות ואמצעי הגנה – למעשה, אחד התיאורים הקדומים ביותר של תחרות סייף.",
      "לאורך הדורות התפתחה אמנות החרב באירופה, במיוחד בתקופת הרנסנס, והפכה למקצוע שנלמד בבתי ספר ייעודיים לסייף. עם התפתחות כלי הנשק המודרניים ירדה חשיבות החרב בשדה הקרב, והסייף עבר שינוי משמעותי: מאמנות לחימה שנועדה להתמודד עם יריב אמיתי הוא הפך לענף ספורט המבוסס על טכניקה, חוקים, בטיחות ותחרות הוגנת.",
    ],
  },
  {
    number: 2,
    label: "הסייף המודרני",
    title: "שלושה כלי סייף, עולם אחד",
    content: [
      "הסייף המודרני מתנהל על מסלול ייעודי, בין שני ספורטאים המצוידים בביגוד מגן ובמערכת אלקטרונית המזהה את הפגיעות. כיום קיימות שלוש התמחויות אולימפיות – רומח, דקר וחרב – שלכל אחת מהן חוקים וסגנון משחק משלה.",
      "בדקר ניתן לפגוע בכל גוף היריב, והוא מתאפיין במשחק טקטי של מרחק, תזמון, סבלנות ודיוק. בחרב, לעומת זאת, הקרב מהיר ודינמי במיוחד, והפגיעות מתבצעות באמצעות חוד הלהב או צדו באזור שמעל המותניים.",
      "בשתי ההתמחויות נדרש הסייף לקרוא את היריב, לזהות את כוונותיו, להגיב בתוך שברירי שנייה ולשלב בין התקפה, הגנה ותנועה. לכן סייף הוא ענף שבו לא רק הגוף מתאמן – גם המוח. כל קרב הוא משחק שחמט במהירות גבוהה, שבו החלטה נכונה ברגע הנכון יכולה לשנות את התוצאה.",
    ],
  },
  {
    number: 3,
    label: "הדרך לאולימפיאדה",
    title: "מהמסורת אל הבמה האולימפית",
    content: [
      "הדרך של הסייף להפוך לאחד מענפי הספורט המרכזיים בעולם החלה במאות ה־18 וה־19, עם התפתחותם של בתי ספר לסייף, ציוד ייעודי וכללים תחרותיים אחידים.",
      "בשנת 1896, במשחקים האולימפיים הראשונים של העת החדשה באתונה, כבר נכלל הסייף בתוכנית האולימפית – ובכך החל הקשר ההיסטורי בין הסייף לבין המשחקים האולימפיים.",
      "בתחילה התחרו ברומח ובחרב, ובמשחקי פריז בשנת 1900 נוסף גם הדקר. במהלך המאה ה־20 המשיך הענף להתפתח: הוקמו תחרויות בינלאומיות, נוספו תחרויות נשים וקבוצות, והטכנולוגיה האלקטרונית הפכה את זיהוי הפגיעות למדויק ואמין יותר.",
      "בשנת 1913 הוקמה הפדרציה הבינלאומית לסייף (FIE), שהיא עד היום הגוף הבינלאומי המנהל את הענף ומוכר על ידי הוועד האולימפי הבינלאומי.",
    ],
  },
  {
    number: 4,
    label: "הסייף בישראל",
    title: "הסייף מגיע לישראל ומתפתח",
    content: [
      "גם בישראל לסייף יש היסטוריה של עשרות שנים. הענף החל להתפתח בארץ עוד לפני הקמת המדינה, ובשנותיה הראשונות של ישראל פעל בעיקר בחיפה ובתל אביב במסגרת אגודות ספורט.",
      "בתחילת שנות ה־50 עדיין היה מדובר בענף קטן יחסית, אך בשנת 1952 הוקם מועדון סייף ברמת גן, שהפך לאחד המרכזים החשובים בהתפתחות הענף בישראל.",
      "מאמנים שהגיעו מאירופה הביאו עמם שיטות אימון מודרניות וסייעו בהקמת תשתית מקצועית לענף. בהדרגה נפתחו מועדונים נוספים, נבנו מסגרות תחרותיות והסייף החל לקבל חשיפה ציבורית רחבה יותר.",
      "בשנת 1960, במשחקים האולימפיים ברומא, השתתפו לראשונה סייפים ישראלים במשחקים האולימפיים. מאז המשיך הענף להתפתח, וסייפים ישראלים השתתפו לאורך השנים במשחקים האולימפיים, באליפויות עולם ובתחרויות בינלאומיות.",
    ],
  },
  {
    number: 5,
    label: "יותר מספורט",
    title: "מה הסייף מעניק לספורטאי?",
    content: [
      "אבל אולי הדבר המיוחד ביותר בסייף הוא מה שהוא מעניק לספורטאי מעבר לתחרות עצמה.",
      "אימוני סייף מפתחים מהירות תגובה, שיווי משקל, קואורדינציה, זריזות, כוח, גמישות וריכוז, אך במקביל מלמדים גם התמדה, משמעת, חשיבה עצמאית, שליטה ברגשות וכבוד ליריב.",
      "הסייף מחייב את הספורטאי להיות נוכח בכל רגע, לקבל החלטות במהירות ולהתמודד גם עם הצלחה וגם עם כישלון.",
      "עבור ילדים ובני נוער, זהו ענף שמאפשר להתחיל מגיל צעיר, להתפתח בהדרגה ולהתקדם מאימון ראשון ועד לתחרויות ברמה הארצית והבינלאומית.",
    ],
  },
  {
    number: 6,
    label: "לסיום",
    title: "גוף, מחשבה ואופי",
    content: [
      "מאחורי המסכה והחרב נמצאת למעשה דרך שלמה של התפתחות אישית – דרך שמחברת בין גוף, מחשבה ואופי, והופכת את הסייף לאחד מענפי הספורט הייחודיים והמרתקים בעולם.",
    ],
  },
];

export default function FencingAboutPage() {
  const first = pages[0];
  const second = pages[1];

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
                <h1 className="mt-2 text-4xl font-black md:text-5xl">עולם הסייף</h1>
                <p className="mt-3 text-slate-400">מסורת עתיקה, ספורט אולימפי ודרך להתפתחות</p>
              </div>

              <div className="book-scene relative mx-auto max-w-6xl px-2 py-8 md:px-8">
                <div className="absolute bottom-5 left-[7%] right-[7%] h-16 rounded-[50%] bg-black/70 blur-2xl" />
                <div className="book-cover relative rounded-[30px] bg-gradient-to-br from-[#172f43] via-[#0b1b2b] to-[#06111d] p-3 shadow-[0_35px_70px_rgba(0,0,0,.65)] md:p-5">
                  <div className="book-pages relative grid min-h-[650px] overflow-hidden rounded-[20px] bg-[#eee3ca] text-[#17263d] shadow-inner md:grid-cols-2">
                    <BookPage page={first} left />
                    <BookPage page={second} />
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

function BookPage({ page, left = false }: { page: typeof pages[number]; left?: boolean }) {
  return (
    <article className={`relative p-8 md:p-12 ${left ? "border-l border-[#c6b997] bg-[linear-gradient(105deg,#eee3ca,#faf4e4_55%,#e3d5b8)] shadow-[inset_-18px_0_28px_rgba(80,57,24,.12)]" : "bg-[linear-gradient(75deg,#e4d6b9,#faf3df_45%,#eee3c9)] shadow-[inset_18px_0_28px_rgba(80,57,24,.1)]"}`}>
      <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-black/10 to-transparent opacity-40" />
      <div className="relative z-10">
        <div className="text-center text-xs font-bold text-[#148e91]">{page.label}</div>
        <h2 className="mt-4 text-center text-2xl font-black leading-tight md:text-3xl">{page.title}</h2>
        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-[#18b6b4]" />
        {page.number === 1 && (
          <div className="mx-auto mt-7 flex h-32 max-w-sm items-center justify-center overflow-hidden rounded-xl border border-[#b9a57c] bg-[#d8c7a3] shadow-[0_10px_18px_rgba(40,30,15,.2)]">
            <div className="text-6xl opacity-80">⚔️</div>
          </div>
        )}
        <div className="mt-7 space-y-5 text-base leading-8 text-slate-700 md:text-[17px] md:leading-9">
          {page.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-center text-sm text-slate-400">{page.number}</div>
      </div>
    </article>
  );
}

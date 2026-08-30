"use client";

import { useState } from "react";
import Navbar from "../../../Navbar";

const pages = [
  {
    number: 1,
    era: "המקורות הקדומים",
    title: "מסורת של אלפי שנים",
    paragraphs: [
      "הסייף המודרני נולד מתוך מסורת עתיקה של שימוש בחרב ללחימה, להגנה עצמית ולדו־קרב. כבר בעולם העתיק כלי נשק דמויי חרב שימשו לא רק בשדה הקרב אלא גם באימונים ובמפגנים של מיומנות.",
      "במצרים העתיקה קיימות עדויות לתחרויות לחימה מאורגנות שבהן נעשה שימוש בכלי נשק מוגנים. אחת העדויות המפורסמות מתוארכת לסביבות 1190 לפנה״ס ומראה כי כבר לפני יותר מ־3,000 שנה התקיימו אירועים שבהם לחימה בחרבות קיבלה אופי תחרותי.",
      "עם זאת, חשוב להבחין בין אותן תחרויות קדומות לבין הסייף שאנו מכירים כיום: הספורט המודרני התפתח בהדרגה מתוך מסורות לחימה אירופיות, ולא נוצר באירוע אחד.",
    ],
  },
  {
    number: 2,
    era: "ימי הביניים והרנסנס",
    title: "מהחרב בשדה הקרב אל בית הספר לסייף",
    paragraphs: [
      "בימי הביניים הייתה החרב כלי לחימה מרכזי באירופה. לוחמים ואנשי צבא נדרשו ללמוד שליטה בחרב, והידע עבר ממורים לתלמידים באמצעות מסורות של אימון ותרגול.",
      "בתקופת הרנסנס, ובעיקר במאות ה־16 וה־17, התפתחו באירופה בתי ספר מקצועיים לסייף. הסייף הפך למערכת מסודרת של טכניקות, עמדות, צעדים, התקפות והגנות, ולמקצוע שנלמד באופן שיטתי.",
      "בהדרגה נוצר גם הבסיס התרבותי לסייף תחרותי: במקום להשתמש בחרב כדי לפגוע ביריב באמת, המתאמנים החלו להשתמש בכלי אימון ובציוד מגן ולפתח כללים שמאפשרים לבחון מיומנות, מהירות ודיוק בבטיחות יחסית.",
    ],
  },
  {
    number: 3,
    era: "המאה ה־17 עד המאה ה־19",
    title: "הולדת הסייף כספורט",
    paragraphs: [
      "במאות ה־17 וה־18 החל הסייף לקבל את הצורה המוכרת לנו כיום. התפתח הרומח הקל לאימון, הומצאה מסכת הרשת שהגנה על הפנים, ונוצרו כללים ברורים יותר לגבי אזורי המטרה ואופן ניהול הקרב.",
      "המעבר מכלי נשק צבאיים לכלי ספורט קלים ובטוחים יותר היה צעד מכריע. עם ירידת חשיבות החרב בשדה הקרב בעקבות כלי הנשק המודרניים, הסייף יכול היה להשתחרר בהדרגה מתפקידו הצבאי ולהפוך לענף ספורט בפני עצמו.",
      "במאה ה־19 התבססו בתי ספר ומועדוני סייף ברחבי אירופה, נערכו תחרויות, נכתבו תקנונים ונוצרו מסגרות שאפשרו לספורטאים ממדינות שונות להתחרות לפי חוקים דומים.",
    ],
  },
  {
    number: 4,
    era: "הסייף האולימפי",
    title: "מאירופה אל הבמה הגדולה בעולם",
    paragraphs: [
      "הסייף היה אחד מענפי הספורט שנכללו כבר במשחקים האולימפיים הראשונים של העת החדשה באתונה בשנת 1896, והוא אחד מחמשת הענפים שהופיעו בכל מהדורות המשחקים האולימפיים המודרניים.",
      "במשחקי פריז 1900 נוספה תחרות הדקר. במהלך המאה ה־20 הורחב הענף בהדרגה גם לנשים ולתחרויות קבוצתיות, ושלושת כלי הסייף – רומח, דקר וחרב – הפכו לחלק קבוע מהמערכת התחרותית הבינלאומית.",
      "בשנת 1913 הוקמה הפדרציה הבינלאומית לסייף (FIE), שהפכה לגוף המרכזי המנהל את הספורט בעולם ומפתחת את החוקים והמסגרות הבינלאומיות שלו.",
      "הטכנולוגיה שינתה גם היא את הענף: מערכת הניקוד האלקטרונית אפשרה לזהות פגיעות באופן מדויק יותר והפכה את הקרבות למהירים, מדידים והוגנים יותר.",
    ],
  },
  {
    number: 5,
    era: "1942–1965",
    title: "הסייף מגיע לישראל",
    paragraphs: [
      "בישראל החלה התפתחות מאורגנת של הסייף עוד לפני הקמת המדינה, ובשנות ה־50 וה־60 נבנתה תשתית שאפשרה לסייפים ישראלים לצאת לתחרויות בינלאומיות.",
      "בשנת 1958 יצאה נבחרת של אגודת הספורט האקדמית (ASA) לתחרויות בפולין. לפי איגוד הסייף הישראלי, זו הייתה אחת ההופעות הראשונות של ספורט ישראלי בכלל בזירה האירופית וההופעה הבינלאומית הראשונה של נבחרת סייף ישראלית.",
      "בשנת 1960 הופיעו סייפים ישראלים לראשונה במשחקים האולימפיים ברומא. מיקי רון ודוד ואן גלדר השתתפו בתחרויות הסייף, ובכך נפתח הפרק האולימפי של הסייף הישראלי.",
      "בשנות ה־60, לאחר תקופה של פעילות מצומצמת, יזמו סייפי רמת גן מערכת קבועה של תחרויות מקומיות וארציות. בהמשך נפתחו מועדונים נוספים ונבנתה מסגרת ארצית יציבה יותר.",
    ],
  },
  {
    number: 6,
    era: "ההתבססות בישראל",
    title: "מענף קטן לענף תחרותי",
    paragraphs: [
      "התרחבות המועדונים והכשרת מאמנים יצרו בישראל בסיס רחב יותר לסייף. במהלך השנים התפתחו מסגרות לילדים, לנוער ולבוגרים, וסייפים ישראלים החלו להופיע באופן קבוע באליפויות אירופה, אליפויות עולם, גביעי עולם ובמשחקים האולימפיים.",
      "אחד השלבים החשובים היה המעבר מהתמקדות היסטורית ברומח להתפתחות משמעותית גם בדקר ובחרב. כיום שלושת כלי הסייף מתקיימים בישראל במסגרת תחרותית מסודרת.",
      "איגוד הסייף הישראלי מציין כי בישראל פועלים כיום יותר מ־19 מועדונים, מצפון הארץ ועד באר שבע, וכי המועדונים הישראלים שולחים ספורטאים ושופטים לתחרויות בינלאומיות ולמשחקים האולימפיים.",
    ],
  },
  {
    number: 7,
    era: "הישגים ישראליים בולטים",
    title: "ישראל על מפת הסייף העולמית",
    achievements: [
      "אודי כרמי – מקום 4 באליפות העולם ברומח בשנת 1987.",
      "לידיה חטואל – מקום 7 באליפות העולם ברומח בשנת 1991.",
      "תומר אור – אלוף עולם לנוער, דורג בין עשרת הסייפים הטובים בעולם וזכה בשלושה גביעי עולם; השתתף באולימפיאדת בייג׳ינג 2008.",
      "דלילה חטואל – זכתה בגביעי עולם והגיעה למקום 7 באליפויות אירופה ב־2007 וב־2008; השתתפה באולימפיאדת בייג׳ינג 2008.",
      "מאור חטואל – זכה במקום השני באליפות אירופה לנוער בשנת 2005.",
      "אורן בסל – זכה במקום השלישי באליפות העולם לנוער בשנת 2006.",
      "יובל פרייליך – זכה באליפות אירופה בדקר בשנת 2019 והיה לסייף הישראלי הראשון שזכה בתואר אירופי לבוגרים.",
      "הסייף הישראלי המשיך להופיע במשחקים האולימפיים גם בעידן המודרני; יובל פרייליך ייצג את ישראל בדקר באולימפיאדת פריז 2024.",
    ],
  },
  {
    number: 8,
    era: "הסייף כיום",
    title: "מסורת שממשיכה להתפתח",
    paragraphs: [
      "מה שהתחיל כמיומנות לחימה עתיקה הפך במשך מאות שנים לענף ספורט בינלאומי המבוסס על חוקים, בטיחות, טכנולוגיה ותחרות הוגנת. הסייף המודרני משלב מהירות ודיוק עם חשיבה טקטית, שליטה עצמית ויכולת לקבל החלטות בשברירי שנייה.",
      "הדרך שעבר הספורט – מהחרב בשדה הקרב, דרך בתי הספר האירופיים לסייף, ועד לאולימפיאדה ולמועדונים בישראל – היא סיפור של שינוי מתמיד בלי אובדן המסורת.",
      "גם בישראל הסיפור ממשיך להיכתב: מדור הסייפים הראשון ברומא 1960 ועד להישגים באירופה ובזירה הבינלאומית, הסייף הישראלי ממשיך להתפתח ולהצמיח ספורטאים, מאמנים ומועדונים חדשים.",
      "וזה בדיוק מה שהופך את הסייף לייחודי: ענף שבו ההיסטוריה נמצאת בכל תנועה – אבל העתיד תמיד נמצא בקרב הבא.",
    ],
  },
];

const chapters = pages.map((page) => page.title);

export default function FencingAboutPage() {
  const [current, setCurrent] = useState(0);
  const page = pages[current];

  const next = () => setCurrent((value) => Math.min(value + 1, pages.length - 1));
  const previous = () => setCurrent((value) => Math.max(value - 1, 0));

  return (
    <main dir="rtl" className="min-h-screen overflow-hidden bg-[#071827] text-[#102d46]">
      <Navbar />

      <section className="relative px-4 py-8 md:px-8 md:py-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#17476b_0%,#071827_52%,#04101b_100%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-7 text-center text-white">
            <div className="mb-2 text-sm font-bold tracking-[0.28em] text-[#18b8c5]">FENCING • THE STORY</div>
            <h1 className="text-3xl font-black md:text-5xl">ההיסטוריה של הסייף</h1>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              ספר דיגיטלי על הדרך שעבר הסייף – מהמסורות העתיקות ועד הספורט האולימפי והסייף בישראל.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[220px_1fr] lg:items-start" dir="ltr">
            <aside className="order-2 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur lg:order-1" dir="rtl">
              <div className="mb-3 text-xs font-bold tracking-widest text-[#18b8c5]">תוכן הספר</div>
              <div className="space-y-1.5">
                {chapters.map((chapter, index) => (
                  <button
                    key={chapter}
                    onClick={() => setCurrent(index)}
                    className={`w-full rounded-xl px-3 py-2 text-right text-xs font-bold transition ${
                      current === index ? "bg-[#18b8c5] text-[#062033]" : "text-white/75 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {index + 1}. {chapter}
                  </button>
                ))}
              </div>
            </aside>

            <div className="order-1 lg:order-2">
              <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-b from-[#b8a98d] to-[#7d6f59] p-2 shadow-[0_35px_80px_rgba(0,0,0,.5)] md:p-3">
                <div className="relative overflow-hidden rounded-[1.5rem] bg-[#efe7d7] p-2 shadow-inner md:p-4">
                  <div className="grid min-h-[600px] grid-cols-2 overflow-hidden rounded-xl bg-[#fbf8f0] shadow-[inset_0_0_35px_rgba(61,45,25,.15)]" dir="rtl">
                    <article className="relative border-l border-[#c9bda7] p-6 md:p-10">
                      <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#b9ab94]/45 to-transparent" />
                      <div className="relative">
                        <div className="mb-5 flex items-center justify-between gap-4">
                          <span className="rounded-full bg-[#102d46] px-3 py-1 text-[10px] font-black text-white">עמוד {page.number}</span>
                          <span className="text-xs font-bold text-[#0aaab6]">{page.era}</span>
                        </div>
                        <h2 className="mb-6 text-2xl font-black leading-tight md:text-4xl">{page.title}</h2>

                        {page.paragraphs?.map((paragraph) => (
                          <p key={paragraph} className="mb-5 text-sm leading-8 text-[#40566a] md:text-base md:leading-9">{paragraph}</p>
                        ))}

                        {page.achievements && (
                          <ul className="space-y-3 text-sm leading-7 text-[#40566a] md:text-base">
                            {page.achievements.map((achievement) => (
                              <li key={achievement} className="flex gap-3">
                                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#11aeb9]" />
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </article>

                    <article className="relative hidden bg-[#f5efe2] p-6 md:block md:p-10">
                      <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#b9ab94]/45 to-transparent" />
                      <div className="flex h-full flex-col items-center justify-center text-center">
                        <div className="mb-5 text-7xl">🤺</div>
                        <div className="h-px w-28 bg-[#18b8c5]" />
                        <div className="mt-5 max-w-xs text-sm font-bold leading-7 text-[#6a5b47]">
                          {current < 4
                            ? "מן החרב העתיקה אל הסייף המודרני"
                            : current < 7
                              ? "הסיפור הישראלי של הסייף"
                              : "המסורת ממשיכה – הדור הבא על המסלול"}
                        </div>
                        <div className="mt-10 text-xs text-[#8d7d65]">ASHKELON FENCING</div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-center gap-4" dir="rtl">
                <button
                  onClick={previous}
                  disabled={current === 0}
                  className="rounded-full bg-white px-5 py-3 text-sm font-black text-[#102d46] shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  ← הקודם
                </button>
                <div className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white/80">
                  {current + 1} / {pages.length}
                </div>
                <button
                  onClick={next}
                  disabled={current === pages.length - 1}
                  className="rounded-full bg-[#18b8c5] px-5 py-3 text-sm font-black text-[#062033] shadow-lg transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  הבא →
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-xs text-slate-400">
            <a href="/fencing" className="font-bold text-[#18b8c5] hover:underline">← חזרה לעמוד הסייף</a>
          </div>
        </div>
      </section>
    </main>
  );
}

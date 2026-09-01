import Navbar from "../../../Navbar";

const milestones = [
  ["3000+ לפנה״ס", "העדויות הקדומות", "עדויות אמנותיות וארכאולוגיות מצביעות על תרגול לחימה באגרופים כבר במצרים העתיקה ובמסופוטמיה."],
  ["688 לפנה״ס", "האגרוף באולימפיה", "האגרוף נכנס לתוכנית המשחקים האולימפיים העתיקים באולימפיאדה ה־23. אונומסטוס מסמירנה נחשב לאלוף האולימפי הראשון בענף."],
  ["העת העתיקה", "יוון ורומא", "הספורט קיבל מסגרת תחרותית. המתאגרפים כרכו רצועות עור סביב הידיים, והקרבות הסתיימו בהכנעה או כשאחד המתחרים לא יכול היה להמשיך."],
  ["1743", "כללי ברוטון", "ג'ק ברוטון פרסם כללים שהגבילו התנהגות מסוכנת בזירה והיו שלב מרכזי בדרך לאגרוף המודרני."],
  ["1838", "הזירה המודרנית", "הפוג'יליסטיק סוסייטי הציגה זירה מרובעת התחומה בחבלים, צעד חשוב בדרך למבנה הזירה המוכר כיום."],
  ["1867", "כללי קווינסברי", "כללים שגובשו על ידי ג'ון גרהם צ'יימברס וג'ון דאגלס, המרקיז מקווינסברי, קבעו שימוש בכפפות, סיבובים ומגבלות ברורות והניחו יסוד לאגרוף המודרני."],
  ["1904", "האולימפיאדה המודרנית", "האגרוף נכנס לתוכנית המשחקים האולימפיים בסנט לואיס, עם תחרויות לפי קטגוריות משקל."],
  ["1920", "מסגרת בינלאומית", "הוקמה הפדרציה הבינלאומית לאגרוף חובבים, FIBA, שאימצה כללים אוניברסליים לענף."],
  ["1960", "קסיוס קליי", "במשחקי רומא זכה המתאגרף האמריקאי בן ה־18 במדליית הזהב במשקל כבד־קל. בהמשך נודע לעולם כמוחמד עלי."],
  ["2012", "נשים בזירה האולימפית", "תחרויות אגרוף לנשים נכנסו לראשונה לתוכנית המשחקים האולימפיים בלונדון."],
];

const pillars = [
  ["🥊", "טכניקה", "עמידה, עבודת רגליים, הגנה, התחמקויות ושילובי מכות."],
  ["⚡", "תזמון", "היכולת לראות הזדמנות, להגיב מהר ולשלוט בקצב הקרב."],
  ["🫀", "כושר", "סבולת לב־ריאה, כוח, זריזות והתאוששות בין סיבובים."],
  ["🧠", "מנטליות", "ריכוז, משמעת, ביטחון עצמי, קור רוח והתמדה."],
];

export default function BoxingAbout() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f4f0e8] text-[#171717]"><Navbar />
      <section className="bg-[#120d0d] px-6 py-24 text-white md:py-32"><div className="mx-auto max-w-6xl"><div className="max-w-4xl"><div className="text-sm font-black tracking-[0.2em] text-[#fbbf24]">THE HISTORY OF BOXING · OLYMPIC SPORT</div><h1 className="mt-6 text-6xl font-black md:text-8xl">אגרוף</h1><p className="mt-7 text-2xl font-bold leading-relaxed md:text-4xl">אלפי שנים של לחימה.<br /><span className="text-[#f59e0b]">מאות שנים של ספורט.</span></p><p className="mt-6 max-w-3xl text-lg leading-9 text-slate-300">האגרוף עבר דרך ארוכה: מהעדויות הקדומות של לחימה באגרופים, דרך האולימפיאדה העתיקה, קרבות הפרסים באנגליה וכללי קווינסברי — ועד לענף אולימפי מודרני עם חוקים, קטגוריות משקל ומסגרות בינלאומיות.</p><a href="/boxing/about/book" className="mt-9 inline-flex rounded-full bg-[#f59e0b] px-8 py-4 font-black text-[#17100a]">לצאת למסע בהיסטוריה ←</a></div></div></section>

      <section className="px-6 py-20 md:py-24"><div className="mx-auto max-w-6xl"><div className="max-w-3xl"><div className="text-sm font-black text-[#c2410c]">01 · מהו אגרוף?</div><h2 className="mt-3 text-4xl font-black md:text-5xl">קרב של גוף ומוח.</h2><p className="mt-6 text-lg leading-9 text-stone-600">אגרוף תחרותי הוא מפגש בין שני ספורטאים במסגרת מוגדרת של סיבובים, קטגוריית משקל וחוקים. המטרה אינה רק להכות חזק: נדרשים מרחק נכון, הגנה, תנועה, תזמון, דיוק ויכולת לקרוא את היריב.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{pillars.map(([icon,title,text])=><article key={title} className="rounded-3xl bg-white p-7 shadow-md"><div className="text-4xl">{icon}</div><h3 className="mt-4 text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-stone-500">{text}</p></article>)}</div></div></section>

      <section className="bg-[#1c1917] px-6 py-20 text-white md:py-24"><div className="mx-auto max-w-6xl"><div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><div className="text-sm font-black text-[#fbbf24]">02 · מסע בזמן</div><h2 className="mt-3 text-4xl font-black">מהאולימפיאדה העתיקה<br />לזירה המודרנית.</h2></div><a href="/boxing/about/book" className="font-black text-[#fbbf24]">לפתוח את הספר ההיסטורי →</a></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{milestones.slice(0,5).map(([year,title,text])=><article key={year} className="rounded-3xl border border-white/10 bg-white/5 p-6"><div className="text-sm font-black text-[#fbbf24]">{year}</div><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-slate-300">{text}</p></article>)}</div></div></section>

      <section className="px-6 py-20"><div className="mx-auto max-w-6xl"><div className="max-w-3xl"><div className="text-sm font-black text-[#c2410c]">03 · האגרוף בישראל</div><h2 className="mt-3 text-4xl font-black md:text-5xl">מסורת ישראלית בזירה.</h2><p className="mt-6 text-lg leading-9 text-stone-600">האגרוף הגיע לארץ ישראל בתקופת המנדט הבריטי, ובהמשך התפתח לענף תחרותי ומאורגן. כיום איגוד האגרוף בישראל משמש גוף הגג של הענף, מארגן תחרויות ומסגרות לאומיות ובינלאומיות ומקדם את ההכנה האולימפית.</p><div className="mt-8 grid gap-4 md:grid-cols-3"><div className="rounded-2xl bg-white p-6 shadow-sm"><b className="text-3xl">1988</b><p className="mt-2 leading-7 text-stone-500">יעקב שמואל הגיע לרבע הגמר באולימפיאדת סיאול — הישג אולימפי בולט של ישראל באגרוף.</p></div><div className="rounded-2xl bg-white p-6 shadow-sm"><b className="text-3xl">2009</b><p className="mt-2 leading-7 text-stone-500">דן אהרונוב זכה במדליית כסף באליפות העולם לנוער, הישג היסטורי לאגרוף הישראלי.</p></div><div className="rounded-2xl bg-white p-6 shadow-sm"><b className="text-3xl">היום</b><p className="mt-2 leading-7 text-stone-500">הענף ממשיך לפעול דרך מועדונים, איגוד לאומי, נבחרות ומסגרות תחרותיות.</p></div></div></div></div></section>

      <section className="bg-[#c2410c] px-6 py-20 text-white"><div className="mx-auto max-w-6xl"><div className="max-w-3xl"><div className="text-sm font-black text-orange-100">04 · האגרוף באשקלון</div><h2 className="mt-3 text-4xl font-black">מסורת של אימון והתקדמות.</h2><p className="mt-6 text-lg leading-9 text-orange-50">במרכז הקהילתי וולדנברג ברחוב יעקב גרופר 15 מתקיימים אימוני אגרוף בהדרכת סרגיי צ'ומצ'נקו. הפעילות מיועדת לילדים ולמבוגרים ומחברת בין יסודות האגרוף, כושר, משמעת והתקדמות אישית.</p><a href="/boxing" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-black text-[#7c2d12]">לפרטי האימונים ←</a></div></div></section>

      <section className="px-6 py-20 text-center"><div className="mx-auto max-w-3xl"><div className="text-6xl">🥊</div><div className="mt-6 text-sm font-black text-[#c2410c]">05 · המסע ממשיך</div><h2 className="mt-3 text-4xl font-black">ההיסטוריה כבר נכתבה.<br />הסיבוב הבא שלכם.</h2><p className="mt-5 text-lg leading-8 text-stone-600">אגרוף מלמד להתמודד עם לחץ, להתמיד ולהמשיך קדימה. הדרך מתחילה באימון הראשון.</p><a href="/boxing" className="mt-8 inline-flex rounded-full bg-[#1c1917] px-8 py-4 font-black text-white">להכיר את האימונים באשקלון ←</a></div></section>
    </main>
  );
}

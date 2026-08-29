import Navbar from "../../Navbar";

const memorials = [
  {
    name: "יעקב עמיצור",
    text: "יעקב עמיצור ז״ל שימש מנהל מועדון הסיוף של מכבי רמת גן, וסייע בהקמת אגודת הסיוף באשקלון. לפי האתר המקורי, הקשר עם אוריאל בר יוסף והסיוע של משפחת עמיצור היו חלק מהתשתית להקמת האגודה בעיר. בשנת 1972 זכתה הפועל אשקלון באליפות הראשונה שלה בניצחון על מכבי רמת גן.",
  },
  {
    name: "עמינדב עפר",
    text: "עמינדב עופר ז״ל שימש כמנהל משרד הפנים באשקלון. אוריאל בר יוסף ז״ל, מאמן ומקים מועדון הסיוף בעיר, עבד במשרדו. בעקבות פעילותו של בנו צביקה במועדון, עמינדב נשאב לפעילות האגודה ושימש יו״ר שלה עד מעבר המשפחה לפתח תקווה.",
  },
  {
    name: "ערן גואטה וויקטור גואטה",
    text: "ערן גואטה היה סייף נבחרת ישראל וספורטאי מצטיין. לאחר שירותו הצבאי שב לספורט והדריך. בשנת 1995 נהרג בפיגוע בצומת בית ליד בעת שניסה לסייע לנפגעים. מאז התקיימה באגודה תחרות מסורתית לזכרו. אביו ויקטור היה מעורב בניהול האגודה וסייע לה רבות עד פטירתו.",
  },
  {
    name: "יוליאן איסקוביץ׳ אורלוב",
    text: "לפי הפרסום באתר העמותה ובמקור של התאחדות הסיוף הבינלאומית, יוליאן אורלוב היה אלוף ברית המועצות ברומח בשנים 1952 ו־1953, השתתף באולימפיאדת הלסינקי 1952, ובהמשך שימש מאמן ושופט באולימפיאדות נוספות. לאחר עלייתו לישראל ב־1991 המשיך לאמן, חי באשקלון ופעל לפיתוח סייפים עד גיל מבוגר מאוד.",
  },
];

export default function LegacyPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-[#17263d]">
      <Navbar />
      <section className="bg-[#102f47] px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 text-sm font-bold tracking-[0.2em] text-[#7ee7e5]">LEGACY • MORASHA</div>
          <h1 className="text-5xl font-black md:text-7xl">מורשת והנצחה</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-300">סיפורים, אנשים ואירועים שהשאירו חותם על הספורט ועל מועדוני הספורט באשקלון.</p>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            {memorials.map((item) => (
              <article key={item.name} className="rounded-[28px] bg-white p-8 shadow-md">
                <div className="mb-5 h-1 w-16 rounded-full bg-[#18b6b4]" />
                <h2 className="text-2xl font-black text-[#102f47]">{item.name}</h2>
                <p className="mt-5 leading-8 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-slate-500">יהי זכרם ברוך.</p>
        </div>
      </section>
    </main>
  );
}

import Navbar from "../../../Navbar";

const RAW = "https://raw.githubusercontent.com/nikolpatrik/hapoel-ashkelon/main/";

export default function MariaPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-[#17263d]">
      <Navbar />

      <section className="bg-gradient-to-br from-[#102f47] via-[#123c59] to-[#18b6b4] px-6 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[32px] bg-white/10 p-4 shadow-2xl backdrop-blur-sm">
            <img src={`${RAW}maria.jpeg`} alt="מריה מזינה" className="h-[430px] w-full rounded-[24px] object-cover object-top" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-[0.2em] text-[#7ee7e5]">FENCING COACH</div>
            <h1 className="mt-4 text-5xl font-black leading-tight md:text-6xl">מריה מזינה</h1>
            <p className="mt-4 text-xl font-bold text-[#7ee7e5]">מאמנת וסייפת אולימפית</p>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-200">סייפת ומאמנת אולימפית בעלת ניסיון של מעל 30 שנה. עלתה מרוסיה לישראל לפני כארבעה שנים, ומאז מלווה את בכירי הסייפים בעיר אשקלון בדרכם להישגים גבוהים ביותר בארץ ובעולם.</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold">
              <span className="rounded-full bg-white/10 px-5 py-3">ניסיון של מעל 30 שנה</span>
              <span className="rounded-full bg-white/10 px-5 py-3">ניסיון אולימפי</span>
              <span className="rounded-full bg-white/10 px-5 py-3">פיתוח ספורטאים הישגיים</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-md">
            <div className="text-sm font-bold text-[#18b6b4]">ניסיון מקצועי</div>
            <h2 className="mt-3 text-3xl font-black text-[#102f47]">קריירת אימון בישראל וברוסיה</h2>
            <p className="mt-5 leading-8 text-slate-600">לאחר סיום הקריירה כספורטאית, מריה עברה לעבודה כמאמנת. היא שימשה כמדריכה במועדון מכבי מוסקבה, שבו הייתה חברה מאז 1995, ובשנת 2015 שימשה כמאמנת נבחרת רוסיה בסיף חרב לנשים.</p>
          </div>
          <div className="rounded-3xl bg-[#102f47] p-8 text-white">
            <div className="text-sm font-bold text-[#7ee7e5]">הישגים והשפעה</div>
            <h2 className="mt-3 text-3xl font-black">קריירה בינלאומית עטורת הישגים</h2>
            <p className="mt-5 leading-8 text-slate-300">מריה היא אלופת אולימפית בתחרות הקבוצתית בסידני 2000 וזכתה במדליית ארד קבוצתית באטלנטה 1996. היא הייתה אלופת עולם קבוצתית בשנת 2001, זכתה במדליות ארד באליפויות העולם ב-1990 ביחידות וב-1990 וב-1991 בקבוצות, הייתה אלופת ברית המועצות ב-1990 ביחידות ובקבוצות, אלופת חבר המדינות ב-1992 ביחידות, אלופת רוסיה ב-1994 וב-2000, וזוכת גביע רוסיה בשנים 1993, 1995, 1996 ו-1999. בנוסף זכתה במדליות כסף באליפויות אירופה ב-1999 וב-2001 ובמדליית זהב במכביה 2001.</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 p-8 shadow-sm">
          <div className="text-sm font-bold text-[#18b6b4]">תחומי התמחות</div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["טכניקה וטקטיקה", "הכנה לתחרויות", "פיתוח ספורטאים מתחילת הדרך למקום הראשון", "ליווי ספורטאים הישגיים"].map((item) => (
              <div key={item} className="rounded-2xl bg-[#f5f7fa] p-5 text-center font-bold text-[#102f47]">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 text-center">
        <a href="/fencing" className="inline-flex rounded-full border-2 border-[#18b6b4] px-7 py-3 font-bold text-[#102f47]">חזרה לעמוד הסייף</a>
        <a href="/leave-details" className="mr-3 inline-flex rounded-full bg-[#18b6b4] px-7 py-3 font-bold text-white">הרשמה לאימון ניסיון</a>
      </section>
    </main>
  );
}

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
            <ul className="mt-5 list-disc space-y-3 pr-6 text-lg leading-8 text-slate-600">
              <li>מאמנת במועדון מכבי מוסקבה</li>
              <li><strong>מאמנת אישית של האלופה האולימפית טטיאנה לוגונובה</strong>, שזכתה בשתי מדליות זהב אולימפיות בתחרות הקבוצתית בדקר – בסידני 2000 ובאתונה 2004.</li>
              <li><strong>מאמנת נבחרת רוסיה בדקר לנשים</strong> בשנת 2015.</li>
              <li>שימשה <strong>מאמנת בכירה בנבחרות הצעירות של רוסיה בדקר לנשים</strong></li>
              <li><strong>מאמנת ראשית של נבחרת רוסיה לנערות בדקר</strong> באליפות העולם לקדטים ולנוער.</li>
              <li>הייתה מעורבת בעבודה עם ספורטאיות רוסיות בכירות, ובהן <strong>מרינה קסאייבה ופולינה קזמינה</strong>, שהופיעו בתחרויות עם מריה כחלק מצוות האימון.</li>
              <li>בשנת 2025 הייתה חלק מצוות האימון של נבחרת ישראל, שזכתה <strong>במדליית ארד בתחרות הקבוצתית</strong></li>
              <li>מחזיקה בתואר <strong>מאמנת מצטיינת של רוסיה</strong></li>
            </ul>
          </div>
          <div className="rounded-3xl bg-[#102f47] p-8 text-white">
            <div className="text-sm font-bold text-[#7ee7e5]">הישגים והשפעה</div>
            <h2 className="mt-3 text-3xl font-black">קריירה בינלאומית עטורת הישגים</h2>
            <ul className="mt-5 space-y-3 pr-6 text-lg leading-8 text-slate-300 list-disc">
              <li>אלופת ברית המועצות בסיף בדקר ב-1990, גם בתחרות האישית וגם בתחרות הקבוצתית — והיא הייתה האלופה הראשונה של ברית המועצות לנשים בדקר.</li>
              <li>סגנית אלופת ברית המועצות ברומח בקבוצה ב-1988 וב-1989.</li>
              <li>מדליית ארד באליפות העולם 1990 בתחרות האישית בדקר.</li>
              <li>מדליות ארד באליפויות העולם 1990 ו-1991 בתחרות הקבוצתית.</li>
              <li>מדליית ארד באליפות העולם 1992 בתחרות האישית.</li>
              <li>אלופת חבר המדינות (CIS) 1992 בתחרות האישית בדקר.</li>
              <li>אלופת רוסיה 1994 ו-2000, כאשר בשנת 2000 זכתה גם באליפות האישית וגם בקבוצתית.</li>
              <li>זוכת גביע רוסיה בשנים 1993, 1995, 1996 ו-1999.</li>
              <li>סגנית אלופת אירופה 1999 ו-2001.</li>
              <li>מדליית ארד באולימפיאדת אטלנטה 1996 בתחרות הקבוצתית בדקר.</li>
              <li>אלופה אולימפית בסידני 2000 בתחרות הקבוצתית בדקר.</li>
              <li>אלופת העולם 2001 בתחרות הקבוצתית בדקר.</li>
              <li>מדליית זהב במכביה 2001 בתחרות האישית בדקר.</li>
            </ul>
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

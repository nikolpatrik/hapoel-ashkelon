import Navbar from "../../../Navbar";

const RAW = "https://raw.githubusercontent.com/nikolpatrik/hapoel-ashkelon/main/";

export default function RomanPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-[#17263d]">
      <Navbar />

      <section className="bg-gradient-to-br from-[#102f47] via-[#123c59] to-[#18b6b4] px-6 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[32px] bg-white/10 p-4 shadow-2xl backdrop-blur-sm">
            <img src={`${RAW}roma.jpeg`} alt="רומן טרכטנברג" className="h-[430px] w-full rounded-[24px] object-cover object-top" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-[0.2em] text-[#7ee7e5]">FENCING COACH</div>
            <h1 className="mt-4 text-5xl font-black leading-tight md:text-6xl">רומן טרכטנברג</h1>
            <p className="mt-4 text-xl font-bold text-[#7ee7e5]">מאמן דקר</p>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-200">מאמן דקר בעל ניסיון של יותר משמונה שנים. בעברו סייף נבחרת ישראל בעל הישגים גבוהים, וכיום הוא מלווה סייפים צעירים ומתקדמים בדרך להתפתחות מקצועית ותחרותית.</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold">
              <span className="rounded-full bg-white/10 px-5 py-3">מעל 8 שנות ניסיון</span>
              <span className="rounded-full bg-white/10 px-5 py-3">סייף נבחרת ישראל לשעבר</span>
              <span className="rounded-full bg-white/10 px-5 py-3">התמחות בדקר</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-md">
            <div className="text-sm font-bold text-[#18b6b4]">ניסיון מקצועי</div>
            <h2 className="mt-3 text-3xl font-black text-[#102f47]">מהמסלול התחרותי לאימון</h2>
            <ul className="mt-5 space-y-4 leading-8 text-slate-600">
              <li>מאמן צעירי המועדון מזה 10 שנים</li>
              <li>מאמן אלופי ישראל בדקר גברים צעירים קבוצתי 2023</li>
              <li>מאמנו האישי של תמרי גולדין</li>
              <li>מאמן אלוף ישראל ילדים 2025</li>
              <li>מאמן אלוף ישראל ילדים 2026</li>
              <li>מאמן אלופי ישראל ילדים קבוצות 2026</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-[#102f47] p-8 text-white">
            <div className="text-sm font-bold text-[#7ee7e5]">הישגים והשפעה</div>
            <h2 className="mt-3 text-3xl font-black">פיתוח דור הסייפים הבא</h2>
            <ul className="mt-5 space-y-4 leading-8 text-slate-300">
              <li>מחזיק גביע המדינה 2010</li>
              <li>סגן אלוף ישראל 2011</li>
              <li>סגן מחזיק גביע המדינה 2011</li>
              <li>סייף נבחרת ישראל 2013</li>
              <li>חבר בסגל נבחרת ישראל 2015</li>
              <li>אלוף ישראל בדקר קבוצות 2018</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 p-8 shadow-sm">
          <div className="text-sm font-bold text-[#18b6b4]">תחומי התמחות</div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["דקר", "טקטיקה תחרותית", "פיתוח טכניקה", "הכנה לתחרויות"].map((item) => (
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

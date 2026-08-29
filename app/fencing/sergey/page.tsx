import Navbar from "../../../Navbar";

const RAW = "https://raw.githubusercontent.com/nikolpatrik/hapoel-ashkelon/main/";

export default function SergeyPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-[#17263d]">
      <Navbar />
      <section className="bg-gradient-to-br from-[#102f47] via-[#123c59] to-[#18b6b4] px-6 py-20 text-white md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] bg-white/10 p-4 shadow-2xl">
            <img src={`${RAW}sergey.jpeg`} alt="סרגיי מסלקוב" className="h-[430px] w-full rounded-[24px] object-cover object-top" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-[0.2em] text-[#7ee7e5]">FENCING COACH</div>
            <h1 className="mt-4 text-5xl font-black leading-tight md:text-6xl">סרגיי מסלקוב</h1>
            <p className="mt-4 text-xl font-bold text-[#7ee7e5]">מאמן חרב</p>
            <p className="mt-7 text-lg leading-9 text-slate-200">מאמן חרב בעל ניסיון של שנים ודור שני לסייפי חרב. תחת חסותו התאמן אלוף ישראל וסייפים בינלאומיים רבים.</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold">
              <span className="rounded-full bg-white/10 px-5 py-3">מאמן חרב</span>
              <span className="rounded-full bg-white/10 px-5 py-3">ניסיון רב שנים</span>
              <span className="rounded-full bg-white/10 px-5 py-3">הכנה תחרותית</span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-md">
            <div className="text-sm font-bold text-[#18b6b4]">ניסיון מקצועי</div>
            <h2 className="mt-3 text-3xl font-black text-[#102f47]">מסורת של מצוינות</h2>
            <p className="mt-5 leading-8 text-slate-600">סרגיי מביא לאימונים ידע מקצועי שעובר מדור לדור, עם דגש על יסודות חזקים, טכניקה, דיוק וחשיבה תחרותית.</p>
          </div>
          <div className="rounded-3xl bg-[#102f47] p-8 text-white">
            <div className="text-sm font-bold text-[#7ee7e5]">הישגים והשפעה</div>
            <h2 className="mt-3 text-3xl font-black">פיתוח סייפים הישגיים</h2>
            <p className="mt-5 leading-8 text-slate-300">ניסיונו של סרגיי מאפשר לספורטאים להתפתח מקצועית ולבנות בסיס נכון להתקדמות בזירה התחרותית.</p>
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl border border-slate-100 p-8 shadow-sm">
          <div className="text-sm font-bold text-[#18b6b4]">תחומי התמחות</div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {["חרב", "טכניקת סייף", "טקטיקה", "הכנה לתחרויות"].map((item) => (
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

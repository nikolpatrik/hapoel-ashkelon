import Navbar from "../../Navbar";

const RAW = "https://raw.githubusercontent.com/nikolpatrik/hapoel-ashkelon/main/";
const coaches = [
  {
    name: "סרגיי מסלקוב",
    role: "מאמן חרב",
    image: "sergey.jpeg",
    href: "/fencing/sergey",
    text: "מאמן חרב בעל ניסיון של שנים. דור שני לסייפי חרב; תחת חסותו התאמן אלוף ישראל וסייפים בינלאומיים רבים.",
  },
  {
    name: "מריה מזינה",
    role: "מאמנת וסייפת אולימפית",
    image: "maria.jpeg",
    href: "/fencing/maria",
    text: "סייפת ומאמנת אולימפית בעלת ניסיון של מעל 30 שנה. עלתה מרוסיה לישראל לפני כארבעה עשורים. תחת חסותה התאמנו סייפות אולימפיות ועולמיות רבות, ובהן שתי הסייפות הבכירות בישראל המגיעות מאשקלון.",
  },
  {
    name: "רומן טרכטנברג",
    role: "מאמן דקר",
    image: "roma.jpeg",
    href: "/fencing/roman",
    text: "מאמן דקר בעל ניסיון של יותר משמונה שנים. בעברו סייף נבחרת ישראל בעל הישגים גבוהים, ותחת חסותו גדלו כמה מהסייפים הבכירים בעיר אשקלון.",
  },
];

export default function FencingPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-[#17263d]">
      <Navbar />

      <section className="bg-gradient-to-br from-[#102f47] via-[#123c59] to-[#18b6b4] px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-6xl grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="mb-5 text-sm font-bold tracking-[0.2em] text-[#7ee7e5]">FENCING • סייף 🤺</div>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">סייף באשקלון</h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-200">מועדון סייף מקצועי המעניק לספורטאים צעירים ובוגרים הזדמנות להתפתח, להתקדם ולהגיע להישגים בארץ ובעולם.</p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-bold">
              <span className="rounded-full bg-white/10 px-5 py-3">ענף אולימפי</span>
              <span className="rounded-full bg-white/10 px-5 py-3">ילדים ובוגרים</span>
              <span className="rounded-full bg-white/10 px-5 py-3">תחרויות בארץ ובעולם</span>
            </div>
            <a href="/leave-details" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 font-bold text-[#102f47]">הרשמה לאימון ניסיון חינם</a>
          </div>
          <div className="rounded-[32px] bg-white/10 p-8 backdrop-blur-sm">
            <img src={`${RAW}fencing-logo.png`} alt="לוגו מועדון הסייף" className="mx-auto max-h-[420px] w-full object-contain" />
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="text-sm font-bold text-[#18b6b4]">על הענף</div>
            <h2 className="mt-3 text-4xl font-black text-[#102f47]">מה מפתח הסייף?</h2>
            <p className="mt-6 text-lg leading-9 text-slate-600">הסייף משלב מהירות, דיוק, חשיבה טקטית ורוח תחרותית. האימונים מפתחים ריכוז, קבלת החלטות, טכניקה, קואורדינציה, משמעת והתמדה.</p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["🎯", "ריכוז", "יכולת להישאר ממוקדים ולקבל החלטות במהירות."],
              ["⚡", "מהירות", "תגובה מהירה ותנועה מדויקת."],
              ["🧠", "חשיבה טקטית", "קריאת היריב וקבלת החלטות בזמן אמת."],
              ["🏆", "רוח תחרותית", "התמדה, ביטחון עצמי ושאיפה להישגים."],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-3xl bg-white p-7 shadow-md">
                <div className="text-3xl">{icon}</div><h3 className="mt-4 text-xl font-black text-[#102f47]">{title}</h3><p className="mt-2 leading-7 text-slate-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center"><div className="text-sm font-bold text-[#18b6b4]">THE COACHING TEAM</div><h2 className="mt-3 text-4xl font-black text-[#102f47]">צוות המאמנים</h2><p className="mt-4 text-slate-500">לחצו על מאמן או מאמנת כדי לקרוא פרטים נוספים.</p></div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {coaches.map((coach) => (
              <article key={coach.name} className="overflow-hidden rounded-3xl border border-slate-100 bg-[#f8fafc] shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="grid md:grid-cols-[180px_1fr]">
                  <div className="flex min-h-[210px] items-center justify-center bg-white p-4">
                    <img src={`${RAW}${coach.image}`} alt={coach.name} className="h-full max-h-[210px] w-full rounded-2xl object-cover object-top" />
                  </div>
                  <div className="p-7">
                    <h3 className="text-2xl font-black text-[#102f47]">{coach.name}</h3>
                    <div className="mt-2 font-bold text-[#18b6b4]">{coach.role}</div>
                    <p className="mt-5 leading-8 text-slate-600">{coach.text}</p>
                    <a href={coach.href} className="mt-6 inline-flex rounded-full bg-[#102f47] px-6 py-3 font-bold text-white transition hover:bg-[#18b6b4]">לפרופיל המלא ←</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-[#102f47] p-8 text-white"><div className="text-sm font-bold text-[#7ee7e5]">קבוצות וגילאים</div><h2 className="mt-3 text-3xl font-black">ילדים ובוגרים</h2><p className="mt-4 leading-8 text-slate-300">קבוצות לפי גיל ורמה, השתתפות בתחרויות מקומיות ובינלאומיות, ציוד מקצועי ומתחדש ואימונים לאורך כל השנה.</p></div>
          <div className="rounded-3xl bg-white p-8 shadow-md"><div className="text-sm font-bold text-[#18b6b4]">פעילות</div><h2 className="mt-3 text-3xl font-black text-[#102f47]">ימי ושעות פעילות</h2><p className="mt-4 leading-8 text-slate-600">מערכת השעות המדויקת טרם הוגדרה במסמך התוכן הזמין, ולכן לא הוכנסו שעות ללא אימות.</p><div className="mt-5 font-bold text-[#102f47]">📍 יעקב גרופר, אשקלון</div></div>
        </div>
      </section>

      <section className="bg-[#102f47] px-6 py-20 text-center text-white"><h2 className="text-4xl font-black">רוצים להתחיל?</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">פנו לניקול לקבלת פרטים והרשמה לאימון ניסיון חינם.</p><a href="https://wa.me/972526781740" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex rounded-full bg-[#18b6b4] px-8 py-4 font-bold">WhatsApp · ניקול</a></section>
    </main>
  );
}

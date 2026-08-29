import Navbar from "../../Navbar";

const RAW = "https://raw.githubusercontent.com/nikolpatrik/hapoel-ashkelon/main/";

export default function BoxingPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-[#17263d]">
      <Navbar />
      <section className="bg-gradient-to-br from-[#102f47] via-[#123c59] to-[#18b6b4] px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-5xl"><div className="mb-5 text-sm font-bold tracking-[0.2em] text-[#7ee7e5]">BOXING • אגרוף 🥊</div><h1 className="text-5xl font-black md:text-7xl">אגרוף באשקלון</h1><p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-slate-200">ענף ספורט המפתח כושר גופני, משמעת, ביטחון עצמי, נחישות ושליטה עצמית.</p><a href="/leave-details" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 font-bold text-[#102f47]">הרשמה לפעילות</a></div>
      </section>

      <section className="px-6 py-20 md:py-24"><div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2"><div><div className="text-sm font-bold text-[#18b6b4]">על הענף</div><h2 className="mt-3 text-4xl font-black text-[#102f47]">כוח. משמעת. נחישות.</h2><p className="mt-6 text-lg leading-9 text-slate-600">האגרוף הוא ענף המשלב עבודה גופנית ומנטלית. האימונים מחזקים כושר, משמעת וביטחון עצמי ומעודדים נחישות ושליטה עצמית.</p><p className="mt-5 text-lg leading-9 text-slate-600">עמוד הענף מיועד להציג את האימונים, הקבוצות והגילאים, צוות המאמנים, מערכת השעות, הגלריה וטופס ההרשמה.</p></div><div className="flex min-h-[360px] items-center justify-center rounded-[32px] bg-white p-8 shadow-xl"><img src={`${RAW}boxing-logo.png`} alt="לוגו אגרוף אשקלון" className="max-h-[360px] w-full object-contain" /></div></div></section>

      <section className="bg-white px-6 py-20"><div className="mx-auto max-w-6xl"><div className="text-center"><div className="text-sm font-bold text-[#18b6b4]">מה מחכה באימונים?</div><h2 className="mt-3 text-4xl font-black text-[#102f47]">פיתוח גוף ואופי</h2></div><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["💪","כושר גופני","חיזוק הגוף ושיפור היכולת הגופנית"],["🎯","משמעת","מסגרת שמפתחת התמדה ושליטה עצמית"],["🔥","נחישות","התמודדות עם אתגרים ושאיפה להתקדם"],["🧠","ביטחון עצמי","חיזוק הביטחון והיכולת האישית"]].map(([i,t,d])=><div key={t} className="rounded-3xl bg-[#f8fafc] p-7 shadow-sm"><div className="text-3xl">{i}</div><h3 className="mt-4 text-xl font-black text-[#102f47]">{t}</h3><p className="mt-2 leading-7 text-slate-500">{d}</p></div>)}</div></div></section>

      <section className="px-6 py-20"><div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2"><div className="rounded-3xl bg-[#102f47] p-8 text-white"><div className="text-sm font-bold text-[#7ee7e5]">מאמנים</div><h2 className="mt-3 text-3xl font-black">צוות המאמנים</h2><p className="mt-4 leading-8 text-slate-300">שמות ותיאורי מאמני האגרוף לא אומתו בחומרי הפרויקט הזמינים. לא נוסיף פרטים שאינם מאומתים.</p></div><div className="rounded-3xl bg-white p-8 shadow-md"><div className="text-sm font-bold text-[#18b6b4]">מערכת פעילות</div><h2 className="mt-3 text-3xl font-black text-[#102f47]">ימי ושעות פעילות</h2><p className="mt-4 leading-8 text-slate-600">הימים והשעות המדויקים טרם נמצאו בחומרי הפרויקט ולכן יתווספו לאחר אימות.</p></div></div></section>

      <section className="bg-[#102f47] px-6 py-20 text-center text-white"><h2 className="text-4xl font-black">רוצים להצטרף?</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">השאירו פרטים ונוכל לחזור אליכם עם מידע נוסף על הפעילות.</p><a href="/leave-details" className="mt-8 inline-flex rounded-full bg-[#18b6b4] px-8 py-4 font-bold">השאירו פרטים</a></section>
    </main>
  );
}

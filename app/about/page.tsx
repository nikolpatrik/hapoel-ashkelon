import Navbar from "../../Navbar";

const RAW = "https://raw.githubusercontent.com/nikolpatrik/hapoel-ashkelon/main/";

export default function AboutPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-[#17263d]">
      <Navbar />
      <section className="bg-gradient-to-br from-[#102f47] via-[#123c59] to-[#18b6b4] px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-5xl"><div className="mb-5 text-sm font-bold tracking-[0.2em] text-[#7ee7e5]">ABOUT • אודות</div><h1 className="text-5xl font-black md:text-7xl">העמותה לקידום הספורט באשקלון</h1><p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-200 md:text-xl">בית לספורטאים, למאמנים ולמועדוני ספורט בעיר אשקלון – עם חיבור בין פעילות מקומית, מצוינות ספורטיבית וייצוג העיר.</p></div>
      </section>
      <section className="px-6 py-20 md:py-28"><div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center"><div><span className="text-sm font-bold text-[#18b6b4]">מי אנחנו</span><h2 className="mt-3 text-4xl font-black text-[#102f47]">ספורט אשקלוני עם שאיפה למצוינות</h2><p className="mt-6 text-lg leading-9 text-slate-600">לפי האתר המקורי, העמותה היא הגוף המוכר על ידי הגופים המוסמכים בישראל ועל ידי עיריית אשקלון, ומפעילה מספר מועדוני ספורט בענפים שונים בעיר.</p><p className="mt-5 text-lg leading-9 text-slate-600">הספורטאים והקבוצות מייצגים את אשקלון. המצליחים שבהם מגיעים לנבחרות ישראל, וחלקם משתתפים באירועים בינלאומיים ובהישגים ברמה הגבוהה ביותר.</p></div><div className="rounded-[32px] bg-white p-8 shadow-xl"><img src={`${RAW}logo.png`} alt="לוגו העמותה לקידום הספורט באשקלון" className="mx-auto h-64 w-full object-contain" /></div></div></section>

      <section className="bg-white px-6 py-20"><div className="mx-auto max-w-6xl"><h2 className="text-center text-4xl font-black text-[#102f47]">ענפי הספורט הפעילים</h2><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["🤺","סייף","/fencing"],["🥊","אגרוף","/boxing"],["🏓","טניס שולחן","/table-tennis"],["🏉","רוגבי","/rugby"]].map(([icon,title,href]) => <a key={href} href={href} className="rounded-3xl bg-[#f5f7fa] p-7 text-center transition hover:-translate-y-1 hover:shadow-lg"><div className="text-4xl">{icon}</div><div className="mt-4 text-xl font-black text-[#102f47]">{title}</div></a>)}</div></div></section>

      <section className="px-6 py-20"><div className="mx-auto max-w-5xl rounded-[32px] bg-white p-8 shadow-xl md:p-12"><h2 className="text-3xl font-black text-[#102f47]">ענפים שהופיעו בארכיון האתר הישן</h2><p className="mt-4 leading-8 text-slate-600">באתר ההיסטורי של העמותה הופיעו לאורך השנים גם ענפים נוספים, ובהם טריאתלון, אתלטיקה קלה וקרב 5 מודרני. הם מוצגים כאן כמידע היסטורי ולא כהצהרה שהם פעילים כיום.</p><div className="mt-7 flex flex-wrap gap-3">{["טריאתלון","אתלטיקה קלה","קרב 5 מודרני"].map((item)=><span key={item} className="rounded-full bg-[#18b6b4]/10 px-5 py-3 font-bold text-[#0f7f80]">{item}</span>)}</div></div></section>

      <section className="px-6 py-20"><div className="mx-auto max-w-4xl rounded-[32px] bg-[#102f47] p-10 text-center text-white md:p-14"><h2 className="text-3xl font-black md:text-4xl">רוצים להצטרף לפעילות?</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">אפשר לבחור ענף ספורט ולהשאיר פרטים. נציג מהעמותה יחזור אליכם עם מידע נוסף.</p><a href="/leave-details" className="mt-8 inline-flex rounded-full bg-[#18b6b4] px-8 py-4 font-bold">השאירו פרטים</a></div></section>
    </main>
  );
}

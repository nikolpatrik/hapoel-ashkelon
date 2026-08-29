import Navbar from "../Navbar";

const RAW = "https://raw.githubusercontent.com/nikolpatrik/hapoel-ashkelon/main/";

const sports = [
  { title: "סייף", href: "/fencing", image: "fencing-logo.png", icon: "🤺", description: "אימונים, תחרויות ופיתוח ספורטאים צעירים במסגרת מקצועית." },
  { title: "אגרוף", href: "/boxing", image: "boxing-logo.png", icon: "🥊", description: "משמעת, כושר, ביטחון עצמי ומצוינות." },
  { title: "טניס שולחן", href: "/table-tennis", image: "logo.png", icon: "🏓", description: "ענף תחרותי ומהנה לכל הגילאים." },
  { title: "רוגבי", href: "/rugby", image: "logo-rugby.png", icon: "🏉", description: "עבודת צוות, כוח, התמדה ורוח ספורטיבית." },
];

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F5F7FA] text-[#17263d]">
      <Navbar />
      <section className="relative overflow-hidden bg-gradient-to-br from-[#102f47] via-[#123c59] to-[#18b6b4] text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[28px] border-white/10" />
        <div className="absolute -left-32 -top-20 h-80 w-80 rounded-full border-[28px] border-white/10" />
        <div className="absolute -bottom-48 left-1/3 h-96 w-96 rounded-full bg-[#18b6b4]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center md:py-36">
          <div className="mx-auto mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold">העמותה לקידום הספורט באשקלון</div>
          <h1 className="text-4xl font-black leading-tight md:text-7xl">ספורט באשקלון<br /><span className="text-[#7ee7e5]">בואו נתחיל לנצח</span></h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-slate-200 md:text-xl">מקדמים ספורט, מצוינות וקהילה באשקלון.<br />מחברים בין ספורטאים, מאמנים ומועדוני ספורט בעיר.</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href="#sports" className="inline-flex rounded-full bg-white px-8 py-4 font-bold text-[#102f47] transition hover:bg-slate-100">גלו את ענפי הספורט</a><a href="/leave-details" className="inline-flex rounded-full border border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20">שיעור ניסיון / הצטרפות</a></div>
        </div>
      </section>
      <section className="relative -mt-10 px-6"><div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3"><Stat value="4" label="ענפי ספורט פעילים" /><Stat value="אשקלון" label="ספורטאים שמייצגים את העיר" /><Stat value="מצוינות" label="קהילה • ספורט • הישגים" /></div></section>
      <section id="sports" className="px-6 py-24"><div className="mx-auto max-w-7xl"><div className="text-center"><span className="text-sm font-bold text-[#18b6b4]">OUR SPORTS</span><h2 className="mt-3 text-3xl font-black text-[#102f47] md:text-5xl">ענפי הספורט שלנו</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">בחרו את ענף הספורט שמעניין אתכם וקבלו את כל המידע על הפעילות, המאמנים והאימונים.</p></div><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{sports.map((sport) => (<a key={sport.href} href={sport.href} className="group overflow-hidden rounded-3xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"><div className="flex h-52 w-full items-center justify-center bg-[#f5f7fa] p-6"><img src={`${RAW}${sport.image}`} alt={sport.title} className="h-full w-full object-contain transition duration-300 group-hover:scale-105" /></div><div className="p-7"><div className="text-2xl">{sport.icon}</div><h3 className="mt-2 text-2xl font-black text-[#102f47]">{sport.title}</h3><p className="mt-3 leading-7 text-slate-500">{sport.description}</p><div className="mt-6 font-bold text-[#18b6b4]">למידע נוסף ←</div></div></a>))}</div></div></section>
      <section id="about" className="bg-[#102f47] px-6 py-24 text-white"><div className="mx-auto max-w-6xl text-center"><span className="text-sm font-bold text-[#7ee7e5]">מי אנחנו</span><h2 className="mt-3 text-3xl font-black md:text-5xl">גוף ספורט שמייצג את אשקלון</h2><p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-300">העמותה לקידום הספורט באשקלון פועלת לקידום מועדוני ספורט ופעילות ספורטיבית בעיר. הספורטאים והקבוצות מייצגים את אשקלון, והמצליחים שבהם מגיעים לנבחרות ישראל ולתחרויות בינלאומיות.</p><a href="/about" className="mt-8 inline-flex rounded-full border border-white/30 px-8 py-4 font-bold hover:bg-white/10">קראו עוד על העמותה</a></div></section>
      <section className="px-6 py-24"><div className="mx-auto max-w-6xl rounded-[32px] bg-white p-9 text-center shadow-xl md:p-14"><span className="text-sm font-bold text-[#18b6b4]">שותפינו</span><h2 className="mt-3 text-3xl font-black text-[#102f47]">תחנה לרפואת ספורט</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">שיתוף פעולה לקידום בריאות ובטיחות הספורטאים.</p></div></section>
      <section id="contact" className="px-6 pb-24"><div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-10 text-center shadow-xl md:p-16"><h2 className="text-3xl font-black text-[#102f47] md:text-4xl">רוצים להיות חלק?</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">רוצים להצטרף לפעילות, לשיעור ניסיון או לקבל מידע נוסף? השאירו פרטים או פנו אלינו ישירות.</p><div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"><a href="/leave-details" className="inline-flex rounded-full bg-[#18b6b4] px-8 py-4 font-bold text-white transition hover:bg-[#129da0]">השאירו פרטים</a><a href="https://wa.me/972526781740" target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border-2 border-[#18b6b4] px-8 py-4 font-bold text-[#102f47] transition hover:bg-[#18b6b4]/10">WhatsApp · ניקול</a></div><div className="mt-7 flex flex-col items-center gap-3 text-sm text-slate-500 sm:flex-row sm:justify-center sm:gap-8"><div><span>שרלי · </span><a href="tel:0504684686" className="font-bold text-[#18b6b4] hover:underline" dir="ltr">050-4684686</a></div><div><span>ניקול · </span><a href="tel:0526781740" className="font-bold text-[#18b6b4] hover:underline" dir="ltr">052-6781740</a><span className="mx-2">·</span><a href="https://wa.me/972526781740" target="_blank" rel="noopener noreferrer" className="font-bold text-[#18b6b4] hover:underline">WhatsApp</a></div></div></div></section>
      <footer className="bg-[#0b2234] px-6 py-10 text-center text-white"><div className="font-black">העמותה לקידום הספורט באשקלון</div><div className="mt-2 text-sm text-slate-400">ספורט. קהילה. מצוינות.</div><div className="mt-5 flex justify-center gap-5 text-sm text-slate-400"><a href="/legacy">מורשת והנצחה</a><a href="/join-terms">תנאי הצטרפות</a><a href="/english">English</a></div><div className="mt-5 text-xs text-slate-500">© {new Date().getFullYear()} כל הזכויות שמורות</div></footer>
    </main>
  );
}
function Stat({ value, label }: { value: string; label: string }) { return <div className="rounded-3xl bg-white p-8 text-center shadow-xl"><div className="text-4xl font-black text-[#18b6b4]">{value}</div><div className="mt-2 font-bold text-[#102f47]">{label}</div></div>; }

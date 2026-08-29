import Navbar from "../../Navbar";

const IMAGE = "https://raw.githubusercontent.com/nikolpatrik/hapoel-ashkelon/main/fencing-logo.png";

export default function FencingPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-[#17263d]">
      <Navbar />
      <section className="bg-gradient-to-br from-[#102f47] to-[#18b6b4] px-6 py-28 text-center text-white">
        <div className="mx-auto max-w-5xl"><div className="mb-6 text-sm font-bold tracking-[0.25em] text-[#7ee7e5]">FENCING • סייף 🤺</div><h1 className="text-5xl font-black md:text-7xl">סייף באשקלון</h1><p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-slate-200">אימוני סייף, תחרויות ופיתוח ספורטאים צעירים במסגרת מקצועית.</p><a href="/leave-details" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 font-bold text-[#102f47]">השאירו פרטים</a></div>
      </section>
      <section className="px-6 py-24"><div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2"><div><h2 className="text-4xl font-black text-[#102f47]">מועדון הסייף</h2><p className="mt-6 text-lg leading-9 text-slate-600">הסייף משלב מהירות, דיוק, חשיבה אסטרטגית ומשמעת. אנו מקדמים ספורטאים ומעניקים מסגרת מקצועית להתפתחות.</p></div><div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[32px] bg-white p-10 shadow-xl"><img src={IMAGE} alt="לוגו סייף" className="h-full w-full object-contain" /></div></div></section>
    </main>
  );
}

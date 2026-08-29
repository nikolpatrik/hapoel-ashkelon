import Navbar from "../../Navbar";

const IMAGE = "https://raw.githubusercontent.com/nikolpatrik/hapoel-ashkelon/main/logo.png";

export default function TableTennisPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-[#17263d]"><Navbar /><section className="bg-gradient-to-br from-[#102f47] to-[#18b6b4] px-6 py-28 text-center text-white"><div className="mx-auto max-w-5xl"><div className="mb-6 text-sm font-bold tracking-[0.25em] text-[#7ee7e5]">TABLE TENNIS • טניס שולחן 🏓</div><h1 className="text-5xl font-black md:text-7xl">טניס שולחן באשקלון</h1><p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-slate-200">ענף תחרותי ומהנה לכל הגילאים, עם דגש על טכניקה, מהירות והתמדה.</p><a href="/leave-details" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 font-bold text-[#102f47]">השאירו פרטים</a></div></section><section className="px-6 py-24"><div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2"><div><h2 className="text-4xl font-black text-[#102f47]">טניס שולחן</h2><p className="mt-6 text-lg leading-9 text-slate-600">אימונים המפתחים קואורדינציה, זריזות, ריכוז וחשיבה טקטית במסגרת ספורטיבית.</p><p className="mt-5 text-lg leading-9 text-slate-600">האתר הישן מציג את טניס השולחן כאחד מענפי הפעילות של העמותה. בנוסף, חומרי הארכיון באתר מתעדים הישגים של תלמידים וקבוצות מאשקלון בטניס שולחן במחוז דרום.</p></div><div className="relative flex h-[420px] items-center justify-center overflow-hidden rounded-[32px] bg-white p-10 shadow-xl"><img src={IMAGE} alt="לוגו העמותה" className="h-full w-full object-contain" /></div></div></section></main>
  );
}

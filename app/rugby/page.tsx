import Image from "next/image";
import Navbar from "../../Navbar";

export default function RugbyPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-[#17263d]"><Navbar /><section className="bg-gradient-to-br from-[#102f47] to-[#18b6b4] px-6 py-28 text-center text-white"><div className="mx-auto max-w-5xl"><div className="mb-6 text-sm font-bold tracking-[0.25em] text-[#7ee7e5]">RUGBY • רוגבי 🏉</div><h1 className="text-5xl font-black md:text-7xl">רוגבי באשקלון</h1><p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-slate-200">ספורט קבוצתי שמפתח כוח, התמדה, עבודת צוות ורוח ספורטיבית.</p><a href="/leave-details" className="mt-9 inline-flex rounded-full bg-white px-8 py-4 font-bold text-[#102f47]">השאירו פרטים</a></div></section><section className="px-6 py-24"><div className="mx-auto max-w-6xl grid items-center gap-12 md:grid-cols-2"><div><h2 className="text-4xl font-black text-[#102f47]">מועדון הרוגבי</h2><p className="mt-6 text-lg leading-9 text-slate-600">הרוגבי מחבר בין כושר, אסטרטגיה ועבודת צוות. הפעילות מיועדת למי שרוצה להתפתח בסביבה ספורטיבית וחברתית.</p></div><div className="relative h-[420px] overflow-hidden rounded-[32px] bg-white shadow-xl"><Image src="/logo-rugby.png" alt="לוגו רוגבי" fill className="object-contain p-10" /></div></div></section></main>
  );
}

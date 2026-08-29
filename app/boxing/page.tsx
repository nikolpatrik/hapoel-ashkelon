import Image from "next/image";
import Navbar from "../../Navbar";

export default function BoxingPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-[#17263d]">
      <Navbar />
      <section className="bg-gradient-to-br from-[#102f47] via-[#123c59] to-[#18b6b4] px-6 py-28 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 text-sm font-bold tracking-[0.25em] text-[#7ee7e5]">BOXING • איגרוף 🥊</div>
          <h1 className="text-5xl font-black md:text-7xl">איגרוף באשקלון</h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-slate-200">אימוני איגרוף מקצועיים לילדים ולבוגרים, עם מאמן מנוסה ורמה מקצועית גבוהה.</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="tel:0548033178" className="rounded-full border border-white/40 px-8 py-4 font-bold">📞 054-8033178</a>
            <a href="https://wa.me/972548033178" target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#18b6b4] px-8 py-4 font-bold">💬 מעבר ל-WhatsApp</a>
          </div>
        </div>
      </section>
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="relative h-[480px] overflow-hidden rounded-[32px] bg-white shadow-xl">
            <Image src="/sergey-box.jpeg" alt="מאמן איגרוף" fill className="object-cover object-[50%_35%]" />
          </div>
          <div>
            <div className="text-sm font-bold tracking-[0.25em] text-[#18b6b4]">OUR BOXING COACH</div>
            <h2 className="mt-3 text-4xl font-black text-[#102f47]">המאמן שלנו</h2>
            <h3 className="mt-8 text-3xl font-black text-[#102f47]">סרגיי צ׳ומצ׳נקו</h3>
            <p className="mt-6 text-lg leading-9 text-slate-600">סרגיי צ׳ומצ׳נקו מתאגרף בכיר בעברו וכיום בין המאמנים הטובים בארץ.</p>
            <p className="mt-5 text-lg leading-9 text-slate-600">ניסיון, מקצועיות ומסגרת אימונים שמאפשרים לכל מתאמן להתפתח, להתחזק ולהתקדם בעולם האיגרוף.</p>
          </div>
        </div>
      </section>
      <section className="bg-[#102f47] px-6 py-20 text-center text-white"><h2 className="text-4xl font-black">רוצים להצטרף?</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">לפרטים נוספים על קבוצות האימון ושעות האימונים, צרו איתנו קשר.</p><a href="/leave-details" className="mt-8 inline-flex rounded-full bg-[#18b6b4] px-8 py-4 font-bold">השאירו פרטים</a></section>
    </main>
  );
}

import Link from "next/link";
import Navbar from "../../../Navbar";

export default function LeaveDetailsSuccessPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-[#17263d]">
      <Navbar />
      <section className="flex min-h-[calc(100vh-90px)] items-center justify-center px-6 py-20">
        <div className="w-full max-w-2xl rounded-[32px] bg-white p-10 text-center shadow-xl ring-1 ring-slate-100 md:p-16">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#18b6b4]/10 text-5xl text-[#18b6b4]">✓</div>
          <div className="mt-7 text-sm font-bold tracking-[0.2em] text-[#18b6b4]">THANK YOU</div>
          <h1 className="mt-3 text-4xl font-black text-[#102f47] md:text-5xl">תודה רבה!</h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-8 text-slate-500">הפרטים התקבלו בהצלחה.<br />נציג מהעמותה יחזור אליכם בהקדם.</p>
          <Link href="/" className="mt-9 inline-flex rounded-full bg-[#18b6b4] px-9 py-4 font-bold text-white transition hover:bg-[#129da0]">חזרה לאתר</Link>
        </div>
      </section>
    </main>
  );
}

import Navbar from "../../Navbar";

export default function EnglishPage() {
  return (
    <main dir="ltr" className="min-h-screen bg-[#f5f7fa] text-[#17263d]">
      <Navbar />
      <section className="bg-gradient-to-br from-[#102f47] via-[#123c59] to-[#18b6b4] px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 text-sm font-bold tracking-[0.2em] text-[#7ee7e5]">ASHKELON SPORTS ASSOCIATION</div>
          <h1 className="text-5xl font-black md:text-7xl">Ashkelon Sports Association</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-200 md:text-xl">
            We are the governing body recognized by the relevant authorities in Israel and by the Municipality of Ashkelon, operating sports clubs in several disciplines in Ashkelon, Israel.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Rugby", "🏉", "/rugby"],
              ["Fencing", "🤺", "/fencing"],
              ["Boxing", "🥊", "/boxing"],
              ["Table Tennis", "🏓", "/table-tennis"],
            ].map(([title, icon, href]) => (
              <a key={href} href={href} className="rounded-3xl bg-white p-8 text-center shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                <div className="text-5xl">{icon}</div>
                <h2 className="mt-5 text-2xl font-black text-[#102f47]">{title}</h2>
              </a>
            ))}
          </div>

          <div className="mt-14 rounded-[32px] bg-white p-8 text-center shadow-xl md:p-12">
            <p className="text-lg leading-9 text-slate-600">
              Athletes and teams represent the city of Ashkelon. The most successful athletes compete for Israeli national teams, and some participate in international events and achieve results at the highest level.
            </p>
            <div className="mt-8 text-lg font-bold text-[#102f47]">ash.sports@gmail.com</div>
            <div className="mt-2 text-lg font-bold text-[#18b6b4]">+972-(0)50-4684686</div>
          </div>
        </div>
      </section>
    </main>
  );
}

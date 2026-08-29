import Link from "next/link";
import Navbar from "../Navbar";

export default function Home() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F5F7FA] text-[#17263d]">
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#102f47] via-[#123c59] to-[#18b6b4] text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border-[28px] border-white/10" />
        <div className="absolute -left-32 -top-20 h-80 w-80 rounded-full border-[28px] border-white/10" />
        <div className="absolute -bottom-48 left-1/3 h-96 w-96 rounded-full bg-[#18b6b4]/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 text-center md:py-36">
          <div className="mx-auto mb-6 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold backdrop-blur-sm">
            העמותה לקידום הספורט באשקלון
          </div>
          <h1 className="text-4xl font-black leading-tight md:text-7xl">
            ספורט באשקלון
            <br />
            <span className="text-[#7ee7e5]">מכאן מתחילים</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-9 text-slate-200 md:text-xl">
            מקדמים ספורט, מצוינות וקהילה באשקלון.
            <br />
            מחברים בין ספורטאים, מאמנים ומועדוני ספורט בעיר.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#sports" className="inline-flex rounded-full bg-white px-8 py-4 font-bold text-[#102f47] transition hover:bg-slate-100">
              גלו את ענפי הספורט
            </a>
            <Link href="/leave-details" className="inline-flex rounded-full border border-white/40 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/20">
              השאירו פרטים
            </Link>
          </div>
        </div>
      </section>

      <section className="relative -mt-10 px-6">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          <Stat value="10+" label="ענפי ספורט" />
          <Stat value="1000+" label="ספורטאים" />
          <Stat value="אשקלון" label="ספורט. קהילה. מצוינות." />
        </div>
      </section>

      <section id="sports" className="scroll-mt-28 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-bold text-[#18b6b4]">הענפים שלנו</span>
            <h2 className="mt-3 text-3xl font-black text-[#102f47] md:text-5xl">ספורט באשקלון</h2>
            <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">
              העמותה פועלת לקידום מגוון ענפי ספורט וליצירת הזדמנויות לילדים, בני נוער וספורטאים מכל רחבי אשקלון.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <SportCard href="/fencing" title="סייף" icon="🤺" description="אימונים, תחרויות ופיתוח ספורטאים צעירים." />
            <SportCard href="/boxing" title="אגרוף" icon="🥊" description="משמעת, כושר, ביטחון עצמי ומצוינות." />
            <SportCard href="/table-tennis" title="טניס שולחן" icon="🏓" description="ענף תחרותי ומהנה לכל הגילאים." />
            <SportCard href="/rugby" title="רוגבי" icon="🏉" description="עבודת צוות, כוח, התמדה ורוח ספורטיבית." />
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-28 bg-[#102f47] px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <span className="text-sm font-bold text-[#7ee7e5]">מי אנחנו</span>
          <h2 className="mt-3 text-3xl font-black md:text-5xl">בונים את דור הספורט הבא</h2>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-300">
            העמותה לקידום הספורט באשקלון פועלת כדי להנגיש את עולם הספורט לתושבי העיר, לקדם ספורטאים ומועדונים וליצור קהילה ספורטיבית חזקה, מקצועית ומגוונת.
          </p>
        </div>
      </section>

      <section id="contact" className="scroll-mt-28 px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-[2rem] bg-white p-10 text-center shadow-xl md:p-16">
          <h2 className="text-3xl font-black text-[#102f47] md:text-4xl">רוצים להיות חלק?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-500">
            רוצים להצטרף לפעילות, לשתף פעולה או לקבל מידע נוסף? אנחנו כאן בשבילכם.
          </p>
          <Link href="/leave-details" className="mt-8 inline-flex rounded-full bg-[#18b6b4] px-8 py-4 font-bold text-white transition hover:bg-[#129da0]">
            השאירו פרטים
          </Link>
        </div>
      </section>

      <footer className="bg-[#0b2234] px-6 py-10 text-center text-white">
        <div className="font-black">העמותה לקידום הספורט באשקלון</div>
        <div className="mt-2 text-sm text-slate-400">ספורט. קהילה. מצוינות.</div>
        <div className="mt-5 text-xs text-slate-500">© {new Date().getFullYear()} כל הזכויות שמורות</div>
      </footer>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
      <div className="text-4xl font-black text-[#18b6b4]">{value}</div>
      <div className="mt-2 font-bold text-[#102f47]">{label}</div>
    </div>
  );
}

function SportCard({ href, title, icon, description }: { href: string; title: string; icon: string; description: string }) {
  return (
    <Link href={href} className="group rounded-3xl bg-white p-7 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#18b6b4]/10 text-3xl">{icon}</div>
      <h3 className="mt-6 text-2xl font-black text-[#102f47]">{title}</h3>
      <p className="mt-3 leading-7 text-slate-500">{description}</p>
      <div className="mt-6 font-bold text-[#18b6b4]">לפרטים נוספים ←</div>
    </Link>
  );
}

import Navbar from "../../../Navbar";

const sergeyImage = "data:image/jpeg;base64,PLACEHOLDER";

export default function SergeyPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-[#17263d]">
      <Navbar />

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-sm font-bold text-[#18b6b4]">ראשי / ענפי ספורט / סייף / הצוות המקצועי</div>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="overflow-hidden rounded-[32px] bg-white p-5 shadow-xl">
              <img src={sergeyImage} alt="סרגיי מסלקוב" className="h-[520px] w-full rounded-[24px] object-cover" />
            </div>
            <div>
              <div className="text-lg font-bold text-[#18b6b4]">מאמן סיוף</div>
              <h1 className="mt-3 text-5xl font-black leading-tight text-[#102f47] md:text-6xl">סרגיי מסלקוב</h1>
              <div className="mt-5 h-1 w-16 rounded-full bg-[#18b6b4]" />
              <p className="mt-8 text-xl leading-9 text-slate-600">מאמן חרב בעל ניסיון של שנים, דור שני לסייפי חרב. תחת חסותו התאמן אלוף ישראל וסייפים בינלאומיים רבים.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["🏆", "ניסיון מקצועי", "ניסיון של שנים באימון סייפים."],
              ["🥇", "הישגים", "עבודה עם סייפים שהגיעו להישגים ברמות הגבוהות."],
              ["⚔️", "התמחות", "אימון חרב ופיתוח יכולות טכניות וטקטיות."],
            ].map(([icon, title, text]) => (
              <div key={title} className="rounded-3xl bg-[#f8fafc] p-7 text-center shadow-sm">
                <div className="text-4xl">{icon}</div>
                <h2 className="mt-4 text-xl font-black text-[#102f47]">{title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-md">
            <div className="text-sm font-bold text-[#18b6b4]">הישגים וניסיון</div>
            <h2 className="mt-3 text-3xl font-black text-[#102f47]">ניסיון באימון סייפים</h2>
            <p className="mt-5 leading-8 text-slate-600">סרגיי מסלקוב הוא דור שני לסייפי חרב, ובמהלך שנות פעילותו כמאמן ליווה סייפים ברמות שונות, כולל סייפים שהגיעו להישגים משמעותיים בתחרויות.</p>
          </div>
          <div className="rounded-3xl bg-[#102f47] p-8 text-white">
            <div className="text-sm font-bold text-[#7ee7e5]">ימי ושעות פעילות</div>
            <h2 className="mt-3 text-3xl font-black">האימונים במועדון הסייף</h2>
            <p className="mt-5 leading-8 text-slate-300">מערכת השעות המדויקת טרם הוגדרה במסמך התוכן הזמין, ולכן לא הוכנסו שעות ללא אימות.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#102f47] px-6 py-16 text-center text-white">
        <h2 className="text-4xl font-black">רוצים להתחיל?</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">פנו אלינו לקבלת פרטים והרשמה לאימון ניסיון.</p>
        <a href="/leave-details" className="mt-7 inline-flex rounded-full bg-[#18b6b4] px-8 py-4 font-bold">שיעור ניסיון / הצטרפות</a>
      </section>
    </main>
  );
}

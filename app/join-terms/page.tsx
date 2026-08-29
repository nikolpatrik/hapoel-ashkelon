import Navbar from "../../Navbar";

const terms = [
  "הפרטים שמסרתי בטופס ההצטרפות הינם פרטים מלאים ומדויקים.",
  "ברצוני להצטרף לפעילות בעמותה ובקבוצת הספורט, ובאמצעותה לאיגוד הלאומי ו/או הבינלאומי הרלוונטי.",
  "אני מקבל/ת עליי את תקנוני העמותה ואת תקנון איגוד הספורט הרלוונטי וההתאחדות הבינלאומית, ומתחייב/ת לפעול בהתאם להם.",
  "אני מבין/ה את הוראות הביטוח החלות על פעילות ספורט לפי חוק הספורט ואת הצורך במסירת המידע הנדרש לעמותה.",
  "אני מחויב/ת להליכים המשמעתיים והשיפוטיים לפי תקנון העמותה, חוק הספורט, תקנוני האיגוד הרלוונטי, תקנוני ההתאחדות העולמית וכל דין.",
  "אני מודע/ת לכך שבמסגרת הפעילות עשויים להצטלם תמונות וסרטונים לצורכי דיווח ופרסום הפעילות. בכל בקשה להסרת חומר שפורסם ויש לעמותה שליטה עליו, העמותה תפעל להסרתו.",
  "אני מסכים/ה להזמנת בדיקות רפואיות הנדרשות לפי חוק הספורט ולקבלת המידע הרלוונטי בשמי, כאשר המידע הרפואי אינו נגיש לציבור וישמש רק לצורך הנדרש בחוק.",
  "אני מתחייב/ת להודיע למנהלי העמותה מיד על שינוי העלול להשפיע על נתונים מרכזיים, לרבות שינוי מצב בריאותי או סטטוס לצורכי ביטוח ספורטאים.",
  "ידוע לי שנכונות ההצהרה היא תנאי לרישום או לחידוש רישום באיגוד, להוצאת כרטיס מתחרה ולהשתתפות באימונים ובתחרויות.",
  "אני מצהיר/ה שהאחריות לנכונות ההצהרה היא עליי, בכפוף לאחריות המתחייבת לפי חוק הספורט.",
  "אני מייפה/ה את כוחו של מנהל העמותה או בא כוחו לחתום בשמי על מסמכים הנוגעים לפעילות המועדון, כגון בדיקות רפואיות, רישום לאיגוד או לתחרות, ערעורים, מחנות אימון והעברות, בהתאם להצהרה ולדין.",
  "שחרור ומעבר בין אגודות ייעשו בהתאם לחוק הספורט ולתקנון האיגוד הרלוונטי.",
];

export default function JoinTermsPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#f5f7fa] text-[#17263d]">
      <Navbar />
      <section className="bg-gradient-to-br from-[#102f47] to-[#18b6b4] px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-5 text-sm font-bold tracking-[0.2em] text-[#7ee7e5]">JOINING TERMS</div>
          <h1 className="text-5xl font-black md:text-7xl">תנאי הצטרפות</h1>
          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-slate-200">העקרונות וההצהרות המופיעים באתר העמותה במסגרת תהליך ההצטרפות.</p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl rounded-[32px] bg-white p-7 shadow-xl md:p-12">
          <h2 className="text-3xl font-black text-[#102f47]">תנאי הרשמה</h2>
          <p className="mt-4 leading-8 text-slate-500">הנוסח המלא והמחייב הוא הנוסח הרשמי של העמותה והדין העדכני. העמוד הבא מציג את עיקרי התנאים שהופיעו באתר המקורי.</p>
          <ol className="mt-8 space-y-5">
            {terms.map((term, index) => (
              <li key={index} className="flex gap-4 rounded-2xl bg-[#f5f7fa] p-5 leading-8 text-slate-700">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#18b6b4] font-black text-white">{index + 1}</span>
                <span>{term}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-7 text-amber-900">
            לתהליך הצטרפות בפועל, יש להשלים את הטופס ולקבל מהעמותה את הנוסח והמסמכים העדכניים הרלוונטיים.
          </div>
          <a href="/leave-details" className="mt-8 inline-flex rounded-full bg-[#18b6b4] px-8 py-4 font-bold text-white">להשאיר פרטים</a>
        </div>
      </section>
    </main>
  );
}

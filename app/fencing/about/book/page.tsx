"use client";

import Link from "next/link";
import Navbar from "../../../../Navbar";

const chapters = [
  {
    title: "השורשים העתיקים",
    text: "הסייף צמח מתוך מסורות לחימה עתיקות. לאורך ההיסטוריה שימשו חרבות וכלי נשק גם להגנה וגם לאימון ולדו־קרב, ובהדרגה התפתחו שיטות מסודרות של לימוד חרב.",
  },
  {
    title: "מחרב לקרב ספורטיבי",
    text: "באירופה, ובעיקר בתקופת הרנסנס, בתי ספר לסייף הפכו את לימוד החרב למקצוע מובנה. עם השתנות הלחימה והופעת כלי הנשק המודרניים, הסייף עבר בהדרגה מאמנות לחימה לענף ספורט עם כללי בטיחות ותחרות.",
  },
  {
    title: "הדרך למשחקים האולימפיים",
    text: "בשנת 1896 נכלל הסייף בתוכנית המשחקים האולימפיים הראשונים של העת החדשה באתונה. בשנת 1900 נוסף הדקר, והענף המשיך להתפתח עם תחרויות נשים, תחרויות קבוצתיות וטכנולוגיה אלקטרונית לזיהוי פגיעות.",
  },
  {
    title: "הסייף מגיע לישראל",
    text: "הסייף החל להתפתח בארץ עוד לפני הקמת המדינה. בהמשך הוקמו אגודות ומועדונים, הגיעו מאמנים מאירופה ונבנתה תשתית תחרותית. בשנת 1960 השתתפו סייפים ישראלים לראשונה במשחקים האולימפיים ברומא.",
  },
  {
    title: "ישראל על הבמה העולמית",
    text: "לאורך השנים הגיעו סייפים ישראלים להישגים באליפויות עולם, אליפויות אירופה ובמשחקים האולימפיים. ההישגים הבולטים כוללים את ההישגים של אודי כרמי, לידיה חטואל, תומר אור ויובל פרייליך.",
  },
];

export default function FencingHistoryBook() {
  return (
    <main dir="rtl" className="page">
      <Navbar />
      <section className="book-hero">
        <Link href="/fencing/about" className="back">← חזרה לעמוד על הסייף</Link>
        <div className="eyebrow">THE HISTORY OF FENCING</div>
        <h1>מסע בהיסטוריה<br /><span>של הסייף</span></h1>
        <p>מהחרבות העתיקות ועד הזירה האולימפית — הסיפור של אחד מענפי הספורט העתיקים והמרתקים בעולם.</p>
      </section>

      <section className="book-wrap">
        <div className="book">
          <div className="cover">
            <div className="cover-mark">🤺</div>
            <div className="cover-small">THE HISTORY OF</div>
            <h2>FENCING</h2>
            <div className="cover-line" />
            <p>מסורת • ספורט • אולימפיאדה</p>
          </div>
          <div className="pages">
            {chapters.map((chapter, index) => (
              <article className="page-card" key={chapter.title}>
                <span className="page-number">{String(index + 1).padStart(2, "0")}</span>
                <div className="chapter-label">פרק {index + 1}</div>
                <h2>{chapter.title}</h2>
                <p>{chapter.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="end">
        <Link href="/fencing/about" className="cta">← לחזור לעמוד על הסייף</Link>
      </section>

      <style jsx>{`
        .page{min-height:100vh;background:#101a21;color:#17212a;font-family:Arial,sans-serif}
        .book-hero{padding:100px 24px 65px;text-align:center;color:#fff;background:radial-gradient(circle at 50% 20%,#29404d,#101a21 65%)}
        .back{position:absolute;right:28px;top:100px;color:#c8d5db;text-decoration:none;font-weight:700}.eyebrow{font-size:11px;letter-spacing:4px;color:#8fa6b3;font-weight:800;margin-bottom:24px}
        h1{font-size:clamp(52px,8vw,100px);line-height:.95;margin:0;letter-spacing:-4px}h1 span{color:#19bbb7} .book-hero p{max-width:620px;margin:30px auto 0;color:#bdcbd2;font-size:18px;line-height:1.8}
        .book-wrap{padding:60px 20px 100px;background:#0b1319}.book{width:min(1120px,100%);margin:auto;display:grid;grid-template-columns:360px 1fr;min-height:640px;box-shadow:0 35px 80px #0009;transform:perspective(1400px) rotateX(1deg)}
        .cover{background:linear-gradient(145deg,#18303a,#071015);color:#fff;padding:70px 45px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;border-right:5px solid #081015;box-shadow:inset -15px 0 30px #0006}.cover-mark{font-size:70px;margin-bottom:35px}.cover-small{font-size:10px;letter-spacing:4px;color:#8fa6b3}.cover h2{font-size:55px;letter-spacing:5px;margin:12px 0}.cover-line{width:70px;height:2px;background:#19bbb7;margin:8px 0 18px}.cover p{color:#aebdc5;font-size:13px}
        .pages{background:#e9e1d1;padding:30px;display:grid;grid-template-columns:1fr 1fr;gap:18px;position:relative}.pages:before{content:"";position:absolute;left:50%;top:18px;bottom:18px;width:2px;background:#c6bca8;box-shadow:0 0 12px #8c817055}.page-card{background:#f8f3e8;padding:35px 30px;min-height:250px;position:relative;box-shadow:0 5px 16px #6d625622;border:1px solid #ded3c0}.page-number{position:absolute;left:22px;top:18px;color:#a29a8c;font-size:12px}.chapter-label{font-size:10px;letter-spacing:2px;color:#19a6a4;font-weight:800;margin-bottom:15px}.page-card h2{font-size:28px;margin:0 0 18px}.page-card p{font-size:16px;line-height:1.9;color:#4d5b62;margin:0}
        .end{text-align:center;padding:60px 20px;background:#0b1319}.cta{display:inline-block;background:#19bbb7;color:#fff;text-decoration:none;padding:16px 25px;font-weight:800}
        @media(max-width:800px){.book{grid-template-columns:1fr}.cover{min-height:420px}.pages{grid-template-columns:1fr}.pages:before{display:none}.back{position:static;display:inline-block;margin-bottom:30px}.book-hero{padding-top:50px}}
      `}</style>
    </main>
  );
}

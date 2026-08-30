"use client";

import { useState } from "react";
import Navbar from "../../../Navbar";

const chapters = [
  { n: 1, title: "המקורות הקדומים" },
  { n: 2, title: "ימי הביניים והרנסנס" },
  { n: 3, title: "הולדת הסייף כספורט" },
  { n: 4, title: "הסייף האולימפי" },
  { n: 5, title: "הסייף מגיע לישראל" },
  { n: 6, title: "ההתבססות בישראל" },
  { n: 7, title: "הישגים ישראליים בולטים" },
  { n: 8, title: "הסייף כיום" },
];

const pages = [
  { chapter: 1, title: "המקורות הקדומים", subtitle: "שורשים של אלפי שנים", text: "שורשי הסייף נעוצים באומנויות הלחימה העתיקות, שבהן כלי נשק שימשו להגנה, ללחימה ולדו־קרב. עדויות ממצרים העתיקה מלמדות שכבר לפני יותר מ־3,000 שנה התקיימו אירועי לחימה מאורגנים בעלי אופי תחרותי.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Ancient%20Tahtib%20relief%20drawing.jpeg", imageAlt: "תיאור עתיק של לחימת מקלות במצרים" },
  { chapter: 1, title: "אמנות החרב באירופה", subtitle: "מהאמנות העתיקה אל המסורת האירופית", text: "במהלך הדורות התפתחה אמנות החרב באירופה. מורים לסייף כתבו ספרים, פיתחו שיטות לימוד והפכו את השליטה בחרב למערכת של טכניקה, תזמון, תנועה ומשמעת.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Edouard%20Eckman%20after%20Jacques%20Callot%2C%20Duel%20with%20Swords%2C%201621%2C%20NGA%2051365.jpg", imageAlt: "דו קרב סייף היסטורי" },
  { chapter: 2, title: "ימי הביניים והרנסנס", subtitle: "מהחרב בשדה הקרב אל בית הספר לסייף", text: "בימי הביניים החרב הייתה כלי לחימה מרכזי. בתקופת הרנסנס, ובעיקר במאות ה־16 וה־17, התפתחו בתי ספר מקצועיים לסייף, והידע עבר ממורים לתלמידים באמצעות תרגול מסודר של עמדות, צעדים, התקפות והגנות.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Historical%20fencing%20with%20single%20sword%20and%20buckler.jpg", imageAlt: "סייף היסטורי בסגנון חרב ומגן" },
  { chapter: 3, title: "הולדת הסייף כספורט", subtitle: "מהלחימה אל התחרות", text: "עם התפתחות כלי הנשק המודרניים ירדה חשיבות החרב בשדה הקרב. הסייף עבר שינוי: כלי אימון וציוד מגן אפשרו לתרגל ולבחון מיומנות בלי להפוך את הקרב לקרב אמיתי, ובהדרגה נוצרו חוקים ומסגרות תחרותיות.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Two%20men%20are%20practising%20their%20positions%20in%20fencing.%20Engraving.jpg", imageAlt: "איור היסטורי של אימון סייף" },
  { chapter: 4, title: "הסייף האולימפי", subtitle: "1896 ועד היום", text: "הסייף נכלל כבר במשחקים האולימפיים הראשונים של העת החדשה באתונה בשנת 1896. בפריז 1900 נוסף הדקר, ובמהלך המאה ה־20 התרחבו תחרויות הנשים והקבוצות. בשנת 1913 הוקמה הפדרציה הבינלאומית לסייף (FIE).", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fencing%20modern%20pentathlon.jpg", imageAlt: "סייף מודרני על המסלול" },
  { chapter: 5, title: "הסייף מגיע לישראל", subtitle: "הצעדים הראשונים", text: "בישראל החלה התפתחות מאורגנת של הסייף עוד לפני הקמת המדינה. בשנת 1958 יצאה נבחרת של אגודת הספורט האקדמית לתחרויות בפולין, ובשנת 1960 הופיעו סייפים ישראלים לראשונה במשחקים האולימפיים ברומא.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/2008%20Olympic%20Modern%20penthalton%20-%20fencing%20action.JPG", imageAlt: "תחרות סייף בזירה אולימפית" },
  { chapter: 6, title: "ההתבססות בישראל", subtitle: "מענף קטן לענף תחרותי", text: "עם השנים נפתחו מועדונים נוספים, הוכשרו מאמנים ונבנו מסגרות לילדים, לנוער ולבוגרים. הסייף הישראלי התרחב משלושת כלי הסייף והחל להופיע באופן קבוע באליפויות אירופה, אליפויות עולם, גביעי עולם ובמשחקים האולימפיים.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fencing%20modern%20pentathlon.jpg", imageAlt: "סייף תחרותי מודרני" },
  { chapter: 7, title: "הישגים ישראליים בולטים", subtitle: "ישראל על מפת הסייף העולמית", bullets: ["אודי כרמי – מקום 4 באליפות העולם ברומח בשנת 1987.", "לידיה חטואל – מקום 7 באליפות העולם ברומח בשנת 1991.", "תומר אור – אלוף עולם לנוער והשתתף באולימפיאדת בייג׳ינג 2008.", "יובל פרייליך – אלוף אירופה בדקר בשנת 2019, והישראלי הראשון שזכה באליפות אירופה לבוגרים."], image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fencing%20modern%20pentathlon.jpg", imageAlt: "תחרות סייף בינלאומית" },
  { chapter: 8, title: "הסייף כיום", subtitle: "מסורת, ספורט והתפתחות אישית", text: "הסייף המודרני משלב מסורת בת אלפי שנים עם מהירות, דיוק, חשיבה אסטרטגית ושליטה עצמית. הוא מפתח תגובה, קואורדינציה, שיווי משקל, ריכוז ומשמעת, ומאפשר לספורטאי להתקדם מהאימון הראשון ועד לתחרויות בארץ ובעולם.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fencing%20modern%20pentathlon.jpg", imageAlt: "סייף מודרני" },
];

export default function FencingHistoryBook() {
  const [spread, setSpread] = useState(0);
  const left = pages[spread * 2] ?? pages[0];
  const right = pages[spread * 2 + 1] ?? pages[1];
  const maxSpread = Math.ceil(pages.length / 2) - 1;

  const goToChapter = (chapter: number) => {
    const index = pages.findIndex((p) => p.chapter === chapter);
    setSpread(Math.floor(index / 2));
  };

  return (
    <main dir="rtl" className="book-page">
      <Navbar />
      <div className="book-stage">
        <aside className="contents-panel">
          <div className="contents-title">תוכן העניינים <span>☷</span></div>
          {chapters.map((chapter) => (
            <button key={chapter.n} onClick={() => goToChapter(chapter.n)} className={`chapter-link ${left.chapter === chapter.n || right.chapter === chapter.n ? "active" : ""}`}>
              <b>{chapter.n}.</b><span>{chapter.title}</span>
            </button>
          ))}
          <button className="back-button" onClick={() => (window.location.href = "/fencing")}><span>▤</span> חזרה<br />לעמוד הסייף</button>
        </aside>

        <section className="book-wrap" aria-label="ספר היסטוריית הסייף">
          <button className="page-arrow arrow-left" onClick={() => setSpread((s) => Math.max(0, s - 1))} disabled={spread === 0}>‹</button>
          <div className="book-shadow" />
          <div className="book-cover">
            <div className="book-pages">
              <Page page={left} pageNumber={spread * 2 + 2} />
              <div className="gutter" />
              <Page page={right} pageNumber={spread * 2 + 3} />
            </div>
          </div>
          <button className="page-arrow arrow-right" onClick={() => setSpread((s) => Math.min(maxSpread, s + 1))} disabled={spread === maxSpread}>›</button>
          <div className="reader-controls"><span>☷</span><span>{spread * 2 + 2}-{Math.min(pages.length + 1, spread * 2 + 3)} / 16</span><span>⌕</span><span>⛶</span></div>
        </section>
      </div>

      <style jsx>{`
        .book-page{min-height:100vh;background:radial-gradient(circle at 50% 20%,#17212b 0,#080f16 48%,#03070b 100%);color:#f6f0e4;font-family:Arial,sans-serif;overflow-x:hidden}
        .book-stage{min-height:calc(100vh - 74px);padding:42px 24px 80px;display:flex;align-items:center;justify-content:center;gap:28px;background:linear-gradient(90deg,rgba(0,0,0,.45),transparent 18%,transparent 82%,rgba(0,0,0,.5)),radial-gradient(circle at 50% 100%,#21160d,#090e13 68%)}
        .contents-panel{width:230px;flex:0 0 230px;background:linear-gradient(145deg,#101e29,#071018);border:1px solid #233848;border-radius:20px;padding:18px 12px;box-shadow:0 20px 50px #0009;align-self:center}
        .contents-title{font-size:20px;font-weight:800;padding:8px 10px 14px;display:flex;justify-content:space-between}.contents-title span{color:#18c7d2;font-size:28px}
        .chapter-link{width:100%;display:flex;gap:10px;align-items:center;text-align:right;color:#f4f6f7;background:none;border:0;border-top:1px solid #1e303d;padding:14px 10px;font-size:15px;cursor:pointer}.chapter-link b{font-size:17px}.chapter-link span{flex:1}.chapter-link.active{background:linear-gradient(90deg,#0e6776,#12515e);border-radius:8px;border-color:transparent;box-shadow:inset -4px 0 #25cbd4}.back-button{width:100%;margin-top:18px;padding:14px;border:1px solid #263c4b;border-radius:18px;background:#0b1822;color:#fff;font-size:15px;line-height:1.55;cursor:pointer}.back-button span{font-size:25px;margin-left:8px;color:#d8c7a4}
        .book-wrap{position:relative;width:min(1040px,calc(100vw - 330px));min-height:720px;display:flex;align-items:center;justify-content:center}.book-shadow{position:absolute;width:92%;height:84%;bottom:5%;background:#000;filter:blur(32px);opacity:.65;border-radius:50%}.book-cover{position:relative;width:96%;padding:28px;border-radius:24px;background:linear-gradient(145deg,#11151a,#27313a 30%,#0c1014 75%);box-shadow:0 35px 65px #000c,0 0 0 1px #39434a;transform:perspective(1800px) rotateX(1deg)}
        .book-pages{display:grid;grid-template-columns:1fr 1fr;position:relative;min-height:650px;border-radius:9px;overflow:hidden;background:#d8c6a3;box-shadow:inset 0 0 30px #4d321b66}.book-pages:before,.book-pages:after{content:"";position:absolute;top:0;bottom:0;width:22px;z-index:3;opacity:.5;background:repeating-linear-gradient(90deg,#8b6b43 0 2px,#f4e3c1 2px 4px)}.book-pages:before{left:0}.book-pages:after{right:0}.gutter{position:absolute;z-index:5;top:0;bottom:0;left:50%;width:34px;transform:translateX(-50%);background:linear-gradient(90deg,#8b6a43aa,#fff2 45%,#6d4c2eaa);filter:blur(1px);box-shadow:0 0 18px #4d321b88}
        .paper{position:relative;padding:30px 46px 34px;background:radial-gradient(circle at 50% 50%,#f4e7ca,#d9c6a0 92%);color:#2b2116;min-width:0}.paper:after{content:"";position:absolute;inset:10px;border:1px solid #a8895e33;pointer-events:none}.paper h2{font-family:Georgia,serif;color:#163a5a;font-size:31px;line-height:1.12;margin:0 0 10px;font-weight:800}.paper .chapter-label{text-align:center;font-size:14px;margin-bottom:15px;color:#7c5d32}.paper .subtitle{font-family:Georgia,serif;color:#8b5d27;font-weight:700;font-size:17px;margin:0 0 14px}.paper p{font-size:15px;line-height:1.75;margin:0 0 14px}.paper ul{margin:0;padding-right:20px}.paper li{font-size:14px;line-height:1.65;margin-bottom:7px}.paper img{display:block;width:100%;max-height:235px;object-fit:cover;border-radius:5px;margin:18px 0 12px;filter:sepia(.18) saturate(.8);box-shadow:0 7px 16px #50351d44}.page-number{position:absolute;bottom:11px;left:50%;transform:translateX(-50%);font-family:Georgia,serif;font-size:15px;color:#6f512a}.source{font-size:9px;color:#756047;text-align:center;margin-top:4px}
        .page-arrow{position:absolute;z-index:8;width:58px;height:58px;border-radius:50%;border:1px solid #526878;background:linear-gradient(145deg,#172b3b,#08131d);color:#fff;font-size:50px;line-height:40px;cursor:pointer;box-shadow:0 8px 25px #0009}.page-arrow:disabled{opacity:.25;cursor:default}.arrow-left{left:0}.arrow-right{right:0}.reader-controls{position:absolute;bottom:-20px;left:50%;transform:translateX(-50%);display:flex;gap:0;background:#0c1924eF;border:1px solid #334b5c;border-radius:25px;box-shadow:0 10px 30px #0009;overflow:hidden;direction:ltr}.reader-controls span{padding:11px 18px;border-left:1px solid #263b4a;font-size:16px}.reader-controls span:last-child{border-left:0}
        @media(max-width:900px){.book-stage{flex-direction:column;padding:20px 12px 70px}.contents-panel{width:min(700px,96vw);order:2}.book-wrap{width:98vw;min-height:520px}.book-cover{padding:12px}.book-pages{min-height:460px}.paper{padding:20px 24px}.paper h2{font-size:23px}.paper p,.paper li{font-size:12px}.paper img{max-height:150px}.page-arrow{width:44px;height:44px;font-size:38px}.arrow-left{left:-5px}.arrow-right{right:-5px}}
        @media(max-width:600px){.book-pages{min-height:520px}.book-pages{grid-template-columns:1fr}.gutter{display:none}.paper{display:none}.paper:first-child{display:block}.contents-panel{font-size:13px}.reader-controls{bottom:-16px}.reader-controls span{padding:9px 11px}}
      `}</style>
    </main>
  );
}

function Page({ page, pageNumber }: { page: typeof pages[number]; pageNumber: number }) {
  return <article className="paper">
    <div className="chapter-label">פרק {page.chapter}</div>
    <h2>{page.title}</h2>
    <div className="subtitle">{page.subtitle}</div>
    {page.text && <p>{page.text}</p>}
    {page.bullets && <ul>{page.bullets.map((b) => <li key={b}>{b}</li>)}</ul>}
    {page.image && <img src={page.image} alt={page.imageAlt} />}
    {page.image && <div className="source">איור/צילום: מקור ציבורי או ברישיון פתוח</div>}
    <div className="page-number">{pageNumber}</div>
  </article>;
}

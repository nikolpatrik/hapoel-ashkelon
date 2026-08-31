"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../../../Navbar";

const chapters = [
  ["1190 לפנה״ס", "התחרות הקדומה ביותר", "במצרים העתיקה מתועד אירוע לחימה מאורגן בימי רעמסס השלישי. המשתתפים השתמשו במקלות בעלי קצות הגנה, חלקם לבשו הגנת פנים, והאירוע כלל שופטים וקהל. זה אינו הסייף המודרני, אך הוא אחת העדויות הקדומות לרעיון של לחימה שהופכת לתחרות."],
  ["העת העתיקה", "יוון ורומא", "ביוון וברומא השימוש בכלי נשק הפך למיומנות שניתן ללמוד ולתרגל. אימוני נשק, תרגילי התקפה והגנה ומסגרות להכשרת לוחמים יצרו מסורת של הוראת לחימה — אחד השורשים הרחוקים של תרבות הסייף."],
  ["ימי הביניים", "חרב, אבירות ודו־קרב", "החרב הייתה חלק מרכזי מחיי האבירים והפכה גם לסמל של מעמד וכבוד. מורים ללחימה לימדו טכניקות מסודרות, ובחלק מאירופה התקיימו דו־קרבות משפטיים. בהדרגה נוצרו מסורות כתובות ומועברות של עבודת חרב."],
  ["מאות 15–16", "הרנסנס משנה הכול", "הרנסנס הביא פריחה של בתי ספר לסייף ושל ספרי לחימה. באיטליה פעלו מאסטרים כמו אכילה מרוצו וקמילו אגריפה, שתיארו בצורה שיטתית עבודת רגליים, קווים, מרחקים והתקפות. הסייף התחיל לקבל שפה מקצועית ומדויקת."],
  ["1553", "אגריפה והגאומטריה של החרב", "בחיבורו של קמילו אגריפה הוצגה החרב כחלק ממערכת של זוויות, קווים ותנועות חסכוניות. הרעיון שהסייף דורש הבנה של מרחב ותזמון, ולא רק כוח, הפך לחלק מרכזי בהתפתחות המקצוע."],
  ["המאה ה־17–18", "מהראפייר לפלורט", "כלי הנשק והדו־קרב השתנו. הראפייר הארוך פינה מקום לכלים קלים יותר, והפלורט בעל החוד המוגן שימש לאימון. כללי אימון הגבילו את אזורי הפגיעה ואת אופן ביצוע הדקירה, וכך התאפשרה תחרות בטוחה ומבוקרת יותר."],
  ["1763", "דומניקו אנג'לו", "דומניקו אנג'לו הקים בלונדון בית ספר לסייף והדגיש יציבה, עבודת רגליים, דיוק ושליטה. ספרו L'École des armes הפך לאחד מחיבורי הסייף המשפיעים באירופה ועזר להציג את הסייף גם כפעילות גופנית וחינוכית."],
  ["המאה ה־19", "מועדונים, חוקים ותחרויות", "הסייף התרחק עוד יותר מהדו־קרב המעשי. מועדונים ואיגודים לאומיים צמחו, ציוד המגן השתפר, ותחרויות קיבלו כללים ברורים יותר. הענף החל להתפתח מסורת של ספורט תחרותי בינלאומי ולא רק מקצוע של אנשי צבא ואצולה."],
  ["1896–1900", "הכניסה לאולימפיאדה", "הסייף נכלל כבר במשחקים האולימפיים הראשונים של העת החדשה באתונה ב־1896. בפריז 1900 הורחבה התוכנית והדקר נכנס אליה. מכאן התחיל הקשר הקבוע בין הסייף לבין המשחקים האולימפיים."],
  ["1913", "הקמת FIE", "ב־29 בנובמבר 1913 הוקמה בפריז הפדרציה הבינלאומית לסייף — FIE. גוף בינלאומי משותף אפשר למדינות לתאם חוקים, תחרויות וסטנדרטים, והענף קיבל מסגרת עולמית יציבה."],
  ["1924–2004", "הסייף נפתח לכולם", "נשים נכנסו לתוכנית האולימפית לראשונה ברומח בפריז 1924. בהמשך נוספו תחרויות קבוצתיות, דקר לנשים ב־1996 וחרב לנשים ב־2004. כך הפכה התוכנית האולימפית לשלמה יותר, והסייף התבסס כענף לנשים ולגברים."],
  ["1936 ואילך", "הטכנולוגיה נכנסת למסלול", "ב־1936 נעשה שימוש אולימפי במערכת חשמלית לזיהוי פגיעות בדקר. מערכות אלקטרוניות התפתחו מאז לכלי המרכזי בקביעת פגיעות, ובהמשך נוספו גם וידאו־ריפרינג ובדיקות ציוד מתקדמות."],
  ["1942–1958", "הסייף נבנה בישראל", "לפי איגוד הסיוף בישראל, הענף פעל בשנותיו הראשונות בעיקר בחיפה ובתל אביב. בשנת 1952 הוקם מועדון ברמת גן, ובשנות ה־50 הגיעו מאמנים מאירופה וסייעו לבניית תשתית מקצועית. בשנת 1958 יצאה נבחרת הסטודנטים של אס״א לפולין, צעד משמעותי בדרך להשתלבות בינלאומית."],
  ["1960–היום", "ישראל על הבמה העולמית", "ברומא 1960 השתתפו לראשונה סייפים ישראלים במשחקים האולימפיים. בעשורים הבאים התרחבו המועדונים, מערכי האימון והנבחרות, וסייפים ישראלים הגיעו להישגים באליפויות אירופה והעולם ובמשחקים האולימפיים."],
  ["היום", "הסיפור ממשיך", "מהדו־קרב העתיק ועד המסלול האלקטרוני המודרני, הסייף השתנה שוב ושוב — אך נשאר משחק של מרחק, תזמון, החלטה ואופי. בכל אימון ובכל תחרות הדור הבא מוסיף עוד עמוד לסיפור. אולי העמוד הבא יהיה שלך."],
];

export default function FencingHistoryBook() {
  const [page, setPage] = useState(0);
  const [turn, setTurn] = useState<"next" | "prev" | null>(null);

  const go = (direction: "next" | "prev") => {
    if (turn) return;
    const target = direction === "next" ? page + 1 : page - 1;
    if (target < 0 || target >= chapters.length) return;
    setTurn(direction);
    window.setTimeout(() => { setPage(target); setTurn(null); }, 720);
  };

  const chapter = chapters[page];
  const previous = page > 0 ? chapters[page - 1] : null;
  const next = page < chapters.length - 1 ? chapters[page + 1] : null;

  return (
    <main dir="rtl" className="page">
      <Navbar />
      <section className="hero">
        <Link href="/fencing/about" className="back">← חזרה לעמוד על הסייף</Link>
        <div className="eyebrow">THE HISTORY OF FENCING</div>
        <h1>מסע בהיסטוריה<br /><span>של הסייף</span></h1>
        <p>פתחו את הספר ודפדפו בין התחנות שעיצבו את אחד מענפי הספורט העתיקים בעולם.</p>
      </section>

      <section className="library">
        <div className="book" aria-label="ספר היסטוריה אינטראקטיבי">
          <div className="cover-edge" />
          <div className={`spread ${turn ? `is-${turn}` : ""}`}>
            <button className="click-zone left-zone" onClick={() => go("next")} aria-label="עמוד הבא" />
            <button className="click-zone right-zone" onClick={() => go("prev")} aria-label="עמוד קודם" />
            <article className="paper left-paper">
              <div className="chapter-label">הפרק הבא</div>
              {next ? <><h3>{next[1]}</h3><div className="mini-rule" /><p>{next[2]}</p><span className="date">{next[0]}</span></> : <><h3>סוף המסע</h3><div className="mini-rule" /><p>ההיסטוריה ממשיכה להיכתב בכל אולם ובכל סייף צעיר.</p></>}
              <span className="folio">{page * 2 + 2}</span>
            </article>
            <article className="paper right-paper">
              <div className="chapter-label">פרק {String(page + 1).padStart(2, "0")} · {chapter[0]}</div>
              <div className="ornament">✦</div>
              <h2>{chapter[1]}</h2>
              <div className="rule" />
              <p>{chapter[2]}</p>
              <span className="folio">{page * 2 + 1}</span>
            </article>
            <div className="page-turn" aria-hidden="true"><div className="turn-front" /><div className="turn-back" /></div>
            <div className="gutter" />
          </div>
        </div>

        <div className="controls">
          <button onClick={() => go("prev")} disabled={page === 0 || !!turn}>→ הקודם</button>
          <div className="counter"><strong>{page + 1}</strong> / {chapters.length}</div>
          <button onClick={() => go("next")} disabled={page === chapters.length - 1 || !!turn}>הבא ←</button>
        </div>
        <p className="hint">לחצו על פינות הספר או על הכפתורים כדי לדפדף</p>
      </section>

      <style jsx>{`
        .page{min-height:100vh;background:#0d151a;color:#20272b;font-family:Georgia,'Times New Roman',serif}.hero{padding:72px 24px 55px;text-align:center;color:#fff;background:radial-gradient(circle at 50% 10%,#304a57,#0d151a 68%);font-family:Arial,sans-serif}.back{display:inline-block;color:#cbd8dd;text-decoration:none;font-weight:700;margin-bottom:30px}.eyebrow{font-size:11px;letter-spacing:4px;color:#8ea8b5;font-weight:800;margin-bottom:18px}.hero h1{font-size:clamp(48px,7vw,86px);line-height:.96;letter-spacing:-4px;margin:0}.hero h1 span{color:#19bbb7}.hero p{max-width:650px;margin:22px auto 0;color:#c4d0d5;font-size:17px;line-height:1.8}
        .library{padding:70px 18px 95px;background:radial-gradient(circle at 50% 35%,#2b4049 0,#10191f 52%,#080d11 100%);min-height:750px}.book{width:min(1160px,100%);height:650px;margin:auto;position:relative;filter:drop-shadow(0 38px 35px #000c);perspective:2200px}.book:before{content:"";position:absolute;inset:-13px;border-radius:6px;background:linear-gradient(145deg,#211107,#704a2b 45%,#190b04);box-shadow:inset 0 0 0 4px #8b6037,inset 0 0 0 7px #291307}.cover-edge{position:absolute;inset:0 50% 0 0;background:linear-gradient(90deg,#241208,#4a2c18,#1b0c05);border-radius:4px 0 0 4px;z-index:0}.spread{position:absolute;inset:8px;display:grid;grid-template-columns:1fr 1fr;transform-style:preserve-3d;overflow:hidden;background:#d8ccb8}.paper{position:relative;overflow:hidden;padding:64px 70px 48px;background:linear-gradient(100deg,#e8ddca,#faf5e9 22%,#f2e8d6);box-shadow:inset 0 0 30px #6b5b451c;line-height:2}.paper:before{content:"";position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent 0 31px,#8c7c6518 32px);pointer-events:none}.right-paper{grid-column:2;border-right:1px solid #c8baa2}.left-paper{grid-column:1;border-left:1px solid #c8baa2}.chapter-label{position:relative;z-index:1;font-family:Arial,sans-serif;font-size:10px;letter-spacing:2px;color:#9a784e;font-weight:800;text-transform:uppercase;margin-bottom:18px}.ornament{position:relative;z-index:1;font-size:27px;color:#b18a59;margin-bottom:8px}.paper h2,.paper h3{position:relative;z-index:1;color:#202a2e;line-height:1.12;margin:0 0 20px}.paper h2{font-size:43px}.paper h3{font-size:31px;margin-top:90px}.paper p{position:relative;z-index:1;color:#505552;font-size:17px;line-height:2.05;margin:0}.rule,.mini-rule{position:relative;z-index:1;width:90px;height:2px;background:#b58a55;margin-bottom:23px}.mini-rule{width:65px}.date{position:absolute;z-index:1;bottom:74px;left:70px;font:12px Arial,sans-serif;color:#a17e51;letter-spacing:1px}.folio{position:absolute;bottom:18px;color:#9a8c78;font:12px Arial,sans-serif}.right-paper .folio{right:34px}.left-paper .folio{left:34px}.gutter{position:absolute;z-index:12;left:50%;top:0;bottom:0;width:24px;transform:translateX(-50%);background:linear-gradient(90deg,#a6967d,#f7edda 35%,#8e806b 65%,#dfd1b9);box-shadow:0 0 18px #0005;pointer-events:none}.click-zone{position:absolute;z-index:20;top:0;bottom:0;width:9%;background:transparent;border:0;cursor:pointer}.click-zone:hover{background:#ffffff08}.left-zone{left:0}.right-zone{right:0}
        .page-turn{position:absolute;z-index:15;inset:0 50% 0 0;transform-origin:right center;transform-style:preserve-3d;pointer-events:none;opacity:0}.is-next .page-turn{animation:turnNext .72s ease-in-out}.is-prev .page-turn{left:50%;right:0;transform-origin:left center;animation:turnPrev .72s ease-in-out}.turn-front,.turn-back{position:absolute;inset:0;background:linear-gradient(100deg,#e8ddca,#fff8ea);backface-visibility:hidden;box-shadow:0 0 25px #0004}.turn-back{transform:rotateY(180deg);background:linear-gradient(260deg,#e2d5c0,#faf2e2)}@keyframes turnNext{0%{opacity:1;transform:rotateY(0)}100%{opacity:1;transform:rotateY(-180deg)}}@keyframes turnPrev{0%{opacity:1;transform:rotateY(0)}100%{opacity:1;transform:rotateY(180deg)}}
        .controls{display:flex;align-items:center;justify-content:center;gap:30px;margin-top:38px;font-family:Arial,sans-serif}.controls button{border:1px solid #61747c;background:#18272e;color:#fff;padding:13px 26px;border-radius:3px;font-weight:800;cursor:pointer;min-width:120px;transition:.2s}.controls button:hover:not(:disabled){background:#24404b;transform:translateY(-1px)}.controls button:disabled{opacity:.3;cursor:not-allowed}.counter{color:#c4d0d4;min-width:70px;text-align:center}.counter strong{font-size:22px;color:#fff}.hint{text-align:center;color:#71838c;font:12px Arial,sans-serif;margin-top:15px}
        @media(max-width:760px){.hero{padding-top:45px}.book{height:600px}.spread{grid-template-columns:1fr}.left-paper{display:none}.right-paper{grid-column:1;border:0;padding:55px 35px}.gutter{display:none}.click-zone{width:14%}.right-paper h2{font-size:34px}.paper p{font-size:16px}.controls{gap:10px}.controls button{padding:11px 15px;min-width:95px}.date{left:35px}}
      `}</style>
    </main>
  );
}

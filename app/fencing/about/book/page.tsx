"use client";

import Link from "next/link";
import Navbar from "../../../../Navbar";

const chapters = [
  {
    title: "1190 לפנה״ס — תחרות עם מסכה ושופטים",
    text: "אחת העדויות הקדומות ביותר לסייף כתחרות מגיעה ממצרים העתיקה: תבליט במקדש מדינט האבו מתאר תחרות לחימה שאורגנה בימי רעמסס השלישי. המשתתפים השתמשו במקלות עם קצות הגנה, חלקם חבשו הגנת פנים, והאירוע כלל שופטים וקהל — שילוב מפתיע של בטיחות, תחרות וטקסיות שמזכיר את הספורט המודרני.",
  },
  {
    title: "יוון ורומא — החרב הופכת למיומנות נלמדת",
    text: "בעולם היווני התקיימה ההופלומכיה — לחימה בכלי נשק במסגרת אימון ותחרות. ברומא הפכה armatura לחלק מהכשרת החיילים, ומדריכי הנשק פיתחו שיטות לתרגול התקפה והגנה. גם כאשר המטרה הייתה צבאית, כבר נוצרה ההבנה שאפשר ללמד את השימוש בנשק כשיטה, ולא רק ככוח פיזי.",
  },
  {
    title: "ימי הביניים — חרב, כבוד ודו־קרב",
    text: "בימי הביניים הסייף היה חלק מחינוך האבירים ומאמנות הלחימה. בצרפת של המאות ה־12 וה־13 כבר פעלו מורים לסייף, וחלקם הכינו אנשים לדו־קרבות משפטיים. במשך מאות שנים החרב הייתה קשורה גם למעמד, לכבוד ולרעיון של משפט באמצעות דו־קרב — עד שהשיטות המשפטיות השתנו והדו־קרב הלך ונעלם.",
  },
  {
    title: "הרנסנס — לידתו של בית הספר לסייף",
    text: "במאות ה־15 וה־16 התרחש שינוי מכריע. המצאת אבק השריפה צמצמה את חשיבות השריון הכבד, וכלי הנשק נעשו קלים ומהירים יותר. באיטליה התפתחו בתי ספר מקצועיים לסייף, ומאסטרים כמו אכילה מרוצו, קמילו אגריפה ואחרים פרסמו ספרי לימוד שיטתיים. לראשונה הועבר ידע טכני של סייף בצורה מסודרת וכתובה.",
  },
  {
    title: "מהראפייר לפלורט — הספורט נעשה בטוח יותר",
    text: "במאות ה־17 וה־18 התפתח במיוחד הסייף הצרפתי. הרומח־הדק (rapier) הוחלף בהדרגה בחרב הקלה יותר, והפלורט (foil) שימש ככלי אימון ספורטיבי שתוכנן לתרגל דקירות במהירות ובבטיחות יחסית. כללים מוסכמים של התקפה והגנה הפכו את האימון והתחרות למובנים יותר.",
  },
  {
    title: "1763 — הסייף מקבל זהות ספורטיבית",
    text: "דומניקו אנג'לו, מאסטר איטלקי שפעל בלונדון, פתח בשנת 1763 בית ספר לסייף והדגיש לא רק את ההכנה לדו־קרב אלא גם את היתרונות הגופניים והחינוכיים של הספורט. ספרו L'École des armes הפך לאחד מספרי הסייף המשפיעים באירופה וסייע להפוך את הסייף למקצוע לימודי ולפעילות ספורטיבית של ממש.",
  },
  {
    title: "המאה ה־19 — כללים, מועדונים ותחרויות",
    text: "במאה ה־19 הסייף התרחק עוד יותר מהדו־קרב האמיתי והתקרב לספורט תחרותי. בתי ספר, מועדונים ואיגודים לאומיים התרחבו, שיטות ההוראה השתכללו ונוצר צורך בכללים אחידים. לקראת סוף המאה התקיימו תחרויות מסודרות, והסייף כבר היה ענף ספורט בינלאומי בעל זהות משלו.",
  },
  {
    title: "1896–1936 — הדרך לאולימפיאדה המודרנית",
    text: "הסייף היה בין הענפים שנכללו באולימפיאדת אתונה 1896. הדקר הצטרף בפריז 1900, תחרות קבוצתית הופיעה בתחילת המאה ה־20, ונשים נכנסו לראשונה לתוכנית האולימפית בפריז 1924 ברומח. בשנת 1936 הופעלה באולימפיאדה מערכת חשמלית לזיהוי פגיעות בדקר — צעד חשוב בדרך לסייף המודרני.",
  },
  {
    title: "1913 — נולד הגוף שמאחד את הענף",
    text: "ב־29 בנובמבר 1913, בקונגרס שנערך בפריז, הוכרזה הקמת הפדרציה הבינלאומית לסייף (FIE). בין המדינות המייסדות היו צרפת, בלגיה, גרמניה, בריטניה, איטליה, הולנד, הונגריה, נורבגיה וצ'כוסלובקיה. הקמת הפדרציה אפשרה לאחד חוקים ולבנות מסגרת בינלאומית יציבה לתחרויות.",
  },
  {
    title: "נשים, חשמל וטכנולוגיה — הספורט משתנה",
    text: "הכניסה של נשים לתחרויות הייתה הדרגתית: רומח לנשים הופיע באולימפיאדת 1924, תחרות קבוצתית לנשים ב־1960, דקר לנשים ב־1996 וחרב לנשים ב־2004. במקביל השתפרה מערכת הניקוד האלקטרונית, ובהמשך נוספו וידאו־ריפרינג וטכנולוגיות בקרה לציוד — כך שהספורט הפך מדויק ומהיר יותר גם מבחינה טכנולוגית.",
  },
  {
    title: "1942–1958 — הסייף הישראלי מתחיל להיבנות",
    text: "לפי איגוד הסיוף בישראל, בשנותיו הראשונות פעל הענף בעיקר בחיפה ובתל אביב ובמסגרת מועדונים קטנים. בשנת 1952 נפתח מועדון חדש ברמת גן ביוזמת האחים הדר ורן גרד והפך במהירות למרכז חשוב. בשנת 1958 יצאה נבחרת הסטודנטים של אס״א לפולין — אחת ההופעות הראשונות של ספורט ישראלי מעבר למסך הברזל והופעה בינלאומית ראשונה משמעותית של נבחרת סיוף ישראלית.",
  },
  {
    title: "1960 — ישראל מגיעה לאולימפיאדה",
    text: "ברומא 1960 הופיעו לראשונה סייפים ישראלים במשחקים האולימפיים. מיכאל רון ודוד ואן הלדר ייצגו את ישראל. ההשתתפות הזו סימנה מעבר חשוב: מענף שפעל בישראל במסגרות קטנות יחסית, הסייף הפך לענף שמכוון לבמה האולימפית.",
  },
  {
    title: "1965 והלאה — בניית תשתית ארצית",
    text: "ב־1965 מונה אמנון כרמי ליו״ר ועדת הסיוף. לפי איגוד הסיוף, תרומתו להתפשטות הענף הייתה משמעותית, ובשנות ה־60 המאוחרות נפתחו מועדונים ביישובים נוספים. בנו, אודי כרמי, המשיך את העשייה והיה מעורב בהקמת קורסים למאמנים. כך נוצרה בהדרגה תשתית של מועדונים, מאמנים וספורטאים ברחבי הארץ.",
  },
  {
    title: "הישגים ישראליים — דור אחר דור",
    text: "ההיסטוריה הישראלית כוללת שורה של הישגים בולטים: אודי כרמי הגיע למקום הרביעי באליפות העולם ברומח ב־1987; לידיה חטואל סיימה שביעית באליפות העולם ב־1991; תומר אור היה אלוף עולם לנוער, דורג בטופ 10 העולמי וזכה בשלושה גביעי עולם; דלילה חטואל זכתה במספר מדליות גביע עולם והגיעה פעמיים למקום השביעי באליפות אירופה; מאור חטואל זכה במקום השני באליפות אירופה לנוער ב־2005 ואורן בסל במקום השלישי באליפות העולם לנוער ב־2006.",
  },
  {
    title: "הסייף הישראלי היום",
    text: "ישראל ממשיכה להשתתף בזירה הבינלאומית ולשלוח סייפים למשחקים האולימפיים. לפי נתוני איגוד הסיוף, פועלים בישראל יותר מ־19 מועדונים, ממעלות בצפון ועד באר שבע בדרום. באולימפיאדת טוקיו 2020 ובפריז 2024 המשיכו סייפים ישראלים לייצג את המדינה; בפריז 2024 יובל פרייליך התחרה בדקר האישי.",
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
        <p>מהתחרות העתיקה במצרים, דרך בתי הספר של הרנסנס ועד האולימפיאדה והסיפור הישראלי — ההיסטוריה של הסייף היא סיפור של שינוי מתמיד.</p>
      </section>

      <section className="book-wrap">
        <div className="book">
          <div className="cover">
            <div className="cover-mark">🤺</div>
            <div className="cover-small">THE HISTORY OF</div>
            <h2>FENCING</h2>
            <div className="cover-line" />
            <p>חרב • מסורת • ספורט • אולימפיאדה</p>
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

      <section className="sources">
        <div className="sources-inner">
          <div className="section-label">מקורות עיקריים</div>
          <p>הפרקים מבוססים בעיקר על חומרי הפדרציה הבינלאומית לסייף (FIE) ועל ההיסטוריה הרשמית של איגוד הסיוף בישראל, בתוספת מקורות היסטוריים על התפתחות בתי הספר לסייף באירופה.</p>
        </div>
      </section>

      <section className="end">
        <Link href="/fencing/about" className="cta">← לחזור לעמוד על הסייף</Link>
      </section>

      <style jsx>{`
        .page{min-height:100vh;background:#101a21;color:#17212a;font-family:Arial,sans-serif}
        .book-hero{padding:100px 24px 65px;text-align:center;color:#fff;background:radial-gradient(circle at 50% 20%,#29404d,#101a21 65%)}
        .back{position:absolute;right:28px;top:100px;color:#c8d5db;text-decoration:none;font-weight:700}.eyebrow{font-size:11px;letter-spacing:4px;color:#8fa6b3;font-weight:800;margin-bottom:24px}
        h1{font-size:clamp(52px,8vw,100px);line-height:.95;margin:0;letter-spacing:-4px}h1 span{color:#19bbb7}.book-hero p{max-width:760px;margin:30px auto 0;color:#bdcbd2;font-size:18px;line-height:1.8}
        .book-wrap{padding:60px 20px 90px;background:#0b1319}.book{width:min(1120px,100%);margin:auto;display:grid;grid-template-columns:360px 1fr;min-height:760px;box-shadow:0 35px 80px #0009;transform:perspective(1400px) rotateX(1deg)}
        .cover{background:linear-gradient(145deg,#18303a,#071015);color:#fff;padding:70px 45px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;border-right:5px solid #081015;box-shadow:inset -15px 0 30px #0006;position:sticky;top:20px;height:760px}.cover-mark{font-size:70px;margin-bottom:35px}.cover-small{font-size:10px;letter-spacing:4px;color:#8fa6b3}.cover h2{font-size:55px;letter-spacing:5px;margin:12px 0}.cover-line{width:70px;height:2px;background:#19bbb7;margin:8px 0 18px}.cover p{color:#aebdc5;font-size:13px}
        .pages{background:#e9e1d1;padding:30px;display:grid;grid-template-columns:1fr 1fr;gap:18px;position:relative}.pages:before{content:"";position:absolute;left:50%;top:18px;bottom:18px;width:2px;background:#c6bca8;box-shadow:0 0 12px #8c817055}.page-card{background:#f8f3e8;padding:35px 30px;min-height:255px;position:relative;box-shadow:0 5px 16px #6d625622;border:1px solid #ded3c0}.page-number{position:absolute;left:22px;top:18px;color:#a29a8c;font-size:12px}.chapter-label{font-size:10px;letter-spacing:2px;color:#19a6a4;font-weight:800;margin-bottom:15px}.page-card h2{font-size:27px;line-height:1.2;margin:0 0 18px}.page-card p{font-size:15.5px;line-height:1.9;color:#4d5b62;margin:0}
        .sources{background:#101a21;color:#c8d5db;padding:50px 24px}.sources-inner{max-width:900px;margin:auto}.sources .section-label{color:#7f99a6;font-size:11px;letter-spacing:2px;font-weight:800;margin-bottom:14px}.sources p{line-height:1.8;margin:0;font-size:14px}
        .end{text-align:center;padding:60px 20px;background:#0b1319}.cta{display:inline-block;background:#19bbb7;color:#fff;text-decoration:none;padding:16px 25px;font-weight:800}
        @media(max-width:800px){.book{grid-template-columns:1fr}.cover{position:relative;top:auto;min-height:420px;height:auto}.pages{grid-template-columns:1fr}.pages:before{display:none}.back{position:static;display:inline-block;margin-bottom:30px}.book-hero{padding-top:50px}}
      `}</style>
    </main>
  );
}

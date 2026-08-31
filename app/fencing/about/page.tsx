"use client";

import Navbar from "../../../Navbar";

const weapons = [
  {
    title: "דקר",
    en: "Epee",
    desc: "כל הגוף הוא אזור מטרה. הדקר מדגיש מרחק, תזמון, סבלנות ודיוק.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fencing%20modern%20pentathlon.jpg",
    video: "https://im8kpseadmsqvxjd.private.blob.vercel-storage.com/fencing_2.mp4?vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfSW04S1BTRWFEbVNxdnhqRCIsIm93bmVySWQiOiJ0ZWFtX1h1bFNjSE9JYnRuOXF5SXo5ejNkWmFSbSIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCIseyJ2YWxpZFVudGlsIjoxNzg4MjIyODg3MzU4LCJpYXQiOjE3ODgxNzk2ODc0MzR9.pGtcwflcRvIe-y2-joCy6V9nmd4j-5FU5Pa9VFytt8&vercel-blob-signature=HyBeDzOgnMFTmwmefGyckcp4TgJ2fZ_ceO-Y3dTL9B8"
  },
  {
    title: "חרב",
    en: "Sabre",
    desc: "ההתמחות המהירה והדינמית ביותר, עם התקפות מתפרצות וקצב גבוה.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/2008%20Olympic%20Modern%20penthalton%20-%20fencing%20action.JPG",
    video: "https://im8kpseadmsqvxjd.private.blob.vercel-storage.com/fencing_3.mp4?vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfSW04S1BTRWFEbVNxdnhqRCIsIm93bmVySWQiOiJ0ZWFtX1h1bFNjSE9JYnRuOXF5SXo5ejNkWmFSbSIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzg4MjIyOTA5NDEzLCJpYXQiOjE3ODgxNzk3MDk0OTF9.M513j-BQr6hJ0gaGpKJ2_DgfqiLJ7IaPoC2eSloM6nc&vercel-blob-signature=tTGEO0nW6jwGZyOnlopmxQAAvty8VqHitetuPnw403E"
  },
  {
    title: "רומח",
    en: "Foil",
    desc: "משחק מדויק וטכני שבו נדרשים שליטה במרחק, תנועה וחשיבה טקטית.",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Two%20men%20are%20practising%20their%20positions%20in%20fencing.%20Engraving.jpg",
    video: "https://im8kpseadmsqvxjd.private.blob.vercel-storage.com/fencing_1.mp4?vercel-blob-valid-until=1788179694637&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfSW04S1BTRWFEbVNxdnhqRCIsIm93bmVySWQiOiJ0ZWFtX1h1bFNjSE9JYnRuOXF5SXo5ejNkWmFSbSIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCIseyJ2YWxpZFVudGlsIjoxNzg4MjIyMDU1OTQ2LCJpYXQiOjE3ODgxNzg4NTYwNjV9.A-vD8MdG_8a5-CRfONUYXaxqt78GVXUI12aYq4UXp9E&vercel-blob-signature=RuS4EmFW_uROpd3YNgBHwFvnpmviAxoiosshLtVrknM"
  },
];

const pillars = [
  { icon: "⚡", title: "מהירות תגובה", text: "זיהוי התנועה של היריב וקבלת החלטה בתוך שבריר שנייה." },
  { icon: "♟", title: "חשיבה טקטית", text: "כל קרב הוא משחק אסטרטגי של מרחק, תזמון, התקפה והגנה." },
  { icon: "◎", title: "דיוק ושליטה", text: "תנועה מדויקת, קואורדינציה ושליטה בגוף ובציוד." },
  { icon: "✦", title: "אופי ומשמעת", text: "התמדה, ריכוז, ביטחון עצמי וכבוד ליריב." },
];

const milestones = [
  { year: "3,000+", title: "שורשים עתיקים", text: "עדויות למצבי לחימה תחרותיים כבר במצרים העתיקה." },
  { year: "1896", title: "הופעה אולימפית", text: "הסייף נכלל במשחקים האולימפיים הראשונים של העת החדשה באתונה." },
  { year: "1913", title: "הקמת FIE", text: "הפדרציה הבינלאומית לסייף הוקמה והענף קיבל מסגרת בינלאומית מסודרת." },
  { year: "1960", title: "ישראל ברומא", text: "סייפים ישראלים השתתפו לראשונה במשחקים האולימפיים." },
];

const israel = [
  "אודי כרמי – מקום 4 באליפות העולם ברומח בשנת 1987.",
  "לידיה חטואל – מקום 7 באליפות העולם ברומח בשנת 1991.",
  "תומר אור – אלוף עולם לנוער והשתתף באולימפיאדת בייג׳ינג 2008.",
  "יובל פרייליך – אלוף אירופה בדקר בשנת 2019, והישראלי הראשון שזכה באליפות אירופה לבוגרים.",
];

export default function FencingAbout() {
  return (
    <main dir="rtl" className="page">
      <Navbar />

      <section className="hero">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <span className="eyebrow">FENCING · OLYMPIC SPORT</span>
          <h1>סייף</h1>
          <p className="hero-lead">מסורת בת אלפי שנים.<br />ספורט של מהירות, דיוק ומחשבה.</p>
          <p className="hero-copy">סייף הוא הרבה יותר מקרב בחרבות. זהו ענף אולימפי שבו הגוף והמוח עובדים יחד — קוראים את היריב, מקבלים החלטות ומגיבים בתוך שבריר שנייה.</p>
          <a className="history-btn" href="/fencing/about/book">לצאת למסע בהיסטוריה <span>←</span></a>
        </div>
        <div className="hero-badge"><span>3</span><small>התמחויות<br />אולימפיות</small></div>
      </section>

      <section className="intro section">
        <div className="section-label">01 · מהו סייף?</div>
        <div className="intro-grid">
          <div>
            <h2>קרב בין שני אנשים.<br /><em>משחק שחמט במהירות גבוהה.</em></h2>
          </div>
          <div className="intro-text">
            <p>הסייף המודרני מתקיים על מסלול ייעודי, בין שני ספורטאים המצוידים בביגוד מגן ובמערכת אלקטרונית המזהה פגיעות.</p>
            <p>בכל קרב הסייף צריך לקרוא את היריב, לשלוט במרחק, לבחור את הרגע הנכון ולשלב בין התקפה, הגנה ותנועה.</p>
          </div>
        </div>
      </section>

      <section className="weapons section dark-section">
        <div className="section-heading">
          <div><div className="section-label">02 · שלוש ההתמחויות</div><h2>שלוש דרכים <span>לסייף.</span></h2></div>
          <p>כל כלי מספר סיפור אחר — חוקים, קצב וסגנון משחק שונים.</p>
        </div>
        <div className="weapon-grid">
          {weapons.map((weapon) => (
            <article className="weapon-card" key={weapon.title} tabIndex={0}>
              <img className="weapon-image" src={weapon.image} alt={weapon.title} />
              <video className="weapon-video" src={weapon.video} muted loop playsInline preload="metadata" aria-hidden="true" />
              <div className="weapon-shade" />
              <div className="weapon-info"><span>{weapon.en}</span><h3>{weapon.title}</h3><p>{weapon.desc}</p></div>
              <div className="weapon-hint">הצביעו כדי לראות בפעולה</div>
            </article>
          ))}
        </div>
      </section>

      <section className="pillars section">
        <div className="section-label">03 · מה הסייף מפתח?</div>
        <h2>הגוף מתאמן.<br /><span>גם המוח.</span></h2>
        <div className="pillar-grid">
          {pillars.map((item) => <article key={item.title}><div className="pillar-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.text}</p></article>)}
        </div>
      </section>

      <section className="timeline section dark-section">
        <div className="section-heading"><div><div className="section-label">04 · מסע בזמן</div><h2>מהחרב העתיקה<br /><span>לזירה האולימפית.</span></h2></div><a className="small-book-btn" href="/fencing/about/book">לפתוח את הספר ההיסטורי →</a></div>
        <div className="timeline-grid">
          {milestones.map((m) => <article key={m.year}><strong>{m.year}</strong><div className="line" /><h3>{m.title}</h3><p>{m.text}</p></article>)}
        </div>
      </section>

      <section className="israel section">
        <div className="israel-image" />
        <div className="israel-content">
          <div className="section-label">05 · הסייף בישראל</div>
          <h2>מסורת שהפכה<br /><span>להישגים כחול־לבן.</span></h2>
          <p>הסייף בישראל התפתח לאורך עשרות שנים, ממועדונים קטנים ומאמנים שהביאו ידע מאירופה לענף תחרותי שמופיע על הבמות הגדולות בעולם.</p>
          <div className="achievements">{israel.map((item, i) => <div key={i}><b>{String(i + 1).padStart(2, "0")}</b><span>{item}</span></div>)}</div>
        </div>
      </section>

      <section className="closing section">
        <div className="closing-mark">🤺</div>
        <div className="section-label">06 · מעבר לספורט</div>
        <h2>מה שמתחיל<br /><span>במסכה ובחרב</span><br />נשאר גם מחוץ לאולם.</h2>
        <p>ריכוז. אומץ. משמעת. כבוד. הסייף נותן לספורטאי כלים לתחרות — וגם דרך להתפתח כאדם.</p>
        <a className="cta" href="/fencing">לגלות את הסייף באשקלון <span>←</span></a>
      </section>

      <style jsx>{`
        .page{background:#f4f0e8;color:#17212a;font-family:Arial,sans-serif;overflow:hidden}
        .hero{position:relative;min-height:720px;display:flex;align-items:center;color:#fff;background:#081018;isolation:isolate}
        .hero-image{position:absolute;inset:0;background-image:url('https://commons.wikimedia.org/wiki/Special:FilePath/2008%20Olympic%20Modern%20penthalton%20-%20fencing%20action.JPG');background-size:cover;background-position:center 38%;z-index:-3;filter:saturate(.8)}
        .hero-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,9,14,.96) 0%,rgba(3,9,14,.72) 38%,rgba(3,9,14,.2) 72%,rgba(3,9,14,.45) 100%),linear-gradient(0deg,rgba(3,9,14,.65),transparent 45%);z-index:-2}
        .hero-content{width:min(1160px,calc(100% - 48px));margin:auto;padding:110px 0 90px}
        .eyebrow,.section-label{font-size:12px;letter-spacing:2.5px;font-weight:800;color:#b7c9d5}
        .hero h1{font-size:clamp(82px,13vw,170px);line-height:.8;margin:24px 0 34px;font-weight:900;letter-spacing:-8px}
        .hero-lead{font-size:clamp(27px,3.2vw,44px);line-height:1.25;font-weight:800;margin:0 0 24px}
        .hero-copy{max-width:610px;font-size:18px;line-height:1.8;color:#e2e8eb;margin-bottom:36px}
        .history-btn,.cta,.small-book-btn{display:inline-flex;align-items:center;gap:22px;text-decoration:none;font-weight:800;transition:.25s}
        .history-btn{background:#fff;color:#101920;padding:17px 23px;border-radius:3px}.history-btn:hover,.cta:hover,.small-book-btn:hover{transform:translateX(-4px)}
        .hero-badge{position:absolute;left:40px;bottom:42px;border:1px solid #ffffff55;padding:16px 20px;display:flex;align-items:center;gap:13px;backdrop-filter:blur(5px)}
        .hero-badge span{font-size:42px;font-weight:900}.hero-badge small{font-size:11px;line-height:1.5}
        .section{padding:110px max(24px,calc((100% - 1160px)/2))}.intro{background:#f4f0e8}.section-label{color:#768894;margin-bottom:30px}.intro-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:80px}.intro h2,.section-heading h2,.pillars>h2,.israel h2,.closing h2{font-size:clamp(42px,5vw,70px);line-height:1.04;margin:0;letter-spacing:-2.5px}.intro h2 em{font-style:normal;color:#71818a}.intro-text{font-size:20px;line-height:1.9;color:#53616a;padding-top:8px}.intro-text p{margin:0 0 22px}
        .dark-section{background:#0a141c;color:#f5f1e8}.weapons{padding-top:95px}.section-heading{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:48px}.section-heading h2 span,.pillars>h2 span,.israel h2 span,.closing h2 span{color:#aabcc5}.section-heading>p{max-width:340px;color:#8fa1aa;line-height:1.7}.weapon-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.weapon-card{position:relative;height:510px;overflow:hidden;background:#14212a;border-radius:3px;outline:none;cursor:pointer}.weapon-image,.weapon-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.weapon-image{filter:grayscale(.25);transition:opacity .45s ease,transform .7s cubic-bezier(.2,.7,.2,1)}.weapon-video{opacity:0;transition:opacity .5s ease;pointer-events:none}.weapon-card:hover .weapon-image,.weapon-card:focus-visible .weapon-image{opacity:.12;transform:scale(1.04)}.weapon-card:hover .weapon-video,.weapon-card:focus-visible .weapon-video{opacity:1}.weapon-shade{position:absolute;inset:0;background:linear-gradient(0deg,rgba(3,8,12,.96),rgba(3,8,12,.18) 62%,rgba(3,8,12,.18));transition:background .45s ease}.weapon-card:hover .weapon-shade,.weapon-card:focus-visible .weapon-shade{background:linear-gradient(0deg,rgba(3,8,12,.92),rgba(3,8,12,.28) 68%,rgba(3,8,12,.22))}.weapon-info{position:absolute;right:25px;left:25px;bottom:25px;z-index:2;transition:transform .45s ease}.weapon-card:hover .weapon-info,.weapon-card:focus-visible .weapon-info{transform:translateY(-4px)}.weapon-info>span{font-size:11px;letter-spacing:2px;color:#a9bdc8}.weapon-info h3{font-size:48px;margin:5px 0 10px}.weapon-info p{font-size:15px;line-height:1.65;color:#d1dadd;margin:0}.weapon-hint{position:absolute;z-index:3;top:22px;right:22px;padding:8px 11px;border:1px solid #ffffff30;border-radius:999px;background:#06101788;color:#e8eef0;font-size:11px;opacity:0;transform:translateY(-6px);transition:.35s;backdrop-filter:blur(5px)}.weapon-card:hover .weapon-hint,.weapon-card:focus-visible .weapon-hint{opacity:1;transform:translateY(0)}
        .pillars{background:#e8e2d7}.pillars>h2{margin-bottom:55px}.pillar-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.pillar-grid article{border-top:1px solid #aab1b1;padding-top:20px}.pillar-icon{font-size:30px;margin-bottom:25px}.pillar-grid h3{font-size:20px;margin:0 0 12px}.pillar-grid p{font-size:15px;line-height:1.7;color:#667178;margin:0}
        .timeline{padding-bottom:120px}.small-book-btn{color:#fff;border:1px solid #50616b;padding:13px 17px;font-size:14px}.timeline-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}.timeline-grid article{position:relative}.timeline-grid strong{font-size:38px;color:#d9e4e8}.timeline-grid .line{height:1px;background:#43545d;margin:22px 0}.timeline-grid h3{font-size:22px;margin:0 0 12px}.timeline-grid p{font-size:15px;line-height:1.7;color:#9eabb1;margin:0}
        .israel{position:relative;background:#ddd7cb;display:grid;grid-template-columns:.9fr 1.1fr;gap:90px;align-items:center}.israel-image{min-height:560px;background-image:linear-gradient(rgba(10,20,26,.05),rgba(10,20,26,.15)),url('https://commons.wikimedia.org/wiki/Special:FilePath/Fencing%20modern%20pentathlon.jpg');background-size:cover;background-position:center;border-radius:2px;box-shadow:0 30px 70px #27313b22}.israel-content>p{font-size:18px;line-height:1.8;color:#5e686d;max-width:620px}.achievements{margin-top:35px;border-top:1px solid #b0aaa0}.achievements div{display:grid;grid-template-columns:45px 1fr;gap:15px;padding:17px 0;border-bottom:1px solid #b0aaa0;font-size:15px;line-height:1.65}.achievements b{color:#81919a}
        .closing{text-align:center;background:#101b23;color:#f4f0e8;padding-top:125px;padding-bottom:135px}.closing-mark{font-size:48px;margin-bottom:20px}.closing .section-label{color:#8fa4af}.closing h2{margin:auto;max-width:800px}.closing>p{max-width:600px;margin:30px auto 36px;color:#9eabb1;font-size:18px;line-height:1.8}.cta{background:#f4f0e8;color:#152029;padding:16px 22px}
        @media(max-width:900px){.intro-grid,.israel{grid-template-columns:1fr;gap:40px}.weapon-grid{grid-template-columns:1fr}.weapon-card{height:420px}.pillar-grid,.timeline-grid{grid-template-columns:1fr 1fr}.section-heading{align-items:start;flex-direction:column}.israel-image{min-height:360px}.hero{min-height:680px}}
        @media(max-width:600px){.section{padding:75px 20px}.hero-content{width:calc(100% - 40px);padding:90px 0 70px}.hero h1{letter-spacing:-5px}.hero-badge{left:20px;bottom:20px}.pillar-grid,.timeline-grid{grid-template-columns:1fr}.weapon-card{height:390px}.intro h2,.section-heading h2,.pillars>h2,.israel h2,.closing h2{font-size:42px}.hero-copy{font-size:16px}.weapon-hint{opacity:1;transform:none}}
      `}</style>
    </main>
  );
}

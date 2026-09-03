"use client";

import { useEffect, useRef } from "react";
import Navbar from "../../../Navbar";

const weapons = [
  { title: "דקר", en: "Epee", desc: "כל הגוף הוא אזור מטרה. הדקר מדגיש מרחק, תזמון, סבלנות ודיוק.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Fencing%20modern%20pentathlon.jpg", video: "/api/fencing-video?pathname=fencing_2.mp4" },
  { title: "חרב", en: "Sabre", desc: "ההתמחות המהירה והדינמית ביותר, עם התקפות מתפרצות וקצב גבוה.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/2008%20Olympic%20Modern%20penthalton%20-%20fencing%20action.JPG", video: "/api/fencing-video?pathname=fencing_3.mp4" },
  { title: "רומח", en: "Foil", desc: "משחק מדויק וטכני שבו נדרשים שליטה במרחק, תנועה וחשיבה טקטית.", image: "https://commons.wikimedia.org/wiki/Special:FilePath/Two%20men%20are%20practising%20their%20positions%20in%20fencing.%20Engraving.jpg", video: "/api/fencing-video?pathname=fencing_1.mp4" }
];

const pillars = [
  ["⚡", "מהירות תגובה", "זיהוי התנועה של היריב וקבלת החלטה בתוך שבריר שנייה."],
  ["♟", "חשיבה טקטית", "כל קרב הוא משחק אסטרטגי של מרחק, תזמון, התקפה והגנה."],
  ["◎", "דיוק ושליטה", "תנועה מדויקת, קואורדינציה ושליטה בגוף ובציוד."],
  ["✦", "אופי ומשמעת", "התמדה, ריכוז, ביטחון עצמי וכבוד ליריב."]
];

const milestones = [
  ["1190 לפנה״ס", "שורשים עתיקים", "תבליט ממצרים העתיקה מתאר תחרות מאורגנת עם כלי נשק ואמצעי הגנה."],
  ["1896", "הופעה אולימפית", "הסייף נכלל במשחקים האולימפיים הראשונים של העת החדשה באתונה."],
  ["1913", "הקמת FIE", "הפדרציה הבינלאומית לסייף הוקמה בפריז ויצרה מסגרת בינלאומית לענף."],
  ["1960", "ישראל ברומא", "סייפים ישראלים השתתפו לראשונה במשחקים האולימפיים ברומא."]
];

const israel = [
  "אודי כרמי – מקום 4 באליפות העולם ברומח בשנת 1987.",
  "לידיה חטואל – מקום 7 באליפות העולם ברומח בשנת 1991.",
  "תומר אור – אלוף עולם לנוער והשתתף באולימפיאדת בייג׳ינג 2008.",
  "יובל פרייליך – אלוף אירופה בדקר בשנת 2019."
];

function WeaponVideo({ weapon }: { weapon: typeof weapons[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    void video.play().catch(() => {});
  };

  const stop = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mobileQuery = window.matchMedia("(hover: none), (pointer: coarse)");
    if (!mobileQuery.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) play();
        else stop();
      },
      { threshold: [0.25, 0.55, 0.8] }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={videoRef}
      className="weapon-video"
      src={weapon.video}
      poster={weapon.image}
      muted
      loop
      playsInline
      preload="metadata"
      controls
      onMouseEnter={play}
      onMouseLeave={stop}
      onTouchStart={play}
      aria-label={`סרטון ${weapon.title}`}
    />
  );
}

export default function FencingAbout() {
  return <main dir="rtl" className="page"><Navbar />
    <section className="hero"><div className="hero-image" /><div className="hero-overlay" /><div className="hero-content"><span className="eyebrow">FENCING · OLYMPIC SPORT</span><h1>סייף</h1><p className="hero-lead">מסורת בת אלפי שנים.<br />ספורט של מהירות, דיוק ומחשבה.</p><p className="hero-copy">סייף הוא הרבה יותר מקרב בחרבות. זהו ענף אולימפי שבו הגוף והמוח עובדים יחד — קוראים את היריב, מקבלים החלטות ומגיבים בתוך שבריר שנייה.</p><a className="history-btn" href="/fencing/about/book">לצאת למסע בהיסטוריה <span>←</span></a></div><div className="hero-badge"><span>3</span><small>התמחויות<br />אולימפיות</small></div></section>
    <section className="intro section"><div className="section-label">01 · מהו סייף?</div><div className="intro-grid"><div><h2>קרב בין שני אנשים.<br /><em>משחק שחמט במהירות גבוהה.</em></h2></div><div className="intro-text"><p>הסייף המודרני מתקיים על מסלול ייעודי, בין שני ספורטאים המצוידים בביגוד מגן ובמערכת אלקטרונית המזהה פגיעות.</p><p>בכל קרב הסייף צריך לקרוא את היריב, לשלוט במרחק, לבחור את הרגע הנכון ולשלב בין התקפה, הגנה ותנועה.</p></div></div></section>
    <section className="weapons section dark-section"><div className="section-heading"><div><div className="section-label">02 · שלוש ההתמחויות</div><h2>שלוש דרכים <span>לסייף.</span></h2></div></div><div className="weapon-grid">{weapons.map(w => <article className="weapon-card" key={w.title}><WeaponVideo weapon={w} /><div className="weapon-shade" /><div className="weapon-info"><span>{w.en}</span><h3>{w.title}</h3><p>{w.desc}</p></div></article>)}</div></section>
    <section className="pillars section"><div className="section-label">03 · מה הסייף מפתח?</div><h2>הגוף מתאמן.<br /><span>גם המוח.</span></h2><div className="pillar-grid">{pillars.map(([icon, title, text]) => <article key={title}><div className="pillar-icon">{icon}</div><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="timeline section dark-section"><div className="section-heading"><div><div className="section-label">04 · מסע בזמן</div><h2>מהחרב העתיקה<br /><span>לזירה האולימפית.</span></h2></div><a className="small-book-btn" href="/fencing/about/book">לפתוח את הספר ההיסטורי →</a></div><div className="timeline-grid">{milestones.map(([year, title, text]) => <article key={year}><strong>{year}</strong><div className="line" /><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="israel section"><div className="israel-image" /><div className="israel-content"><div className="section-label">05 · הסייף בישראל</div><h2>מסורת שהפכה<br /><span>להישגים כחול־לבן.</span></h2><p>הסייף בישראל התפתח לאורך עשרות שנים, ממועדונים ומאמנים שהביאו ידע בינלאומי לענף תחרותי המופיע על הבמות הגדולות בעולם.</p><div className="achievements">{israel.map((item, i) => <div key={i}><b>{String(i + 1).padStart(2, "0")}</b><span>{item}</span></div>)}</div></div></section>
    <section className="closing section"><div className="closing-mark">🤺</div><div className="section-label">06 · מעבר לספורט</div><h2>מה שמתחיל<br /><span>במסכה ובחרב</span><br />נשאר גם מחוץ לאולם.</h2><p>ריכוז. אומץ. משמעת. כבוד. הסייף נותן לספורטאי כלים לתחרות — וגם דרך להתפתח כאדם.</p><a className="cta" href="/fencing">לגלות את הסייף באשקלון <span>←</span></a></section>
    <style jsx>{` .page{background:#f4f0e8;color:#17212a;font-family:Arial,sans-serif;overflow:hidden}.hero{position:relative;min-height:720px;display:flex;align-items:center;color:#fff;background:#081018;isolation:isolate}.hero-image{position:absolute;inset:0;background:url('https://commons.wikimedia.org/wiki/Special:FilePath/2008%20Olympic%20Modern%20penthalton%20-%20fencing%20action.JPG') center 38%/cover;z-index:-3;filter:saturate(.8)}.hero-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,9,14,.96),rgba(3,9,14,.72) 38%,rgba(3,9,14,.2) 72%,rgba(3,9,14,.45)),linear-gradient(0deg,rgba(3,9,14,.65),transparent 45%);z-index:-2}.hero-content{width:min(1160px,calc(100% - 48px));margin:auto;padding:110px 0 90px}.eyebrow,.section-label{font-size:12px;letter-spacing:2.5px;font-weight:800;color:#b7c9d5}.hero h1{font-size:clamp(82px,13vw,170px);line-height:.8;margin:24px 0 34px;font-weight:900;letter-spacing:-8px}.hero-lead{font-size:clamp(27px,3.2vw,44px);line-height:1.25;font-weight:800;margin:0 0 24px}.hero-copy{max-width:610px;font-size:18px;line-height:1.8;color:#e2e8eb;margin-bottom:36px}.history-btn,.cta,.small-book-btn{display:inline-flex;align-items:center;gap:22px;text-decoration:none;font-weight:800;transition:.25s}.history-btn{background:#fff;color:#101920;padding:17px 23px;border-radius:3px}.history-btn:hover,.cta:hover,.small-book-btn:hover{transform:translateX(-4px)}.hero-badge{position:absolute;left:40px;bottom:42px;border:1px solid #ffffff55;padding:16px 20px;display:flex;align-items:center;gap:13px}.hero-badge span{font-size:42px;font-weight:900}.hero-badge small{font-size:11px;line-height:1.5}.section{padding:110px max(24px,calc((100% - 1160px)/2))}.intro-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:80px}.intro h2,.section-heading h2,.pillars>h2,.israel h2,.closing h2{font-size:clamp(42px,5vw,70px);line-height:1.04;margin:0;letter-spacing:-2.5px}.intro h2 em{font-style:normal;color:#71818a}.intro-text{font-size:20px;line-height:1.9;color:#53616a;padding-top:8px}.intro-text p{margin:0 0 22px}.dark-section{background:#0a141c;color:#f5f1e8}.weapons{padding-top:95px}.section-heading{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:48px}.section-heading h2 span,.pillars>h2 span,.israel h2 span,.closing h2 span{color:#aabcc5}.weapon-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}.weapon-card{position:relative;height:510px;overflow:hidden;background:#14212a;border-radius:3px}.weapon-video{position:absolute;left:0;right:0;top:-160px;width:100%;height:calc(100% + 160px);object-fit:cover;display:block;background:#101a21;z-index:1;transition:transform .5s}.weapon-video::-webkit-media-controls{z-index:10}.weapon-shade{position:absolute;inset:0;z-index:2;pointer-events:none;background:linear-gradient(0deg,rgba(3,8,12,.88),rgba(3,8,12,.12) 58%,rgba(3,8,12,.08))}.weapon-info{position:absolute;right:25px;left:25px;bottom:25px;z-index:4;pointer-events:none;text-shadow:0 2px 8px #000}.weapon-info>span{font-size:11px;letter-spacing:2px;color:#c6d4da}.weapon-info h3{font-size:48px;line-height:1;margin:8px 0}.weapon-info p{font-size:16px;line-height:1.6;color:#e0e7ea;max-width:330px;margin:0}.weapon-card:hover .weapon-video{transform:scale(1.015)}.pillars>h2{margin:20px 0 55px}.pillar-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}.pillar-grid article{border-top:1px solid #c9d0d2;padding-top:22px}.pillar-icon{font-size:30px;margin-bottom:28px}.pillar-grid h3{font-size:21px;margin:0 0 12px}.pillar-grid p{font-size:16px;line-height:1.7;color:#5e6b73;margin:0}.timeline .section-heading{margin-bottom:65px}.small-book-btn{color:#f5f1e8;border-bottom:1px solid #73848d;padding-bottom:8px}.timeline-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:25px}.timeline-grid article{position:relative}.timeline-grid strong{font-size:30px}.timeline-grid .line{height:1px;background:#53636c;margin:18px 0 25px}.timeline-grid h3{font-size:20px;margin:0 0 12px}.timeline-grid p{color:#aab6bb;line-height:1.7;margin:0}.israel{display:grid;grid-template-columns:.9fr 1.1fr;gap:75px;align-items:center}.israel-image{min-height:560px;background:url('https://commons.wikimedia.org/wiki/Special:FilePath/Fencing%20modern%20pentathlon.jpg') center/cover,#d6dddf}.israel h2{margin:20px 0 25px}.israel-content>p{font-size:18px;line-height:1.8;color:#53616a;max-width:600px}.achievements{margin-top:35px}.achievements>div{display:flex;gap:18px;padding:17px 0;border-top:1px solid #d0d4d4}.achievements b{font-size:12px;letter-spacing:2px;color:#75858d}.achievements span{font-weight:700}.closing{background:#0a141c;color:#f5f1e8;text-align:center;min-height:650px;display:flex;flex-direction:column;align-items:center;justify-content:center}.closing .section-label{margin-bottom:25px}.closing-mark{font-size:52px;margin-bottom:25px}.closing h2{font-size:clamp(48px,6vw,82px)}.closing p{max-width:580px;color:#aab6bb;font-size:18px;line-height:1.8;margin:25px auto 35px}.cta{background:#f5f1e8;color:#101920;padding:17px 25px}
      @media(max-width:900px){.hero{min-height:650px}.hero-content{padding:90px 24px 70px}.hero-badge{left:auto;right:24px;bottom:25px}.intro-grid,.israel{grid-template-columns:1fr;gap:40px}.weapon-grid{grid-template-columns:1fr}.weapon-card{height:470px}.pillar-grid,.timeline-grid{grid-template-columns:repeat(2,1fr);gap:30px}.israel-image{min-height:380px}.section-heading{align-items:flex-start}}
      @media(max-width:560px){.section{padding:75px 20px}.hero h1{letter-spacing:-4px}.hero-copy{font-size:16px}.weapon-card{height:430px}.weapon-info h3{font-size:40px}.pillar-grid,.timeline-grid{grid-template-columns:1fr}.israel-image{min-height:300px}.section-heading h2{font-size:43px}.hero-badge{display:none}}
    `}</style>
  </main>;
}
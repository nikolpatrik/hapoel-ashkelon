"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../../../../Navbar";

const chapters = [
  ["3000+ לפנה״ס", "העדויות הקדומות", "עדויות אמנותיות וארכאולוגיות מצביעות על תרגול לחימה באגרופים כבר במצרים העתיקה ובמסופוטמיה. זהו אחד השורשים הקדומים ביותר של תרבות האגרוף."],
  ["688 לפנה״ס", "אגרוף באולימפיה", "האגרוף נכנס לתוכנית המשחקים האולימפיים העתיקים באולימפיאדה ה־23. אונומסטוס מסמירנה נחשב לאלוף האולימפי הראשון בענף."],
  ["העת העתיקה", "יוון ורומא", "ביוון האגרוף הפך לתחרות מסודרת. המתאגרפים השתמשו ברצועות עור סביב הידיים, ללא כפפות מרופדות כפי שאנו מכירים כיום, והקרב הסתיים בהכנעה או באי־יכולת להמשיך."],
  ["המאה ה־18", "קרבות הפרסים באנגליה", "באנגליה האגרוף התפתח למופעי קרבות מקצועיים. ג'ק ברוטון פרסם ב־1743 כללים שנועדו לצמצם פציעות ולהסדיר את הקרב, שלב חשוב בדרך לאגרוף המודרני."],
  ["1838", "הזירה נכנסת לתמונה", "הפוג'יליסטיק סוסייטי הציגה זירה מרובעת התחומה בחבלים. המבנה הזה עיצב את המרחב שבו מתקיימים קרבות אגרוף עד היום."],
  ["1867", "כללי קווינסברי", "ג'ון גרהם צ'יימברס וג'ון דאגלס, המרקיז מקווינסברי, ניסחו כללים שהכניסו כפפות, סיבובים ומגבלות ברורות. הם הפכו לבסיס של האגרוף המודרני."],
  ["1904", "האגרוף חוזר לאולימפיאדה", "בסנט לואיס התקיימה תחרות האגרוף הראשונה בעידן האולימפי המודרני, עם קטגוריות משקל שהגדירו את מבנה התחרות."],
  ["1920", "אגרוף בינלאומי מאורגן", "הוקמה הפדרציה הבינלאומית לאגרוף חובבים, FIBA, ואומצו כללים אוניברסליים שנועדו לאפשר תחרות בינלאומית אחידה."],
  ["1948–1956", "האגדות האולימפיות", "לסלו פאפּ ההונגרי זכה בשלוש מדליות זהב אולימפיות רצופות. ההישג הפך אותו לאחת הדמויות המזוהות ביותר עם האגרוף האולימפי של אמצע המאה ה־20."],
  ["1960", "מוחמד עלי מתחיל", "בגיל 18 זכה קסיוס קליי במדליית זהב במשחקי רומא. משם החל מסלול שהפך אותו לאחת הדמויות הגדולות בתולדות האגרוף והספורט בכלל."],
  ["1988", "הישג ישראלי באולימפיאדה", "יעקב שמואל הגיע לרבע הגמר באולימפיאדת סיאול, ונחשב לאחד ההישגים האולימפיים הבולטים של ישראל באגרוף."],
  ["2009", "ישראל על בימת העולם", "דן אהרונוב זכה במדליית כסף באליפות העולם לנוער. הישגים בינלאומיים נוספים של מתאגרפים ישראלים תרמו לביסוס הענף בישראל."],
  ["2012", "נשים נכנסות לזירה האולימפית", "במשחקי לונדון התקיימו לראשונה תחרויות אגרוף לנשים. מאז הפך האגרוף האולימפי לענף תחרותי לנשים ולגברים כאחד."],
  ["היום", "האגרוף המודרני", "האגרוף משלב מסורת ארוכה עם מדע הספורט, ציוד מגן, שיטות אימון מתקדמות, קטגוריות משקל ומסגרות תחרות בינלאומיות."],
];

export default function BoxingHistoryBook() {
  const [page, setPage] = useState(0);
  const chapter = chapters[page];
  const go = (direction: "next" | "prev") => setPage((p) => direction === "next" ? Math.min(p + 1, chapters.length - 1) : Math.max(p - 1, 0));

  return <main dir="rtl" className="min-h-screen bg-[#17100d] text-white"><Navbar /><section className="px-6 pb-16 pt-20 text-center"><Link href="/boxing/about" className="text-sm font-bold text-[#fbbf24]">← חזרה לעמוד על האגרוף</Link><div className="mx-auto mt-10 max-w-4xl"><div className="text-sm font-black tracking-[0.2em] text-[#fbbf24]">THE HISTORY OF BOXING</div><h1 className="mt-5 text-5xl font-black md:text-7xl">מסע בהיסטוריה<br /><span className="text-[#f59e0b]">של האגרוף</span></h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-stone-300">דפדפו בין התחנות שעיצבו את אחד מענפי הספורט העתיקים והמוכרים בעולם.</p></div></section>
    <section className="px-4 pb-24 md:px-8"><div className="mx-auto max-w-5xl rounded-[28px] bg-[#efe5d2] p-3 text-[#2a201a] shadow-2xl md:p-6"><div className="grid min-h-[560px] overflow-hidden rounded-2xl bg-[#f8f0e3] md:grid-cols-2"><article className="border-b border-[#d7c8b0] p-8 md:border-b-0 md:border-l md:p-12"><div className="text-xs font-black tracking-[0.2em] text-[#a13a16]">הפרק הבא</div><h2 className="mt-6 text-3xl font-black">{chapters[Math.min(page + 1, chapters.length - 1)][1]}</h2><div className="my-6 h-px bg-[#d7c8b0]" /><p className="leading-8 text-stone-600">{chapters[Math.min(page + 1, chapters.length - 1)][2]}</p><div className="mt-8 text-sm font-black text-stone-400">{chapters[Math.min(page + 1, chapters.length - 1)][0]}</div></article><article className="relative p-8 md:p-12"><div className="text-xs font-black tracking-[0.2em] text-[#a13a16]">פרק {String(page + 1).padStart(2, "0")} · {chapter[0]}</div><h2 className="mt-6 text-4xl font-black">{chapter[1]}</h2><div className="my-7 h-1 w-16 bg-[#f59e0b]" /><p className="text-lg leading-9 text-stone-600">{chapter[2]}</p><div className="absolute bottom-10 left-10 right-10 flex items-center justify-between border-t border-[#d7c8b0] pt-5"><button onClick={() => go("prev")} disabled={page === 0} className="rounded-full border border-stone-300 px-5 py-2 font-black disabled:opacity-30">→ הקודם</button><span className="text-sm font-bold text-stone-400">{page + 1} / {chapters.length}</span><button onClick={() => go("next")} disabled={page === chapters.length - 1} className="rounded-full bg-[#1c1917] px-5 py-2 font-black text-white disabled:opacity-30">הבא ←</button></div></article></div></div></section></main>;
}

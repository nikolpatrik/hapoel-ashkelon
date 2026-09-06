import type { Metadata } from "next";
const baseUrl = "https://ashkelonsports.vercel.app";
export const metadata: Metadata = {
  title: "אגרוף באשקלון | חוג איגרוף לילדים ומבוגרים",
  description: "אגרוף ואיגרוף תחרותי באשקלון לילדים ומבוגרים: טכניקה, כושר, עבודת רגליים, הגנה, משמעת והכנה תחרותית עם המאמן סרגיי צ'ומצ'נקו.",
  keywords: ["אגרוף באשקלון", "איגרוף באשקלון", "חוג איגרוף אשקלון", "חוג אגרוף אשקלון", "מועדון אגרוף אשקלון", "אגרוף בשפלה", "איגרוף ילדים אשקלון", "איגרוף מבוגרים אשקלון", "boxing", "boxing Ashkelon", "Ashkelon boxing", "boxing club Ashkelon", "boxing Israel", "бокс", "бокс Ашкелон", "бокс Израиль", "боксерский клуб Ашкелон"],
  alternates: { canonical: `${baseUrl}/boxing`, languages: { "he-IL": `${baseUrl}/boxing`, en: `${baseUrl}/english/boxing`, ru: `${baseUrl}/russian/boxing`, "x-default": `${baseUrl}/boxing` } },
  openGraph: { title: "אגרוף באשקלון | חוג איגרוף", description: "אימוני אגרוף לילדים ומבוגרים באשקלון.", url: `${baseUrl}/boxing`, locale: "he_IL", type: "website" },
};
export default function BoxingLayout({ children }: { children: React.ReactNode }) { return children; }

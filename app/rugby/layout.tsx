import type { Metadata } from "next";
const baseUrl = "https://ashkelonsports.vercel.app";
export const metadata: Metadata = {
  title: "רוגבי באשקלון | חוג רוגבי לילדים, נוער ובוגרים",
  description: "רוגבי באשקלון לילדים, נוער ובוגרים: אימוני רוגבי, רוגבי 7, רוגבי 15 וטאג רוגבי. פעילות ספורטיבית קבוצתית באשקלון ובאזור השפלה.",
  keywords: ["רוגבי באשקלון", "חוג רוגבי באשקלון", "מועדון רוגבי אשקלון", "רוגבי בשפלה", "רוגבי ילדים אשקלון", "רוגבי נוער אשקלון", "רוגבי בוגרים אשקלון", "rugby", "rugby Ashkelon", "Ashkelon rugby", "rugby club Ashkelon", "rugby Israel", "регби", "регби Ашкелон", "регби Израиль", "регбийный клуб Ашкелон"],
  alternates: { canonical: `${baseUrl}/rugby`, languages: { "he-IL": `${baseUrl}/rugby`, en: `${baseUrl}/english/rugby`, ru: `${baseUrl}/russian/rugby`, "x-default": `${baseUrl}/rugby` } },
  openGraph: { title: "רוגבי באשקלון | חוג רוגבי", description: "רוגבי לילדים, נוער ובוגרים באשקלון.", url: `${baseUrl}/rugby`, locale: "he_IL", type: "website" },
};
export default function RugbyLayout({ children }: { children: React.ReactNode }) { return children; }

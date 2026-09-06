import type { Metadata } from "next";
const baseUrl = "https://ashkelonsports.vercel.app";
export const metadata: Metadata = {
  title: "טניס שולחן באשקלון | חוג פינג פונג ותחרות",
  description: "טניס שולחן באשקלון לילדים, נוער ובוגרים: אימונים לפיתוח ריכוז, מהירות תגובה, קואורדינציה, טכניקה וחשיבה תחרותית.",
  keywords: ["טניס שולחן באשקלון", "פינג פונג באשקלון", "חוג טניס שולחן אשקלון", "מועדון טניס שולחן אשקלון", "טניס שולחן בשפלה", "טניס שולחן ילדים אשקלון", "table tennis", "table tennis Ashkelon", "ping pong Ashkelon", "Ashkelon table tennis club", "table tennis Israel", "настольный теннис", "настольный теннис Ашкелон", "клуб настольного тенниса Ашкелон", "настольный теннис Израиль"],
  alternates: { canonical: `${baseUrl}/table-tennis`, languages: { "he-IL": `${baseUrl}/table-tennis`, en: `${baseUrl}/english/table-tennis`, ru: `${baseUrl}/russian/table-tennis`, "x-default": `${baseUrl}/table-tennis` } },
  openGraph: { title: "טניס שולחן באשקלון | חוג פינג פונג", description: "טניס שולחן ופינג פונג באשקלון לילדים, נוער ובוגרים.", url: `${baseUrl}/table-tennis`, locale: "he_IL", type: "website" },
};
export default function TableTennisLayout({ children }: { children: React.ReactNode }) { return children; }

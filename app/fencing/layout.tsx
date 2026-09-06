import type { Metadata } from "next";

const baseUrl = "https://ashkelonsports.vercel.app";

export const metadata: Metadata = {
  title: "סייף באשקלון | מועדון סייף, חרב ודקר",
  description: "סייף באשקלון לילדים ובוגרים: אימוני סייף, חרב ודקר, הכנה לתחרויות ופיתוח ספורטאים. מועדון סייף מקצועי באשקלון ובאזור השפלה.",
  keywords: [
    "סייף באשקלון", "סיף באשקלון", "סיו באשקלון", "חוג סייף באשקלון", "מועדון סייף באשקלון", "סייף בשפלה", "חרב באשקלון", "חרבות באשקלון", "דקר באשקלון", "פנסינג באשקלון",
    "fencing", "fencing Ashkelon", "Ashkelon fencing", "fencer Ashkelon", "fencing club Ashkelon", "sword sport Ashkelon", "épée Ashkelon", "sabre Ashkelon", "foil Ashkelon", "fencing Israel",
    "фехтование", "фехтование Ашкелон", "фехтовальный клуб Ашкелон", "фехтовальщик Ашкелон", "сабля Ашкелон", "рапира Ашкелон", "шпага Ашкелон", "фехтование Израиль"
  ],
  alternates: {
    canonical: `${baseUrl}/fencing`,
    languages: {
      "he-IL": `${baseUrl}/fencing`,
      en: `${baseUrl}/english/fencing`,
      ru: `${baseUrl}/russian/fencing`,
      "x-default": `${baseUrl}/fencing`,
    },
  },
  openGraph: { title: "סייף באשקלון | מועדון סייף, חרב ודקר", description: "סייף, חרב ודקר באשקלון לילדים ובוגרים.", url: `${baseUrl}/fencing`, locale: "he_IL", type: "website" },
};

export default function FencingLayout({ children }: { children: React.ReactNode }) { return children; }

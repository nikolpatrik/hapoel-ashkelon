import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const baseUrl = "https://ashkelonsports.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: "העמותה לקידום הספורט באשקלון | סייף, אגרוף, רוגבי וטניס שולחן", template: "%s | העמותה לקידום הספורט באשקלון" },
  description: "העמותה לקידום הספורט באשקלון – חוגי ספורט ותחרויות באשקלון ובאזור השפלה, כולל סייף, אגרוף, רוגבי וטניס שולחן.",
  keywords: ["ספורט אשקלון", "חוגי ספורט באשקלון", "סייף", "אגרוף", "רוגבי", "טניס שולחן", "fencing Ashkelon", "boxing Ashkelon", "rugby Ashkelon", "table tennis Ashkelon", "фехтование Ашкелон", "бокс Ашкелон", "регби Ашкелон", "настольный теннис Ашкелон"],
  alternates: { canonical: "/", languages: { "he-IL": "/", en: "/english", ru: "/russian", "x-default": "/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { title: "העמותה לקידום הספורט באשקלון", description: "סייף, אגרוף, רוגבי וטניס שולחן באשקלון.", url: baseUrl, locale: "he_IL", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="he" dir="rtl" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}><body className="min-h-full flex flex-col">{children}</body></html>;
}

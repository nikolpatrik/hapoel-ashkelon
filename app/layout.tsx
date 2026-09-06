import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ashkelon-sports.vercel.app"),
  title: {
    default: "העמותה לקידום הספורט באשקלון | סייף, אגרוף, רוגבי וטניס שולחן",
    template: "%s | העמותה לקידום הספורט באשקלון",
  },
  description:
    "העמותה לקידום הספורט באשקלון – חוגי ספורט ותחרויות באשקלון ובאזור השפלה, כולל סייף (Fencing / Фехтование), אגרוף, רוגבי וטניס שולחן.",
  keywords: [
    "סייף", "סיף", "סיו", "חרבות", "חרב", "פנסינג",
    "fencing", "fance", "fencer", "fencing Ashkelon", "Ashkelon fencing",
    "fencing Israel", "sword sport", "sword fighting",
    "фехтование", "фехтовать", "фехтовальщик", "фехтование Ашкелон",
    "спорт Ашкелон", "ספורט אשקלון", "חוגי ספורט באשקלון",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="he" dir="rtl" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

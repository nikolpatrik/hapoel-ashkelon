import type { Metadata } from "next";

const baseUrl = "https://ashkelonsports.vercel.app";
const sports: Record<string, { title: string; description: string; keywords: string[] }> = {
  fencing: { title: "Fencing in Ashkelon | Fencing Club, Sabre, Épée & Foil", description: "Fencing in Ashkelon for children and adults: sabre, épée and foil training, competition preparation and athlete development.", keywords: ["fencing Ashkelon", "Ashkelon fencing", "fencing club Ashkelon", "fencer Ashkelon", "sabre Ashkelon", "épée Ashkelon", "foil Ashkelon", "fencing Israel"] },
  boxing: { title: "Boxing in Ashkelon | Boxing Club for Children & Adults", description: "Boxing in Ashkelon for children and adults, with training focused on technique, fitness, discipline, confidence and competition.", keywords: ["boxing Ashkelon", "Ashkelon boxing", "boxing club Ashkelon", "boxing Israel", "boxer Ashkelon"] },
  rugby: { title: "Rugby in Ashkelon | Rugby for Children, Youth & Adults", description: "Rugby in Ashkelon for children, youth and adults, including rugby sevens, rugby union and tag rugby.", keywords: ["rugby Ashkelon", "Ashkelon rugby", "rugby club Ashkelon", "rugby Israel", "tag rugby Ashkelon"] },
  "table-tennis": { title: "Table Tennis in Ashkelon | Table Tennis & Ping Pong", description: "Table tennis in Ashkelon for different ages, developing concentration, reaction speed, coordination, technique and competitive skills.", keywords: ["table tennis Ashkelon", "ping pong Ashkelon", "Ashkelon table tennis club", "table tennis Israel"] },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const sport = sports[slug];
  if (!sport) return {};
  return {
    title: sport.title,
    description: sport.description,
    keywords: sport.keywords,
    alternates: {
      canonical: `${baseUrl}/english/${slug}`,
      languages: { "he-IL": `${baseUrl}/${slug}`, en: `${baseUrl}/english/${slug}`, ru: `${baseUrl}/russian/${slug}`, "x-default": `${baseUrl}/english/${slug}` },
    },
    openGraph: { title: sport.title, description: sport.description, url: `${baseUrl}/english/${slug}`, locale: "en_US", type: "website" },
  };
}

export default function EnglishSportLayout({ children }: { children: React.ReactNode }) { return children; }

import type { Metadata } from "next";

const baseUrl = "https://ashkelonsports.vercel.app";
const sports: Record<string, { title: string; description: string; keywords: string[] }> = {
  fencing: { title: "Фехтование в Ашкелоне | Сабля, рапира и шпага", description: "Фехтование в Ашкелоне для детей и взрослых: сабля, рапира и шпага, тренировки, соревнования и развитие спортсменов.", keywords: ["фехтование Ашкелон", "фехтовальный клуб Ашкелон", "фехтовальщик Ашкелон", "сабля Ашкелон", "рапира Ашкелон", "шпага Ашкелон", "фехтование Израиль"] },
  boxing: { title: "Бокс в Ашкелоне | Бокс для детей и взрослых", description: "Бокс в Ашкелоне для детей и взрослых: техника, физическая подготовка, дисциплина и спортивная подготовка.", keywords: ["бокс Ашкелон", "боксерский клуб Ашкелон", "бокс Израиль", "бокс дети Ашкелон", "бокс взрослые Ашкелон"] },
  rugby: { title: "Регби в Ашкелоне | Регби для детей, молодежи и взрослых", description: "Регби в Ашкелоне для детей, молодежи и взрослых, включая регби-7 и тэг-регби.", keywords: ["регби Ашкелон", "регбийный клуб Ашкелон", "регби Израиль", "регби дети Ашкелон", "регби молодежь Ашкелон"] },
  "table-tennis": { title: "Настольный теннис в Ашкелоне | Пинг-понг", description: "Настольный теннис в Ашкелоне: тренировки для развития концентрации, реакции, координации, техники и соревновательных навыков.", keywords: ["настольный теннис Ашкелон", "пинг-понг Ашкелон", "клуб настольного тенниса Ашкелон", "настольный теннис Израиль"] },
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
      canonical: `${baseUrl}/russian/${slug}`,
      languages: { "he-IL": `${baseUrl}/${slug}`, en: `${baseUrl}/english/${slug}`, ru: `${baseUrl}/russian/${slug}`, "x-default": `${baseUrl}/russian/${slug}` },
    },
    openGraph: { title: sport.title, description: sport.description, url: `${baseUrl}/russian/${slug}`, locale: "ru_RU", type: "website" },
  };
}

export default function RussianSportLayout({ children }: { children: React.ReactNode }) { return children; }

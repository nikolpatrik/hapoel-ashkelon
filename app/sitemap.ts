import type { MetadataRoute } from "next";

const baseUrl = "https://ashkelon-sports.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/fencing",
    "/fencing/about",
    "/fencing/about/book",
    "/fencing/sergey",
    "/fencing/maria",
    "/fencing/roman",
    "/boxing",
    "/boxing/about",
    "/boxing/about/book",
    "/boxing/sergey",
    "/rugby",
    "/rugby/about",
    "/rugby/about/book",
    "/table-tennis",
    "/table-tennis/about",
    "/table-tennis/about/book",
    "/leave-details",
    "/english",
    "/english/fencing",
    "/english/boxing",
    "/english/rugby",
    "/english/table-tennis",
    "/russian",
    "/russian/fencing",
    "/russian/boxing",
    "/russian/rugby",
    "/russian/table-tennis",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : route.includes("fencing") ? 0.95 : 0.7,
  }));
}

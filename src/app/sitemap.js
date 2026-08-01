export default function sitemap() {
  const baseUrl = "https://www.smartwingchunuk.co.uk";

  const routes = [
    "",
    "/classes",
    "/syllabus",
    "/history",
    "/gallery",
    "/articles",
    "/locations",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.8,
  }));
}

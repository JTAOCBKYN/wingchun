export default function robots() {
  const isStaging = process.env.VERCEL_ENV === "preview";
  const baseUrl = "https://www.smartwingchunuk.co.uk";

  if (isStaging) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

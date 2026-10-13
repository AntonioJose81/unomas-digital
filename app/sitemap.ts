import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/politica-privacidad/", "/politica-cookies/"].map(path => ({url:`https://unomas.digital${path}`}));
}
export const dynamic = "force-static";

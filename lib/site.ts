/**
 * URL pública del sitio. Configúrala en el hosting con la variable
 * NEXT_PUBLIC_SITE_URL (por ejemplo https://sevenstay.com).
 * Se usa para la URL canónica, la imagen al compartir, robots y sitemap.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

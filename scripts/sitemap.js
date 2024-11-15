const fs = require("fs");
const { glob } = require("glob");

const BASE_URL = "https://counterspell.hackclub.com";

async function generateSiteMap() {
  console.log("Generating sitemap.xml");

  let pages = await glob("pages/**/*.js");
  const specific_ignored = [
    "sitemap.xml.js",
    "404.js",
    "index.js",
    "example-city.js",
  ];
  pages = pages.map((page) =>
    page.replaceAll("\\", "/").replace("pages/", "").replace(".js", "")
  );
  pages = pages.filter(
    (page) =>
      !(
        specific_ignored.includes(page) ||
        page.startsWith("_") ||
        page.startsWith("api/")
      )
  );
  console.log("Pages found to include in sitemap.xml:", pages.join(", "));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
  </url>
${pages
  .map((path) => {
    return `  <url>
      <loc>${BASE_URL}/${path}</loc>
  </url>
`;
  })
  .join("")}</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSiteMap();

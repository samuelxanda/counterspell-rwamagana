import { glob } from "glob";

const BASE_URL = "https://counterspell.hackclub.com";

function generateSiteMap(paths) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
  </url>
${paths
  .map((path) => {
    return `  <url>
      <loc>${BASE_URL}/${path}</loc>
  </url>
`;
  })
  .join("")}</urlset>`;
}

export async function getServerSideProps({ res }) {
  // We make an API call to gather the URLs for our site
  let pages = await glob("pages/**/*.js");
  const specific_ignored = ["sitemap.xml.js", "404.js", "index.js"];
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

  const sitemap = generateSiteMap(pages);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}

export default function dummy() {}

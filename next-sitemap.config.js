/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://generalrooterxp.netlify.app',
  generateRobotsTxt: true,
  sitemapBaseFileName: 'sitemap',     // sitemap.xml
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 1.0,                      // highest priority for one-page site
  generateIndexSitemap: false,        // single sitemap is enough
  autoLastmod: true,
  outDir: './public',                 // ensures it’s in public folder
};

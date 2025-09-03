/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://generalrooterxp.netlify.app',
  generateRobotsTxt: true,
  sitemapBaseFileName: 'sitemap_index',  // generates sitemap_index.xml
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  generateIndexSitemap: true,
  autoLastmod: true,
  outDir: './public', // ✅ ensures sitemaps are placed in public folder
};

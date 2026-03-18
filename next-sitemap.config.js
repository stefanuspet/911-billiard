/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://911billiard.vercel.app",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
    ],
  },
};

const config = {
  siteTitle: "Coding Dir", // Site title.
  siteTitleShort: "Coding Dir", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Coding Dir", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://youtubechannels.gatsbyjs.io/", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Coding Directory", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-205524940-1", // GA tracking ID.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "moataz.mohammady", // Username to display in the author segment.
  userEmail: "moataz.mohammady@gmail.com", // Email used for RSS feed's author segment
  userTwitter: "https://twitter.com/MoatazMohammady", // Optionally renders "Follow Me" in the Bio segment.
  gitHub: "https://github.com/MoatazAbdAlmageed/YouTube-Channels", // Optionally renders "Follow Me" in the Bio segment.
  userLinkedin: "https://www.linkedin.com/in/moatazabdelmageed/", // Optionally renders "Follow Me" in the Bio segment.
  userLocation: "Egypt", // User location to display in the author segment.
  userAvatar: "https://i.ibb.co/WPz9CNk/avatar.jpg", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  copyright: "Copyright © 2021. All rights reserved.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "red", // Used for setting manifest background color.
  REACT_APP_SITE_KEY: "6Lfc_s0iAAAAAF0b-897nEV1vJBHMr2n5fb8h9fY",
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== "/")
//   config.siteRss = `/${config.siteRss}`;

module.exports = config;

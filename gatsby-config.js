require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby-Shopify",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.PASSWORD,
        storeUrl: process.env.STORE_URL,
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-root-import",
  ],
};

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby-Shopify",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: process.env.GATSBY_API_URL,
        accessToken: process.env.API_KEY,
      },
    },
    "gatsby-plugin-styled-components",
  ],
};

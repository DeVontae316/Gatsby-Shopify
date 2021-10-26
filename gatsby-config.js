module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Gatsby-Shopify",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "devontaesteststore",
        accessToken: "9947a0b3183c5924dad922a0ffb36d23",
      },
    },
    "gatsby-plugin-styled-components",
  ],
};

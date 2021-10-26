const path = require("path");

// Create product page pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const productTemplate = path.resolve(`src/templates/Product/index.js`);
  const { data } = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            handle
            shopifyId
          }
        }
      }
    }
  `);
  data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `product/${node.handle}`,
      component: productTemplate,
      context: {
        shopifyId: node.shopifyId,
      },
    });
  });
};

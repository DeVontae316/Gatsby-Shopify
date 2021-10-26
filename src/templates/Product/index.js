import React from "react";
import { graphql } from "gatsby";

export const pageQuery = graphql`
  query pageQuery($shopifyId: String!) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      description
    }
  }
`;

const ProductTemplate = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>product template</h1>
      {data.shopifyProduct.description}
    </div>
  );
};

export default ProductTemplate;

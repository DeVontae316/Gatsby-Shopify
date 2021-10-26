import React from "react";
import Image from "components/Image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import { graphql } from "gatsby";
import { Layout } from "components";
import { Grid } from "./style";

export const pageQuery = graphql`
  query pageQuery($shopifyId: String!) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      description
      images {
        gatsbyImageData(width: 300)
      }
    }
  }
`;

const ProductTemplate = ({ data }) => {
  console.log(data);
  console.log("Img below:");
  console.log(data.shopifyProduct.images[0]);
  return (
    <Layout>
      <Grid>
        <div>
          <h1>product template</h1>
          {data.shopifyProduct.description}
        </div>
        <div>
          <h1>Image here</h1>
          <GatsbyImage
            image={data.shopifyProduct.images[0].gatsbyImageData}
            alt=""
          />
        </div>
      </Grid>
    </Layout>
  );
};

export default ProductTemplate;

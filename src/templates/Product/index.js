import React from "react";
import { graphql } from "gatsby";
import { Layout } from "components";
import { Grid } from "./style";
import ImageGallery from "components/ImageGallery";

export const pageQuery = graphql`
  query pageQuery($shopifyId: String!) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      description
      images {
        id
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
        <ImageGallery img={data} />
        {/*  <div>
          <h1>Image here</h1>
          <GatsbyImage
            image={data.shopifyProduct.images[0].gatsbyImageData}
            alt=""
          />
          {data.shopifyProduct.images.map((img) => {
            return <GatsbyImage image={img.gatsbyImageData} alt="" />;
          })}
        </div> */}
      </Grid>
    </Layout>
  );
};

export default ProductTemplate;

import React, { useState, useContext, useEffect } from "react";
import { graphql } from "gatsby";
import { navigate } from "gatsby-link";
/* ****************************************** */
import { Layout } from "components";
import { Grid, SelectWrapper, Price } from "./style";
import ImageGallery from "components/ImageGallery";
import CartContext from "../../Context/CartContext";
import { useGlobalImageContext } from "../../Context/ImageContext";

export const pageQuery = graphql`
  query pageQuery($shopifyId: String!) {
    shopifyProduct(shopifyId: { eq: $shopifyId }) {
      id
      title
      handle
      storefrontId
      shopifyId
      description
      variants {
        id
        availableForSale
        price
        title
        displayName
        image {
          gatsbyImageData(width: 300, height: 300)
        }
      }
      images {
        id
        gatsbyImageData(width: 300, height: 300)
      }
    }
  }
`;

const ProductTemplate = ({ data }) => {
  const { getProductById, getProductByHandle } = useContext(CartContext);
  const { setImage, setData, price, setPrice, variantId, setVariantId } =
    useGlobalImageContext();

  const handleSelection = (e) => {
    const getPriceForVariant = data.shopifyProduct.variants.find((v) =>
      v.id === e.target.value ? v.price : null
    );

    setPrice(getPriceForVariant.price);
    setVariantId(getPriceForVariant.id);
    setImage(getPriceForVariant.image.gatsbyImageData);

    console.log(e.target.value);
    console.log("selected item:");
    console.log(getPriceForVariant);

    navigate(`?variant=${encodeURIComponent(getPriceForVariant.id)}`, {
      replace: true,
    });
  };

  useEffect(() => {
    setData(data);
    setImage(data.shopifyProduct.variants[0].image.gatsbyImageData);
    setPrice(data.shopifyProduct.variants[0].price);
    setVariantId(data.shopifyProduct.variants[0].id);

    getProductById(data.shopifyProduct.storefrontId)
      .then((result) => {
        return console.log(result);
      })
      .catch((err) => console.log(`error message:${err})`));

    console.log(`data below:`);
    console.log(data);
  }, [getProductById]);
  return (
    <Layout>
      <Grid>
        <div>
          <h1>{data.shopifyProduct.title}</h1>
          <p>{data.shopifyProduct.description}</p>
          <SelectWrapper>
            <strong>variants</strong>
            <select value={variantId} onChange={handleSelection}>
              {data.shopifyProduct.variants.map((v) => {
                return (
                  <option value={v.id} key={v.id}>
                    {v.availableForSale && v.title}
                  </option>
                );
              })}
            </select>
          </SelectWrapper>
          <Price>{price ? `$${price}` : null}</Price>
        </div>

        <ImageGallery data={data} />
      </Grid>
    </Layout>
  );
};

export default ProductTemplate;

import React, { useState, useContext, useEffect } from "react";
import { graphql } from "gatsby";
import { navigate } from "gatsby-link";
/* ****************************************** */
import { Layout, ProductQty, ImageGallery } from "components";
import { Grid, SelectWrapper, Price } from "./style";
import CartContext from "../../Context/CartContext";
import { useGlobalImageContext } from "../../Context/ImageContext";
import Header from "../../components/Header";

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
        shopifyId
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
  const {
    setImage,
    setData,
    price,
    setPrice,
    variantId,
    setVariantId,
    setShopifyId,
    setIsAvailable,
  } = useGlobalImageContext();

  const [testImg, setTestImg] = useState();

  const handleSelection = (e) => {
    const Variant = data.shopifyProduct.variants.find((v) =>
      v.id === e.target.value ? v.price : null
    );

    setPrice(Variant.price);
    setVariantId(Variant.id);
    setShopifyId(Variant.shopifyId);
    setImage(Variant.image.gatsbyImageData);

    navigate(`?variant=${encodeURIComponent(Variant.id)}`, {
      replace: true,
    });
  };

  useEffect(() => {
    setData(data);
    setImage(data.shopifyProduct.variants[0].image.gatsbyImageData);
    setPrice(data.shopifyProduct.variants[0].price);
    setVariantId(data.shopifyProduct.variants[0].id);
    setTestImg(data.shopifyProduct.images[1].gatsbyImageData);
    setIsAvailable(data.shopifyProduct.variants[0].availableForSale);
    setShopifyId(data.shopifyProduct.variants[0].shopifyId);

    /* getProductById(data.shopifyProduct.storefrontId)
      .then((result) => {
        return console.log(result);
      })
      .catch((err) => console.log(`error message:${err})`)); */
  }, []);
  return (
    console.log(testImg) || (
      <>
        <Header />
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
              <ProductQty />
            </div>

            <ImageGallery data={data} />
          </Grid>
        </Layout>
      </>
    )
  );
};

export default ProductTemplate;

import React from "react";
import { ImageWrapper } from "./style";
import { GatsbyImage } from "gatsby-plugin-image";
import { useGlobalImageContext } from "../../Context/ImageContext";

const Images = () => {
  const { data, setImage, setId, id } = useGlobalImageContext();

  const changeImage = (imgId) => {
    const filter = data.shopifyProduct.images.filter((img) =>
      img.id === imgId ? img : null
    );

    setImage(filter[0].gatsbyImageData);
    setId(filter[0].id);
  };
  return (
    <div>
      {data?.shopifyProduct.images.map((i) => {
        const active = id === i.id ? true : false;

        return (
          <ImageWrapper
            color={active}
            onClick={() => changeImage(i.id)}
            key={i.id}
          >
            <GatsbyImage image={i.gatsbyImageData} alt="" />
          </ImageWrapper>
        );
      })}
    </div>
  );
};

export default Images;

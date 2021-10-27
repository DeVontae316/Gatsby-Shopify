import React from "react";
import { ImageWrapper } from "./style";
import { GatsbyImage } from "gatsby-plugin-image";

const Images = ({ data, setImage }) => {
  const changeImage = (id) => {
    console.log(id);
    const filter = data.shopifyProduct.images.filter((img) =>
      img.id === id ? img : null
    );
    setImage(filter[0].gatsbyImageData);
    /* setId(filter[0].id); */
    console.log("new pic below:");
    console.log(filter);
  };
  return (
    <div>
      {data.shopifyProduct.images.map((i) => {
        console.log(`id:${i.id}`);
        return (
          <ImageWrapper onClick={() => changeImage(i.id)} key={i.id}>
            <GatsbyImage image={i.gatsbyImageData} alt="" />
          </ImageWrapper>
        );
      })}
    </div>
  );
};

export default Images;

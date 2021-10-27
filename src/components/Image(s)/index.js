import React from "react";
import { ImageWrapper, ActiveWrapper } from "./style";
import { GatsbyImage } from "gatsby-plugin-image";

const Images = ({ data, setImage, img, setId, id }) => {
  const changeImage = (id) => {
    console.log(id);
    const filter = data.shopifyProduct.images.filter((img) =>
      img.id === id ? img : null
    );
    setImage(filter[0].gatsbyImageData);
    setId(filter[0].id);
    console.log("new pic below:");
    console.log(filter);
  };
  return (
    <div>
      {data.shopifyProduct.images.map((i) => {
        const Wrapper = id === i.id ? ActiveWrapper : ImageWrapper;
        console.log(`id:${i.id}`);
        console.log(`img_id:${img.id}`);
        return (
          <Wrapper onClick={() => changeImage(i.id)} key={i.id}>
            <GatsbyImage image={i.gatsbyImageData} alt="" />
          </Wrapper>
        );
      })}
    </div>
  );
};

export default Images;

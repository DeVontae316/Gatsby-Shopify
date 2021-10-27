import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Gallery, ImageWrapper } from "./style";

const ImageGallery = ({ img }) => {
  const [image, setImage] = useState(
    img.shopifyProduct.images[0].gatsbyImageData
  );

  const changeImage = (id) => {
    console.log(id);
    const filter = img.shopifyProduct.images.filter((img) =>
      img.id === id ? img : null
    );
    setImage(filter[0].gatsbyImageData);
    console.log("new pic below:");
    console.log(filter);
  };
  return (
    <Gallery>
      <div>
        <GatsbyImage image={image} alt="" />
      </div>
      <div>
        {img.shopifyProduct.images.map((i) => {
          console.log(`id:${i.id}`);
          return (
            <ImageWrapper onClick={() => changeImage(i.id)} key={i.id}>
              <GatsbyImage image={i.gatsbyImageData} alt="" />
            </ImageWrapper>
          );
        })}
      </div>
    </Gallery>
  );
};

export default ImageGallery;

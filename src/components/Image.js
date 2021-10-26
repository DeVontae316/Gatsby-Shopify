import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = ({ img }) => {
  const image = getImage(img.shopifyProduct.images[0].src);
  return (
    <div>
      <GatsbyImage style={{ width: 500, height: 500 }} image={image} />
    </div>
  );
};

export default Image;

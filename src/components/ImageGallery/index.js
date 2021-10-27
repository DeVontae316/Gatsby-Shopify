import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Gallery } from "./style";
import Images from "../Image(s)";

const ImageGallery = ({ data, isActive }) => {
  const [image, setImage] = useState(
    data.shopifyProduct.images[0].gatsbyImageData
  );

  const [id, setId] = useState(null);

  return (
    <Gallery>
      <div>
        <GatsbyImage image={image} alt="" />
      </div>
      <Images setImage={setImage} data={data} />
    </Gallery>
  );
};

export default ImageGallery;

import React, { useState } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Gallery } from "./style";
import Images from "../Image(s)";

const ImageGallery = ({ data }) => {
  const [image, setImage] = useState(
    data.shopifyProduct.images[0].gatsbyImageData
  );
  const [id, setId] = useState();

  return (
    <Gallery>
      <div>
        <GatsbyImage image={image} alt="" />
      </div>
      <Images
        setId={setId}
        id={id}
        img={image}
        setImage={setImage}
        data={data}
      />
    </Gallery>
  );
};

export default ImageGallery;

import React, { useState, useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Gallery } from "./style";
import Images from "../Image(s)";

const ImageGallery = ({ data, img }) => {
  const [id, setId] = useState();
  const [image, setImage] = useState(img);
  useEffect(() => {
    setImage(img);
  }, [img]);
  return (
    <Gallery>
      <div>
        <GatsbyImage image={image} alt="" />
      </div>
      <Images
        img={image}
        setImage={setImage}
        setId={setId}
        id={id}
        data={data}
      />
    </Gallery>
  );
};

export default ImageGallery;

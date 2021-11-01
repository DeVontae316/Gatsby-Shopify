import React, { useState, useEffect } from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Gallery } from "./style";
import Images from "../Image(s)";
import { useGlobalImageContext } from "../../Context/ImageContext";

const ImageGallery = () => {
  const { image } = useGlobalImageContext();

  return (
    <Gallery>
      <div>
        <GatsbyImage image={image} alt="" />
      </div>
      <Images />
    </Gallery>
  );
};

export default ImageGallery;

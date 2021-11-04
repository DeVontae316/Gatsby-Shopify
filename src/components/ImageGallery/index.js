import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Gallery } from "./style";
import Images from "../Image(s)";
import { useGlobalImageContext } from "../../Context/ImageContext";

export const ImageGallery = () => {
  const { image } = useGlobalImageContext();

  return (
    <Gallery>
      <div>
        <GatsbyImage image={image && image} alt="" />
      </div>
      <Images />
    </Gallery>
  );
};

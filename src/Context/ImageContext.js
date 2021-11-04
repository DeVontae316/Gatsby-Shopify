import React, { createContext, useContext, useState } from "react";

export const ImageProvider = createContext();

export const ImageContext = ({ children }) => {
  const [data, setData] = useState();
  const [image, setImage] = useState();
  const [id, setId] = useState();
  const [price, setPrice] = useState();
  const [variantId, setVariantId] = useState();
  const [shopifyId, setShopifyId] = useState();
  const [isAvailable, setIsAvailable] = useState();
  return (
    <ImageProvider.Provider
      value={{
        image,
        setImage,
        data,
        setData,
        id,
        setId,
        price,
        setPrice,
        variantId,
        setVariantId,
        shopifyId,
        setShopifyId,
        isAvailable,
        setIsAvailable,
      }}
    >
      {children}
    </ImageProvider.Provider>
  );
};

export const useGlobalImageContext = () => {
  const imageContext = useContext(ImageProvider);

  return imageContext;
};

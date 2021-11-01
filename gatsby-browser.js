import React from "react";
import { CartContextProvider } from "./src/Context/CartContext";
import { ImageContext } from "./src/Context/ImageContext";

export const wrapRootElement = ({ element }) => (
  <CartContextProvider>
    <ImageContext>{element}</ImageContext>
  </CartContextProvider>
);

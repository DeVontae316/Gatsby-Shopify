import React from "react";
import { CartContextProvider } from "./src/Context/CartContext";

export const wrapRootElement = ({ element }) => (
  <CartContextProvider>{element}</CartContextProvider>
);

import React, { useState, useContext } from "react";
import { useGlobalImageContext } from "../../Context/ImageContext";
import { Button, Input } from "components";
import { ProductQtyWrapper } from "./style";
import CartContext from "../../Context/CartContext";

export const ProductQty = () => {
  const { isAvailable, variantId, shopifyId } = useGlobalImageContext();
  const { updateLineItem } = useContext(CartContext);
  console.log(`current shopifyId:${shopifyId}`);
  console.log(`current variantId:${variantId}`);
  const [qty, setQty] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLineItem({ variantId: shopifyId, quantity: qty });
    console.log("submitted");
  };

  const handleChange = (e) => {
    setQty(parseInt(e.target.value));
  };
  return (
    console.log(`qty:${qty}`) || (
      <ProductQtyWrapper>
        <strong>Qty</strong>
        <form onSubmit={handleSubmit}>
          <Input
            disabled={!isAvailable}
            onChange={handleChange}
            value={qty}
            type="number"
          />
          <Button type="submit">Add to Cart</Button>
        </form>
      </ProductQtyWrapper>
    )
  );
};

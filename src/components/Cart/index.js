import React, { useContext } from "react";
import { CartWrapper } from "./style";
import { GrCart } from "react-icons/gr";
import CartContext from "../../Context/CartContext";

const Cart = () => {
  const { checkout } = useContext(CartContext);
  console.log(checkout);
  return (
    <CartWrapper>
      <GrCart size={"1.5rem"} />
    </CartWrapper>
  );
};

export default Cart;

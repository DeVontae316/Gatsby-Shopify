import React, { useState } from "react";
import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: process.env.TOKEN,
  domain: `${process.env.URL}.myshopify.com`,
});

const defaultState = {
  cart: {},
};

const CartContext = React.createContext(defaultState);
export default CartContext;

export function CartContextProvider({ children }) {
  const [checkout, setCheckout] = useState(
    JSON.parse(
      typeof window !== "undefined" ? localStorage.getItem("checkout") : null
    )
  );

  const [successfulOrder, setSuccessfulOrder] = useState(null);
  const checkoutId = checkout?.id;

  React.useEffect(() => {
    const getCheckout = async () => {
      if (checkoutId && typeof window !== "undefined") {
        const fetchedCheckout = await client.checkout.fetch(checkoutId);
        if (fetchedCheckout?.completedAt) {
          localStorage.removeItem("checkout");
          setCheckout(null);
          setSuccessfulOrder(fetchedCheckout);
        } else {
          setCheckout(fetchedCheckout);
          localStorage.setItem("checkout", JSON.stringify(fetchedCheckout));
        }
      }
    };

    getCheckout();
  }, [setCheckout, setSuccessfulOrder, checkoutId]);

  async function getProductById(productId) {
    const product = await client.product.fetch(productId);
    return product;
  }
  async function getProductByHandle(productHandle) {
    const product = await client.product.fetchByHandle(productHandle);
    return product;
  }

  const updateLineItem = async ({ variantId, quantity }) => {
    // if no checkout id, create a new checkout
    let newCheckout = checkout || (await client.checkout.create());

    // check to see if this variantId exists in storedCheckout
    const lineItemVariant = newCheckout.lineItems?.find(
      (lineItem) => lineItem.variant.id === variantId
    );

    if (lineItemVariant) {
      const newQuantity = lineItemVariant.quantity + quantity;

      if (newQuantity) {
        newCheckout = await client.checkout.updateLineItems(newCheckout.id, [
          {
            id: lineItemVariant.id,
            quantity: newQuantity,
          },
        ]);
      } else {
        newCheckout = await client.checkout.removeLineItems(newCheckout.id, [
          lineItemVariant.id,
        ]);
      }
    } else {
      newCheckout = await client.checkout.addLineItems(newCheckout.id, [
        {
          variantId,
          quantity,
        },
      ]);
    }

    setCheckout(newCheckout);
    setSuccessfulOrder(null);
    if (typeof window !== "undefined") {
      localStorage.setItem("checkout", JSON.stringify(newCheckout));
    }
  };

  const removeLineItem = async (lineItemId) => {
    const newCheckout = await client.checkout.removeLineItems(checkout.id, [
      lineItemId,
    ]);

    setCheckout(newCheckout);
  };

  const dismissSuccessfulOrder = () => {
    setSuccessfulOrder(null);
  };

  const test = () => {
    return "testing context api";
  };

  return (
    <CartContext.Provider
      value={{
        test,
        checkout,
        updateLineItem,
        removeLineItem,
        getProductById,
        getProductByHandle,
        successfulOrder,
        dismissSuccessfulOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

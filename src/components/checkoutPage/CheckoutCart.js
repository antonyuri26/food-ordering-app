import React from "react";
import { Text } from "@chakra-ui/react";
import { useSelector } from "react-redux";

import classes from "./CheckoutCart.module.css";

import CartPreviewItems from "./CartPreviewItems";

const CheckoutCart = () => {
  const cartNotifQty = useSelector((state) => state.cart.totalQty);

  return (
    <div className={classes.col_35}>
      <div className={classes.container}>
        <Text fontSize="3xl">Summary ({cartNotifQty}) Items</Text>

        {/* list of items starts from here */}
        <CartPreviewItems />
      </div>
    </div>
  );
};

export default CheckoutCart;

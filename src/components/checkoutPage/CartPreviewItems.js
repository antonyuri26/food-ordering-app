import React from "react";
import classes from "./CartPreviewItems.module.css";
import logo from "../../assets/images/Logo_hungry.png";

import {
  FaRegMinusSquare,
  FaRegPlusSquare,
  FaRegTimesCircle,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import { Divider, Text, Image } from "@chakra-ui/react";

const CartPreviewItems = () => {
  return (
    <>
      <div className={classes.row}>
        <div className={classes.icon}>
          <IconContext.Provider
            value={{ style: { verticalAlign: "middle", color: "red" } }}
          >
            <FaRegTimesCircle />
          </IconContext.Provider>
        </div>
        <div className={classes.image}>
          {/* add product image here */}
          <Image src={logo} />
        </div>
        <div className={classes.title}>
          <Text fontSize="sm">Product Title</Text>
        </div>
        <div className={classes.qty}>
          <IconContext.Provider
            value={{
              style: { verticalAlign: "middle", color: "red" },
            }}
          >
            <FaRegPlusSquare size={"1.2rem"} />
          </IconContext.Provider>
          <Text fontSize="sm" marginLeft={"0.7rem"} marginRight={"0.7rem"}>
            1
          </Text>
          <IconContext.Provider
            value={{ style: { verticalAlign: "middle", color: "red" } }}
          >
            <FaRegMinusSquare size={"1.2rem"} />
          </IconContext.Provider>
        </div>
        <div className={classes.price}>
          <Text fontSize="sm">$25</Text>
        </div>
      </div>
      <Divider />

      <div className={classes.total_box}>
        <div className={classes.subtotal}>
          <Text fontSize="md">Subtotal</Text>
          <Text fontSize="md">$0</Text>
        </div>

        <div className={classes.tax}>
          <Text fontSize="md">Tax</Text>
          <Text fontSize="md">$0</Text>
        </div>

        <div className={classes.shipping}>
          <Text fontSize="md">Shipping</Text>
          <Text fontSize="md">$0</Text>
        </div>

        <div className={classes.total}>
          <Text fontSize="2xl">Total</Text>
          <Text fontSize="lg">$25</Text>
        </div>
      </div>
    </>
  );
};

export default CartPreviewItems;

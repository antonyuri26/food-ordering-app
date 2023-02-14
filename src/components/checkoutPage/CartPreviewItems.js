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

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/index";

const CartPreviewItems = () => {
  let addedItem = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const removeItemHandler = (item) => {
    dispatch(cartActions.removeFromCart(item));
  };

  const deleteItemHandler = (item) => {
    dispatch(cartActions.deleteFromCart(item));
  };

  const savedOrder = JSON.parse(window.localStorage.getItem("tempOrder"));

  return (
    <>
      {addedItem.items.map((item) => (
        <div className={classes.row} key={item.id}>
          <div className={classes.icon}>
            <IconContext.Provider
              value={{ style: { verticalAlign: "middle", color: "red" } }}
            >
              <FaRegTimesCircle
                onClick={() => deleteItemHandler(item)}
                cursor={"pointer"}
              />
            </IconContext.Provider>
          </div>
          <div className={classes.image}>
            {/* add product image here */}
            <Image src={item.image} />
          </div>
          <div className={classes.title}>
            <Text fontSize="sm">{item.title}</Text>
          </div>
          <div className={classes.qty}>
            <IconContext.Provider
              value={{
                style: { verticalAlign: "middle", color: "red" },
              }}
            >
              <FaRegPlusSquare
                size={"1.2rem"}
                onClick={() => addItemHandler(item)}
                cursor={"pointer"}
              />
            </IconContext.Provider>
            <Text fontSize="sm" marginLeft={"0.7rem"} marginRight={"0.7rem"}>
              {item.qty}
            </Text>
            <IconContext.Provider
              value={{ style: { verticalAlign: "middle", color: "red" } }}
            >
              <FaRegMinusSquare
                size={"1.2rem"}
                onClick={() => removeItemHandler(item)}
                cursor={"pointer"}
              />
            </IconContext.Provider>
          </div>
          <div className={classes.price}>
            <Text fontSize="sm">${item.price}</Text>
          </div>
        </div>
      ))}
      <Divider />

      <div className={classes.total_box}>
        <div className={classes.subtotal}>
          <Text fontSize="md">Subtotal</Text>
          <Text fontSize="md">
            ${(addedItem.totalPrice - addedItem.totalPrice / 11).toFixed(2)}
          </Text>
        </div>

        <div className={classes.tax}>
          <Text fontSize="md">Tax</Text>
          <Text fontSize="md">${(addedItem.totalPrice / 11).toFixed(2)}</Text>
        </div>

        <div className={classes.shipping}>
          <Text fontSize="md">Shipping</Text>
          <Text fontSize="md">Free Shipping</Text>
        </div>

        <div className={classes.total}>
          <Text fontSize="2xl">Total</Text>
          <Text fontSize="lg">${addedItem.totalPrice}</Text>
        </div>
      </div>
    </>
  );
};

export default CartPreviewItems;

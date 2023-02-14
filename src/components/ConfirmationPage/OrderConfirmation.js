import React from "react";
import classes from "./OrderConfirmation.module.css";
import logo from "../../assets/images/Logo_hungry.png";
import imgConfirm from "../../assets/images/imgconfirm.png";

import { Divider, Text, Image, Flex } from "@chakra-ui/react";

import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/index";
import { GiPartyPopper } from "react-icons/gi";

const OrderConfirmation = () => {
  const orderedItem = useSelector((state) => state.cart);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.order_header}>
          <Text fontSize={"3xl"} alignSelf={"center"}>
            Thank you for your ordering!
          </Text>
          <Text fontSize={"xl"}>{`Order Number: HG${Math.floor(
            Math.random() + 10
          )}`}</Text>
          <Image src={imgConfirm} />
          <img src={logo} className={classes.logo_header} />
        </div>
        {orderedItem.items.map((item) => (
          <div className={classes.row} key={item.id}>
            <div className={classes.image}>
              {/* add product image here */}
              <Image src={item.image} />
            </div>
            <div className={classes.title}>
              <Text fontSize="sm">{item.title}</Text>
            </div>
            <div className={classes.qty}>
              <Text fontSize="sm" marginLeft={"0.7rem"} marginRight={"0.7rem"}>
                {item.qty}
              </Text>
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
              $
              {(orderedItem.totalPrice - orderedItem.totalPrice / 11).toFixed(
                2
              )}
            </Text>
          </div>

          <div className={classes.tax}>
            <Text fontSize="md">Tax</Text>
            <Text fontSize="md">
              ${(orderedItem.totalPrice / 11).toFixed(2)}
            </Text>
          </div>

          <div className={classes.shipping}>
            <Text fontSize="md">Shipping</Text>
            <Text fontSize="md">Free Shipping</Text>
          </div>

          <div className={classes.total}>
            <Text fontSize="2xl">Total</Text>
            <Text fontSize="lg">${orderedItem.totalPrice}</Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;

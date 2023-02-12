import React from "react";
import { Link } from "react-router-dom";
import { Text } from "@chakra-ui/react";
import classes from "./FormCheckout.module.css";

const CheckoutCart = () => {
  return (
    <div className={classes.col_35}>
      <div className={classes.container}>
        <Text fontSize="3xl">Summary (1) Items</Text>

        <Text fontSize="md">
          <Link to="/">Product 1</Link>
          <span className={classes.price}>$15</span>
        </Text>
        <Text fontSize="md">
          <Link to="/">Product 2</Link>
          <span className={classes.price}>$5</span>
        </Text>
        <Text fontSize="md">
          <Link to="/">Product 3</Link>
          <span className={classes.price}>$8</span>
        </Text>
        <Text fontSize="md">
          <Link to="/">Product 4</Link>
          <span className={classes.price}>$2</span>
        </Text>
        <hr />
        <Text fontSize="md">
          Total
          <span className={classes.price}>
            <b>$30</b>
          </span>
        </Text>
      </div>
    </div>
  );
};

export default CheckoutCart;

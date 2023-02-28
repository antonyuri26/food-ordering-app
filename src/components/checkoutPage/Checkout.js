import React, { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./FormCheckout.module.css";

import FormCheckout from "./FormCheckout";
import CheckoutCart from "./CheckoutCart";
import SignInToContinue from "../auth/SignInToContinue";
import SignInDrawer from "../auth/SignInDrawer";
import { Box } from "@chakra-ui/react";

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token);

  return (
    <Box
      className={classes.row}
      style={{
        marginBottom: "0px",
        // background: "rgb(250,250,250)",
        background:
          "linear-gradient(0deg, rgba(250,250,250,1) 50%, rgba(224,217,217,1) 100%)",
        width: "100%",
      }}
    >
      <SignInDrawer isOpen={isOpen} closeDrawer={setIsOpen} />
      {/* <FormCheckout /> */}
      {isAuth || token ? (
        <FormCheckout />
      ) : (
        <SignInToContinue signInHandler={setIsOpen} />
      )}
      <CheckoutCart />
    </Box>
  );
};

export default Checkout;

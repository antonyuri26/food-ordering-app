import React, { useState } from "react";
import { useSelector } from "react-redux";
import classes from "./FormCheckout.module.css";

import FormCheckout from "./FormCheckout";
import CheckoutCart from "./CheckoutCart";
import SignInToContinue from "./SignInToContinue";
import SignInDrawer from "./SignInDrawer";

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isAuth = useSelector((state) => state.auth.isLoggedIn);
  const token = useSelector((state) => state.auth.token);

  return (
    <div
      className={classes.row}
      style={{ marginTop: "5px", marginBottom: "5px" }}
    >
      <SignInDrawer isOpen={isOpen} closeDrawer={setIsOpen} />
      {/* <FormCheckout /> */}
      {isAuth || token ? (
        <FormCheckout />
      ) : (
        <SignInToContinue signInHandler={setIsOpen} />
      )}
      <CheckoutCart />
    </div>
  );
};

export default Checkout;

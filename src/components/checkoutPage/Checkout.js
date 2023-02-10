import React, { useState } from "react";
import classes from "./FormCheckout.module.css";

import FormCheckout from "./FormCheckout";
import CheckoutCart from "./CheckoutCart";
import SignInToContinue from "./SignInToContinue";
import SignInDrawer from "./SignInDrawer";

const Checkout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classes.row}
      style={{ marginTop: "5px", marginBottom: "5px" }}
    >
      <SignInDrawer isOpen={isOpen} closeDrawer={setIsOpen} />
      <SignInToContinue signInHandler={setIsOpen} />
      {/* <FormCheckout /> */}
      <CheckoutCart />
    </div>
  );
};

export default Checkout;

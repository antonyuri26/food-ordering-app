import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import { Form, Link } from "react-router-dom";
import classes from "./FormCheckout.module.css";

const FormCheckout = () => {
  return (
    // <div className={classes.row}>
    <div className={classes.col_50}>
      <div className={classes.container}>
        <Form>
          <div className={classes.row}>
            <div className={classes.col_25}>
              <h3>Billing Address</h3>
              <label htmlFor="fname">
                <i>ICON</i> Full Name
              </label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="John M. Doe"
              />
              <label htmlFor="email">
                <i>ICON</i> Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="john@example.com"
              />
              <label htmlFor="adr">
                <i>ICON</i> Address
              </label>
              <input
                type="text"
                id="adr"
                name="address"
                placeholder="542 W. 15th Street"
              />
              <label htmlFor="city">
                <i>ICON</i> City
              </label>
              <input type="text" id="city" name="city" placeholder="New York" />

              <div className={classes.row}>
                <div className={classes.col_50}>
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" name="state" placeholder="NY" />
                </div>
                <div className={classes.col_50}>
                  <label htmlFor="zip">Zip</label>
                  <input type="text" id="zip" name="zip" placeholder="10001" />
                </div>
              </div>
            </div>

            <div className={classes.col_25}>
              <h3>Payment</h3>
              <label htmlFor="fname">Accepted Cards</label>
              <div className={classes.icon_container}>
                <i>ICON</i>
                <i>ICON</i>
                <i>ICON</i>
                <i>ICON</i>
              </div>
              <label htmlFor="cname">Name on Card</label>
              <input
                type="text"
                id="cname"
                name="cardname"
                placeholder="John More Doe"
              />
              <label htmlFor="ccnum">Credit card number</label>
              <input
                type="text"
                id="ccnum"
                name="cardnumber"
                placeholder="1111-2222-3333-4444"
              />
              <label htmlFor="expmonth">Exp Month</label>
              <input
                type="text"
                id="expmonth"
                name="expmonth"
                placeholder="September"
              />

              <div className={classes.row}>
                <div className={classes.col_50}>
                  <label htmlFor="expyear">Exp Year</label>
                  <input
                    type="text"
                    id="expyear"
                    name="expyear"
                    placeholder="2018"
                  />
                </div>
                <div className={classes.col_50}>
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" name="cvv" placeholder="352" />
                </div>
              </div>
            </div>
          </div>
          <Flex justifyContent={"space-between"}>
            <Button
              colorScheme="red"
              ariant="outline"
              type="submit"
              value="Continue to checkout"
              //   className={classes.btn}
            >
              Back to Menu
            </Button>
            <Button
              colorScheme="green"
              type="submit"
              value="Continue to checkout"
              //   className={classes.btn}
            >
              Confirm Order
            </Button>
          </Flex>
        </Form>
      </div>
    </div>
  );
};

export default FormCheckout;

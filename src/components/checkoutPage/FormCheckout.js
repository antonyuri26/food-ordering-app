import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Form, Link } from "react-router-dom";
import classes from "./FormCheckout.module.css";
import {
  FaRegUser,
  FaRegEnvelope,
  FaAddressCard,
  FaCity,
  FaCcVisa,
  FaCcAmex,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";

const FormCheckout = () => {
  return (
    // <div className={classes.row}>
    <div className={classes.col_50}>
      <div className={classes.container}>
        <Form>
          <div className={classes.row}>
            <div className={classes.col_25}>
              <Text fontSize={"xl"} my={"1rem"}>
                Billing Address
              </Text>

              <span className={classes.icon_container}>
                <FaRegUser />
              </span>
              <label htmlFor="fname" className={classes.icon_container}>
                Full Name
              </label>

              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Your name"
              />
              <span className={classes.icon_container}>
                <FaRegEnvelope />
              </span>
              <label htmlFor="email" className={classes.icon_container}>
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="test@example.com"
              />
              <span className={classes.icon_container}>
                <FaAddressCard />
              </span>
              <label htmlFor="adr" className={classes.icon_container}>
                Address
              </label>
              <input
                type="text"
                id="adr"
                name="address"
                placeholder="123 name Street"
              />
              <span className={classes.icon_container}>
                <FaCity />
              </span>
              <label htmlFor="city" className={classes.icon_container}>
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="City Name"
              />

              <div className={classes.row}>
                <div className={classes.col_25}>
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="QLD"
                  />
                </div>
                <div className={classes.col_25}>
                  <label htmlFor="zip">Postcode</label>
                  <input type="text" id="zip" name="zip" placeholder="4551" />
                </div>
              </div>
            </div>

            <div className={classes.col_25}>
              <Text fontSize={"xl"} my={"1rem"}>
                Payment
              </Text>

              <div>
                <label htmlFor="fname">Accepted Cards</label>
              </div>
              <div className={classes.icon_cards_container}>
                <span>
                  <FaCcVisa size={"1.8rem"} />
                </span>
                <span>
                  <FaCcAmex size={"1.8rem"} />
                </span>
                <span>
                  <FaCcMastercard size={"1.8rem"} />
                </span>
                <span>
                  <FaCcPaypal size={"1.8rem"} />
                </span>
              </div>

              <div>
                <label htmlFor="cname">Name on Card</label>
              </div>
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

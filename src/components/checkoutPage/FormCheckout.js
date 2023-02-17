import { Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { Form, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useSelector } from "react-redux";
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
  const navigate = useNavigate();

  const fullName = useRef();
  const email = useRef();
  const address = useRef();
  const city = useRef();
  const state = useRef();
  const postcode = useRef();
  const nameCard = useRef();
  const creditCardNumber = useRef();
  const expMonth = useRef();
  const expYear = useRef();
  const cvv = useRef();

  const order = useSelector((state) => state.cart.items);

  async function fetchDataToServer(orderDetails) {
    try {
      const date = new Date().toLocaleString("en-au", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      const response = await fetch(process.env.REACT_APP_FIREBASE_API_KEY, {
        method: "POST",
        body: JSON.stringify({
          orderDetails,
          date,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);

      if (!response.ok) {
        throw new Error("Error Ehile trying submitt your order");
      } else {
        navigate("/confirmation");
      }
    } catch (error) {
      console.log(Error);
    }
  }

  const orderSubmitHandler = (event) => {
    event.preventDefault();

    const orderDetails = {
      customerDetails: {
        fullName: fullName.current.value,
        email: email.current.value,
        address: address.current.value,
        city: city.current.value,
        state: state.current.value,
        postcode: postcode.current.value,
      },
      cardDetails: {
        nameCard: nameCard.current.value,
        creditCardNumber: creditCardNumber.current.value,
        expMonth: expMonth.current.value,
        expYear: expYear.current.value,
        cvv: cvv.current.value,
      },
      orderDetails: order,
    };

    fetchDataToServer(orderDetails);
    window.localStorage.removeItem("tempOrder");
    console.log(orderDetails);
  };

  return (
    <div className={classes.col_50}>
      <div className={classes.container}>
        <Form onSubmit={orderSubmitHandler}>
          <div className={classes.row}>
            <div className={classes.col_25}>
              <Text fontSize={"xl"} my={"1rem"}>
                Shipping Address
              </Text>

              <span className={classes.icon_container}>
                <FaRegUser />
              </span>
              <label htmlFor="fullname" className={classes.icon_container}>
                Full Name
              </label>

              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Your name"
                ref={fullName}
                autoFocus
                required
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
                ref={email}
                required
              />
              <span className={classes.icon_container}>
                <FaAddressCard />
              </span>
              <label htmlFor="address" className={classes.icon_container}>
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="123 name Street"
                ref={address}
                required
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
                ref={city}
                required
              />

              <div className={classes.row}>
                <div className={classes.col_25}>
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="QLD"
                    ref={state}
                    required
                  />
                </div>
                <div className={classes.col_25}>
                  <label htmlFor="zip">Postcode</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    placeholder="4551"
                    ref={postcode}
                    required
                  />
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
                ref={nameCard}
                required
              />
              <label htmlFor="ccnum">Credit card number</label>
              <input
                type="text"
                id="ccnum"
                name="cardnumber"
                placeholder="1111-2222-3333-4444"
                ref={creditCardNumber}
                required
              />
              <label htmlFor="expmonth">Exp Month</label>
              <input
                type="text"
                id="expmonth"
                name="expmonth"
                placeholder="September"
                ref={expMonth}
                required
              />

              <div className={classes.row}>
                <div className={classes.col_50}>
                  <label htmlFor="expyear">Exp Year</label>
                  <input
                    type="text"
                    id="expyear"
                    name="expyear"
                    placeholder="2018"
                    ref={expYear}
                    required
                  />
                </div>
                <div className={classes.col_50}>
                  <label htmlFor="cvv">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    name="cvv"
                    placeholder="352"
                    ref={cvv}
                    required
                  />
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
              onClick={() => navigate("/menu")}
            >
              Back to Menu
            </Button>
            <Button
              colorScheme="green"
              type="submit"
              value="Continue to checkout"
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

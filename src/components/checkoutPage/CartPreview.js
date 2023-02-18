import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  Box,
  PopoverCloseButton,
  Button,
  Portal,
  Text,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import classes from "./CartPreview.module.css";

import CartPreviewItems from "./CartPreviewItems";

import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/index";

function CartPreview() {
  const initRef = React.useRef();

  const dispatch = useDispatch();
  const cartNotifQty = useSelector((state) => state.cart.totalQty);

  const clearCartHandler = () => {
    dispatch(cartActions.clearCart());
  };

  return (
    <Popover
      width={"500px"}
      closeOnBlur={false}
      placement="bottom"
      initialFocusRef={initRef}
    >
      {({ isOpen, onClose }) => (
        <>
          <PopoverTrigger>
            <Button
              bg={"transparent"}
              marginRight={"-10px"}
              paddingBottom={"10px"}
              onClose={onClose}
              _hover={{
                bg: "trasparent",
              }}
            >
              <span className={classes.notification}>{cartNotifQty}</span>
              <IconContext.Provider
                value={{
                  color: "rgb(211,28,39)",
                  className: "global-class-name",
                  size: "40px",
                  style: { verticalAlign: "middle" },
                }}
              >
                <AiOutlineShoppingCart />
              </IconContext.Provider>
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent
              w={"45rem"}
              paddingLeft={"5px"}
              paddingRight={"5px"}
            >
              <PopoverHeader display={"flex"} justifyContent={"flex-start"}>
                <Text fontSize="2xl">Shopping Bag</Text>
              </PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody textAlign={"center"}>
                <Box>
                  <CartPreviewItems />
                </Box>

                <Button
                  mt={4}
                  colorScheme="red"
                  variant="outline"
                  marginBottom={"15px"}
                  marginRight={"10px"}
                  onClick={clearCartHandler}
                >
                  Clear Cart
                </Button>
                <Link to={"/checkout"}>
                  <Button
                    mt={4}
                    colorScheme="green"
                    variant="outline"
                    onClick={onClose}
                    ref={initRef}
                    marginBottom={"15px"}
                  >
                    Proceed to Checkout
                  </Button>
                </Link>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
}

export default CartPreview;

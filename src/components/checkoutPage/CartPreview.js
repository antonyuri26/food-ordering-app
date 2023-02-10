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
  useDisclosure,
  Text,
  AvatarBadge,
  Avatar,
} from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import classes from "./CartPreview.module.css";

import CartPreviewItems from "./CartPreviewItems";

function CartPreview() {
  // const { isOpen, onToggle, onClose } = useDisclosure();

  const initRef = React.useRef();

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
              <span className={classes.notification}>1</span>
              <IconContext.Provider
                value={{
                  color: "rgb(211,28,39)",
                  className: "global-class-name",
                  size: "30px",
                  style: { verticalAlign: "middle" },
                }}
              >
                <AiOutlineShoppingCart />
              </IconContext.Provider>
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent w={"35rem"}>
              <PopoverHeader display={"flex"} justifyContent={"flex-start"}>
                <Text fontSize="xl">Shopping Bag</Text>
              </PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody textAlign={"center"}>
                <Box>
                  <CartPreviewItems />
                </Box>
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
              {/* <PopoverFooter>This is the footer</PopoverFooter> */}
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
}

export default CartPreview;

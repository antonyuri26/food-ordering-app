import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  Flex,
  Image,
  Text,
  List,
  ListItem,
  ListIcon,
  Divider,
  Button,
} from "@chakra-ui/react";
import { MdCheckCircle, MdMinimize } from "react-icons/md";
import { cartActions } from "../../store";

const MealDetailContent = (props) => {
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);

  const addToCartHandler = (item) => {
    dispatch(cartActions.addToCart(item));
    setAdd(true);
    setTimeout(() => {
      setAdd(false);
    }, 1000);
  };

  const meal = props.meal;
  return (
    <>
      <Text fontSize={"2xl"} textAlign={"center"} py={"1rem"} color={"green"}>
        {meal[0].title}
      </Text>

      <Flex justifyContent={"center"}>
        <Image src={meal[0].image} w={"40%"} borderRadius="full" />
      </Flex>
      <Divider mt={"1rem"} />
      <Text fontSize={"xl"} mt={"1rem"}>
        Ingredients
      </Text>
      <Box display={"flex"} justifyContent={"center"} my={"1rem"}>
        <Box w={"45%"}>
          <List spacing={3} textAlign={"start"}>
            {meal[0].ingredients.map((item) => (
              <ListItem key={item}>
                <ListIcon as={MdMinimize} color="green.500" />
                {item}
              </ListItem>
            ))}
          </List>
        </Box>

        <Box w={"45%"}>
          <List spacing={3} textAlign={"start"}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Order Id: {meal[0].id}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Catedory: {meal[0].category}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Country: {meal[0].area}
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Tags: {meal[0].tags}
            </ListItem>
          </List>
        </Box>
      </Box>
      <Divider my={"1rem"} />
      <Box pb={"2rem"}>
        <Text fontSize={"xl"} textAlign={"center"} color={"red"}>
          Price: ${meal[0].price}
        </Text>
      </Box>
      <Box
        textAlign={"center"}
        pb={"3rem"}
        display={"flex"}
        justifyContent={"center"}
      >
        <Button
          color={"white"}
          colorScheme="red"
          onClick={() =>
            addToCartHandler({
              id: meal[0].id,
              image: meal[0].image,
              qty: 1,
              title: meal[0].title,
              price: meal[0].price,
            })
          }
        >
          + Add to cart
        </Button>
        {add && (
          <Text color={"green"} paddingLeft={"1rem"} alignSelf={"center"}>
            Item Added to cart
          </Text>
        )}
      </Box>
    </>
  );
};

export default MealDetailContent;

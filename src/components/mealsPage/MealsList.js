import React, { useState } from "react";
import {
  Image,
  Stack,
  Text,
  Button,
  ButtonGroup,
  Heading,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import classes from "./MealsList.module.css";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store";
import Modal from "../layout/Modal";
import MealDetails from "./MealDetails";

const MealsList = (props) => {
  const dispatch = useDispatch();

  const addToCartHandler = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [meal, setMeal] = useState();

  const mealDetailHandler = (meal) => {
    setModalIsOpen(true);
    setMeal(meal);
  };

  return (
    <>
      <Stack
        direction="row"
        wrap={"wrap"}
        justifyContent={"flex-start"}
        alignContent={"flex-start"}
        h={"80%"}
        rowGap={"1rem"}
        columnGap={"0.5rem"}
        marginY={"7rem"}
        marginLeft={"5rem"}
      >
        {modalIsOpen && (
          <Modal onClose={() => setModalIsOpen(false)}>
            <MealDetails meal={meal} />
          </Modal>
        )}
        {props.meals.map((meal) => (
          <Card
            maxW="200px"
            h={"360px"}
            className={classes.cardFix}
            key={meal.id}
          >
            <CardBody p={2}>
              <Image
                src={meal.image}
                borderRadius="md"
                w={"200px"}
                onClick={() => mealDetailHandler(meal)}
                cursor={"pointer"}
              />
              <Stack mt="4" spacing="2">
                <Heading size="sm" textAlign={"center"}>
                  {meal.title}
                </Heading>
                <Text color="blue.600" fontSize="xl" textAlign={"center"}>
                  ${meal.price}
                </Text>
              </Stack>
            </CardBody>
            <CardFooter justifyContent={"center"}>
              <ButtonGroup spacing="2" marginTop={"-2rem"}>
                <Button
                  colorScheme="red"
                  variant="outline"
                  color={"rgb(211,28,39)"}
                  onClick={() =>
                    addToCartHandler({
                      id: meal.id,
                      image: meal.image,
                      qty: 1,
                      title: meal.title,
                      price: meal.price,
                    })
                  }
                >
                  + Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Stack>
    </>
  );
};

export default MealsList;

import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Heading,
  Text,
  Image,
  ButtonGroup,
  Stack,
  Button,
  Box,
  Center,
  Flex,
} from "@chakra-ui/react";
import { cartActions } from "../../store";
import Modal from "../layout/Modal";
import MealDetails from "../mealsPage/MealDetails";

const PopFoods = (props) => {
  const dispatch = useDispatch();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [meal, setMeal] = useState();

  const addToCartHandler = (item) => {
    dispatch(cartActions.addToCart(item));
  };

  const mealDetailHandler = (meal) => {
    setModalIsOpen(true);
    setMeal(meal);
  };

  return (
    <>
      <Flex justifyContent={"center"}>
        {modalIsOpen && (
          <Modal onClose={() => setModalIsOpen(false)}>
            <MealDetails meal={meal} />
          </Modal>
        )}
        {props.popMeals.map((meal) => (
          <Center py={12}>
            <Box
              role={"group"}
              p={6}
              maxW={"330px"}
              w={"full"}
              bg={("white", "rgb(224,217,217)")}
              boxShadow={"2xl"}
              rounded={"lg"}
              pos={"relative"}
              zIndex={1}
              mr={"1rem"}
            >
              <Box
                rounded={"lg"}
                mt={-12}
                pos={"relative"}
                height={"230px"}
                _after={{
                  transition: "all .3s ease",
                  content: '""',
                  w: "full",
                  h: "full",
                  pos: "absolute",
                  top: 5,
                  left: 0,
                  backgroundImage: `url(${meal.image})`,
                  filter: "blur(15px)",
                  zIndex: -1,
                }}
                _groupHover={{
                  _after: {
                    filter: "blur(20px)",
                  },
                }}
              >
                <Image
                  rounded={"lg"}
                  height={230}
                  width={282}
                  objectFit={"cover"}
                  src={meal.image}
                  _hover={{
                    transform: "scale(1.05)",
                    transition: "transform .2s",
                  }}
                  onClick={() => mealDetailHandler(meal)}
                  cursor={"pointer"}
                />
              </Box>
              <Stack pt={10} align={"center"}>
                <Text
                  color={"gray.500"}
                  fontSize={"sm"}
                  textTransform={"uppercase"}
                >
                  Brand
                </Text>
                <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
                  {meal.title}
                </Heading>
                <Stack direction={"row"} align={"center"}>
                  <Text fontWeight={800} fontSize={"xl"}>
                    ${meal.price}
                  </Text>
                  <Text textDecoration={"line-through"} color={"gray.600"}>
                    ${meal.price + meal.price * 0.2}
                  </Text>
                </Stack>
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
              </Stack>
            </Box>
          </Center>
        ))}
      </Flex>
    </>
  );
};

export default PopFoods;

// export async function loader({ request, params }) {
//   const res = await fetch(
//     `https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`
//   );

//   const data = await res.json();
//   const mealList = data.meals.map((item) => {
//     return {
//       title: item.strMeal.substring(0, 36),
//       id: item.idMeal,
//       image: item.strMealThumb,
//       price: Math.floor(Math.random() * 20) + 10,
//     };
//   });

//   if (!res.ok) {
//     throw json({ message: "Could not Find the data" }, { status: 505 });
//   } else {
//     return mealList;
//   }
// }

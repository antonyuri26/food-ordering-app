import React from "react";
import {
  Image,
  Stack,
  Text,
  Button,
  ButtonGroup,
  Heading,
  Divider,
  Card,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import classes from "./MealsList.module.css";

// props.meals
const MealsList = (props) => {
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
        marginY={"1rem"}
        marginLeft={"3rem"}
      >
        {props.meals.map((meal) => (
          <Card maxW="200px" h={"360px"} className={classes.cardFix}>
            <CardBody p={2}>
              <Image src={meal.image} borderRadius="md" w={"200px"} />
              <Stack mt="4" spacing="2">
                <Heading size="sm" textAlign={"center"}>
                  {meal.title}
                </Heading>
                <Text color="blue.600" fontSize="xl" textAlign={"center"}>
                  $25
                </Text>
              </Stack>
            </CardBody>
            <CardFooter justifyContent={"center"}>
              <ButtonGroup spacing="2" marginTop={"-2rem"}>
                <Button
                  colorScheme="red"
                  variant="outline"
                  color={"rgb(211,28,39)"}
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

  // (
  //   <Stack
  //     direction="row"
  //     wrap={"wrap"}
  //     justifyContent={"center"}
  //     alignContent={"flex-start"}
  //     h={"80%"}
  //     rowGap={"1rem"}
  //     columnGap={"0.5rem"}
  //     marginY={"1rem"}
  //   >
  //     {props.meals.map((meal) => (
  //       <>
  //         <Image
  //           boxSize="250px"
  //           objectFit="cover"
  //           src={meal.image}
  //           alt={meal.title}
  //           key={meal.id}
  //           border={"1px solid rgb(211,28,39)"}
  //           borderRadius={"5px"}
  //           className={classes.imagem}
  //         />
  //         {/* <Text>{meal.title}</Text> */}
  //       </>
  //     ))}
  //   </Stack>
  // );
};

export default MealsList;

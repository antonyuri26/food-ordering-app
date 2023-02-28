import React from "react";
import { Image, Stack } from "@chakra-ui/react";
import classes from "./CategoryList.module.css";
import { Link } from "react-router-dom";

const CategoryList = (props) => {
  return (
    <Stack
      direction="row"
      wrap={"wrap"}
      justifyContent={"center"}
      alignContent={"flex-start"}
      h={"80%"}
      rowGap={"1rem"}
      columnGap={"0.5rem"}
      marginY={"7rem"}
      marginLeft={"5rem"}
    >
      {props.categories.map((category) => (
        <Link to={`/menu/${category.category}`} key={category.id}>
          <Image
            boxSize="250px"
            objectFit="cover"
            src={category.image}
            alt={category.category}
            border={"1px solid rgb(211,28,39)"}
            borderRadius={"5px"}
            className={classes.imagem}
          />
        </Link>
      ))}
    </Stack>
  );
};

export default CategoryList;

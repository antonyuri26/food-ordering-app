import React from "react";
import { Image, Stack } from "@chakra-ui/react";
import classes from "./CategoryList.module.css";

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
      marginLeft={"1rem"}
    >
      {props.categories.map((category) => (
        <Image
          boxSize="250px"
          objectFit="cover"
          src={category.image}
          alt={category.category}
          key={category.id}
          border={"1px solid rgb(211,28,39)"}
          borderRadius={"5px"}
          className={classes.imagem}
        />
      ))}
    </Stack>
  );
};

export default CategoryList;

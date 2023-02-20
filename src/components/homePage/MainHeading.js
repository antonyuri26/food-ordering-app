import React from "react";
import { Heading } from "@chakra-ui/react";

const MainHeading = (props) => {
  return (
    <Heading
      bg={"rgb(224,217,217)"}
      borderRadius={"10px"}
      textAlign={"center"}
      padding={"1rem"}
      mt={"0"}
      mb={"3rem"}
    >
      {props.children}
    </Heading>
  );
};

export default MainHeading;

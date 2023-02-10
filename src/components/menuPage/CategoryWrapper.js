import React from "react";
import { Flex } from "@chakra-ui/react";
import SideBar from "../layout/SideBar";

const CategoryWrapper = (props) => {
  return (
    <Flex background={"rgb(224,217,217)"}>
      <SideBar />
      {props.content}
    </Flex>
  );
};

export default CategoryWrapper;

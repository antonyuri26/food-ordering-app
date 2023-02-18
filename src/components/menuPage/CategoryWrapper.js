import React from "react";
import { Flex } from "@chakra-ui/react";
import SideBar from "../layout/SideBar";

const CategoryWrapper = (props) => {
  return (
    <Flex
      css={{
        // background: "rgb(250,250,250)",
        background:
          "linear-gradient(0deg, rgba(250,250,250,1) 50%, rgba(224,217,217,1) 100%)",
      }}
    >
      <SideBar />
      {props.content}
    </Flex>
  );
};

export default CategoryWrapper;

import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Flex } from "@chakra-ui/react";

const RootLayout = () => {
  return (
    <>
      <Flex flexDir={"column"}>
        <NavBar />
        <main>
          <Outlet />
        </main>
        <Footer />
        //{" "}
      </Flex>
    </>
  );
};

export default RootLayout;

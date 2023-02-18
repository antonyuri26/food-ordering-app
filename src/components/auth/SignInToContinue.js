import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const SignInToContinue = (props) => {
  const singInToContinueHandler = () => {
    props.signInHandler(true);
  };

  return (
    <>
      <Box
        css={{
          // background: "rgb(250,250,250)",
          background:
            "linear-gradient(0deg, rgba(250,250,250,1) 50%, rgba(224,217,217,1) 100%)",
        }}
        w="50%"
        minH={"606px"}
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        marginLeft={"16px"}
      >
        <Box
          bg="rgb(242,242,242)"
          m={"10rem"}
          w="50%"
          h="30%"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-around"}
          borderRadius={"10px"}
          padding={"3%"}
        >
          <Text textAlign={"center"}>Please signin to continue</Text>
          <Button
            w={"50%"}
            alignSelf={"center"}
            colorScheme="red"
            variant="outline"
            onClick={singInToContinueHandler}
          >
            Login
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default SignInToContinue;

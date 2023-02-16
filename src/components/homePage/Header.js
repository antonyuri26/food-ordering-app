import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import hero from "../../assets/images/hero.png";
import classes from "./Header.module.css";
import apple from "../../assets/images/App_Store_Badget.png";
import google from "../../assets/images/google-play-badge.png";

export default function Header() {
  return (
    <div className={classes.hero_container}>
      <Flex w={"500px"} h={"350px"} marginLeft={"15rem"} flexDir={"column"}>
        <Text fontSize={"5xl"}>
          It's not <span className={classes.red_heading}>just Food,</span> It's
          an <span className={classes.red_heading}>Experience!</span>
        </Text>
        <Text fontSize={"xl"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni
          delectus tenetur autem, sint veritatis!
        </Text>
        <Box display={"flex"}>
          <Image src={apple} w={"150px"} h={"45px"} alignSelf={"center"} />
          <Image src={google} w={"175px"} />
        </Box>
      </Flex>
    </div>
    // <Stack minH={"80vh"} direction={{ base: "column", md: "row" }}>
    //   <Flex p={8} flex={1} align={"center"} justify={"center"}>
    //     <Stack spacing={6} w={"full"} maxW={"lg"}>
    //       <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
    //         <Text
    //           as={"span"}
    //           position={"relative"}
    //           _after={{
    //             content: "''",
    //             width: "full",
    //             height: useBreakpointValue({ base: "20%", md: "30%" }),
    //             position: "absolute",
    //             bottom: 1,
    //             left: 0,
    //             bg: "blue.400",
    //             zIndex: -1,
    //           }}
    //         >
    //           Freelance
    //         </Text>
    //         <br />{" "}
    //         <Text color={"blue.400"} as={"span"}>
    //           Design Projects
    //         </Text>{" "}
    //       </Heading>
    //       <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
    //         The project board is an exclusive resource for contract work. It's
    //         perfect for freelancers, agencies, and moonlighters.
    //       </Text>
    //       <Stack direction={{ base: "column", md: "row" }} spacing={4}>
    //         <Button
    //           rounded={"full"}
    //           bg={"blue.400"}
    //           color={"white"}
    //           _hover={{
    //             bg: "blue.500",
    //           }}
    //         >
    //           Create Project
    //         </Button>
    //         <Button rounded={"full"}>How It Works</Button>
    //       </Stack>
    //     </Stack>
    //   </Flex>
    //   <Flex flex={1}>
    //     <Image alt={"Login Image"} objectFit={"cover"} src={hero} />
    //   </Flex>
    // </Stack>
  );
}

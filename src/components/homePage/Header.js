import { Flex, Image, Text, Box } from "@chakra-ui/react";
import classes from "./Header.module.css";
import apple from "../../assets/images/App_Store_Badget.png";
import google from "../../assets/images/google-play-badge.png";
import { useMediaQuery } from "@chakra-ui/react";

export default function Header() {
  const [isLargerThan1040] = useMediaQuery("(max-width: 1040px)");
  const [isLargerThan900] = useMediaQuery("(max-width: 900px)");
  const [isLargerThan590] = useMediaQuery("(max-width: 590px)");
  const [isLargerThan450] = useMediaQuery("(max-width: 450px)");

  return (
    <div className={classes.hero_container}>
      <Flex
        w={"500px"}
        marginLeft={isLargerThan1040 ? "3rem" : "15rem"}
        flexDir={"column"}
        justifyContent={"center"}
      >
        <Box w={isLargerThan900 ? "60%" : "100%"} mt={"3rem"}>
          <Text fontSize={isLargerThan900 ? "4xl" : "5xl"}>
            It's not <span className={classes.red_heading}>just Food,</span>{" "}
            It's an <span className={classes.red_heading}>Experience!</span>
          </Text>
          {isLargerThan450 ? (
            ""
          ) : (
            <Text fontSize={isLargerThan900 ? "md" : "xl"}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              magni delectus tenetur autem, sint veritatis!
            </Text>
          )}
          {isLargerThan590 ? (
            ""
          ) : (
            <Box display={"flex"}>
              <Image src={apple} w={"150px"} h={"45px"} alignSelf={"center"} />
              <Image src={google} w={"175px"} />
            </Box>
          )}
        </Box>
      </Flex>
    </div>
  );
}

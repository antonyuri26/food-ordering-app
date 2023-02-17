import React from "react";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import whyus from "../../assets/images/whyus.jpg";
import whyus2 from "../../assets/images/whyus2.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMediaQuery } from "@chakra-ui/react";

const WhyUs = () => {
  const [isLargerThan1200] = useMediaQuery("(max-width: 1200px)");

  return (
    <Box my={"3rem"} textAlign={"center"}>
      <Flex
        flexDir={isLargerThan1200 ? "column" : "row"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box w={isLargerThan1200 ? "100%" : "30%"}>
          <LazyLoadImage src={whyus} w={"100%"} loading={"lazy"} />
          <a href="https://www.freepik.com/free-photo/sweet-potato-falafel-recipe-idea-vegan_17225072.htm#query=tasty%20food&position=10&from_view=search&track=ais">
            <Text fontSize={"xs"} textAlign={"right"}>
              Image by rawpixel.com on Freepik
            </Text>
          </a>
        </Box>
        <Flex w={isLargerThan1200 ? "80%" : "40%"} justifyContent={"center"}>
          <List spacing={3}>
            <Text fontSize={["md", "lg", "xl"]}>
              Fresh and tasty food delivered at your door.
            </Text>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>

            <Text fontSize={"xl"} pt={"2rem"}>
              Free Delivery included for any order.
            </Text>

            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
            <Text fontSize={"xl"} pt={"2rem"}>
              Track the progress of your order online.
            </Text>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.500" />
              Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
            </ListItem>
          </List>
        </Flex>
        <Box w={isLargerThan1200 ? "100%" : "30%"}>
          <LazyLoadImage src={whyus2} w={"100%"} loading="lazy" />
          <a href="https://www.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_7677643.htm#query=tasty%20food&position=8&from_view=search&track=ais">
            <Text fontSize={"xs"} textAlign={"right"}>
              Image by timolina on Freepik
            </Text>
          </a>
        </Box>
      </Flex>
    </Box>
  );
};

export default WhyUs;

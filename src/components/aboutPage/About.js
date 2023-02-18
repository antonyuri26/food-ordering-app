import React, { useMemo } from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import classes from "./about.module.css";
import { MdCheckCircle } from "react-icons/md";

import { List, ListItem, ListIcon } from "@chakra-ui/react";
import logo from "../../assets/images/Logo_hungry.png";
import { useMediaQuery } from "@chakra-ui/react";

export default function About() {
  const [isLargerThan1200] = useMediaQuery("(max-width: 1200px)");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOODLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }
  return (
    <Flex
      css={{
        // background: "rgb(250,250,250)",
        background:
          "linear-gradient(0deg, rgba(250,250,250,1) 50%, rgba(224,217,217,1) 100%)",
      }}
    >
      <Box
        w={"50%"}
        display={"flex"}
        flexDirection="column"
        justifyContent={"center"}
        alignItems={"center"}
        margin={"0 auto"}
        marginTop={"2.5rem"}
      >
        <Text fontSize={"4xl"}>About Us</Text>
        <Text fontSize={"l"} my={"2rem"} textAlign={"justify"}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
          autem voluptatem mollitia quam tenetur, commodi totam eligendi
          repudiandae laboriosam? Eius quaerat totam neque doloribus nostrum
          aperiam nisi quam repellat aliquid!
        </Text>
        <Box
          w={"100%"}
          display={"flex"}
          mb={"2rem"}
          flexDir={isLargerThan1200 ? "column" : "row"}
        >
          <Map />
          <Box
            marginLeft={"2rem"}
            textAlign={"justify"}
            display={"flex"}
            flexDir={"column"}
            alignItems={"center"}
          >
            <Text textAlign={"center"} fontSize={"xl"} mb={"2rem"}>
              Location
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="green.500" />
                Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
              </ListItem>
              {/* You can also use custom icons from react-icons */}
            </List>
            <Image src={logo} mt={"3rem"} w={"250px"} />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

const Map = () => {
  const center = useMemo(() => ({ lat: -26.65, lng: 153.06 }), []);
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName={classes.map_container}
    >
      <Marker position={{ lat: -26.65, lng: 153.06 }} />
    </GoogleMap>
  );
};

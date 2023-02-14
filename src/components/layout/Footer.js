import React from "react";
import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import logo from "../../assets/images/Logo_hungry.png";

const Logo = (props) => {
  return <Image src={logo} alt="Hungry Logo" w={"130px"} minW={"100px"} />;
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.300", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

//Footer Links Hover Effect
const linkStyle = {
  textDecoration: "none",
  color: "rgb(211, 28, 39)",
};

//Footer Links
const companyLinks = [
  { title: "About Us", href: "/about" },
  { title: "Blog", href: "#" },
  { title: "Contact Us", href: "/contact" },
  { title: "Menu", href: "/menu" },
  { title: "Testimonials", href: "#" },
];

const supportLinks = [
  { title: "Help Center", href: "#" },
  { title: "Terms of Service", href: "#" },
  { title: "Legal", href: "#" },
  { title: "Privacy Policy", href: "/menu" },
  { title: "Status", href: "#" },
];

const deliveryLinks1 = [
  { title: "Monday - Thursday", href: "#" },
  { title: "5:00pm - 8pm", href: "#" },
];

const deliveryLinks2 = [
  { title: "Friday - Sunday", href: "#" },
  { title: "11:00am - 9:00pm", href: "#" },
];

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("rgb(224,217,217)", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      style={{ borderRadius: "0 0 7px 7px" }}
      borderTop={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.900")}
    >
      <Container as={Stack} maxW={"92%"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "2fr 1fr", md: "2fr 1.3fr 1fr 1fr 2fr" }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue("gray.700", "white")} />
            </Box>
            <Text fontSize={"sm"}>
              © 2023 Website made by Antonio Souza. All Rights Reserved.
            </Text>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <Stack spacing={2}>
            <ListHeader>Delivery Time</ListHeader>

            {deliveryLinks1.map((link) => (
              <Link
                href={link.href}
                style={{ textDecoration: "none" }}
                _hover={linkStyle}
                key={link.title}
              >
                {link.title}
              </Link>
            ))}

            {deliveryLinks2.map((link) => (
              <Link
                href={link.href}
                style={{ textDecoration: "none" }}
                _hover={linkStyle}
                key={link.title}
              >
                {link.title}
              </Link>
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            {companyLinks.map((link) => (
              <Link
                href={link.href}
                style={{ textDecoration: "none" }}
                _hover={linkStyle}
                key={link.title}
              >
                {link.title}
              </Link>
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Support</ListHeader>

            {supportLinks.map((link) => (
              <Link
                href={link.href}
                style={{ textDecoration: "none" }}
                _hover={linkStyle}
                key={link.title}
              >
                {link.title}
              </Link>
            ))}
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={"row"}>
              <Input
                placeholder={"Your email address"}
                bg={useColorModeValue("blackAlpha", "whiteAlpha.100")}
                border={0}
                _focus={{
                  bg: "whiteAlpha.300",
                }}
              />
              <IconButton
                bg={useColorModeValue("rgb(211,28,39)", "green.800")}
                color={useColorModeValue("white", "gray.800")}
                _hover={{
                  bg: "rgb(250,28,39)",
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;

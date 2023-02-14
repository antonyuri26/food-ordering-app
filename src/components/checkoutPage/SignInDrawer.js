import React from "react";
import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  useDisclosure,
  Box,
  FormControl,
  FormLabel,
  Stack,
  useColorModeValue,
  Text,
  Link,
  Checkbox,
  Flex,
  Heading,
  FormErrorMessage,
} from "@chakra-ui/react";

import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";

function SignInDrawer(props) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const dispatch = useDispatch();

  const closeDrawer = () => {
    props.closeDrawer(false);
  };

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  function validatePassword(value) {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  }

  return (
    <>
      <Drawer
        isOpen={props.isOpen}
        placement="right"
        onClose={closeDrawer}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {/* <DrawerHeader>Sign in to your account</DrawerHeader> */}

          <DrawerBody>
            <Stack
              spacing={4}
              w={"full"}
              maxW={"md"}
              height={"500px"}
              bg={useColorModeValue("white", "gray.700")}
              rounded={"xl"}
              p={6}
              my={10}
            >
              <Flex
                minH={"80vh"}
                align={"flex-start"}
                justify={"center"}
                bg={useColorModeValue("white.50", "gray.800")}
              >
                <Stack spacing={2} mx={"auto"} maxW={"lg"} py={2} px={6}>
                  <Stack align={"center"}>
                    <Heading fontSize={"2xl"} textAlign="center">
                      Sign in to your account
                    </Heading>
                  </Stack>
                  <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                  >
                    <Stack spacing={4}>
                      <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values, actions) => {
                          setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            actions.setSubmitting(false);
                            closeDrawer();
                            window.localStorage.setItem("token", Math.random());
                            dispatch(authActions.logIn());

                            // navigate("/dashboard");
                          }, 1000);
                        }}
                      >
                        {(props) => (
                          <Form>
                            <Field name="email" validate={validateEmail}>
                              {({ field, form }) => (
                                <FormControl
                                  id="email"
                                  isInvalid={
                                    form.errors.email && form.touched.email
                                  }
                                >
                                  <FormLabel>Email address</FormLabel>
                                  <Input
                                    {...field}
                                    type="email"
                                    placeholder="Email"
                                  />
                                  <FormErrorMessage>
                                    {form.errors.email}
                                  </FormErrorMessage>
                                </FormControl>
                              )}
                            </Field>
                            <Field name="password" validate={validatePassword}>
                              {({ field, form }) => (
                                <FormControl
                                  id="password"
                                  isInvalid={
                                    form.errors.password &&
                                    form.touched.password
                                  }
                                >
                                  <FormLabel>Password</FormLabel>
                                  <Input {...field} type="password" />
                                  <FormErrorMessage>
                                    {form.errors.email}
                                  </FormErrorMessage>
                                </FormControl>
                              )}
                            </Field>
                            <Stack spacing={10}>
                              <Stack
                                direction={{ base: "column", sm: "row" }}
                                align={"start"}
                                justify={"space-between"}
                              >
                                <Checkbox>Remember me</Checkbox>
                                <Link color={"blue.400"}>Forgot password?</Link>
                              </Stack>
                              <Button
                                type="submit"
                                isLoading={props.isSubmitting}
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                  bg: "blue.500",
                                }}
                              >
                                Sign in
                              </Button>
                            </Stack>
                          </Form>
                        )}
                      </Formik>
                    </Stack>
                  </Box>
                </Stack>
              </Flex>

              {/* <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  placeholder="your-email@example.com"
                  _placeholder={{ color: "gray.500" }}
                  type="email"
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={6}>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Submit
                </Button>
              </Stack> */}
            </Stack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SignInDrawer;

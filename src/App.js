import React from "react";
import Fonts from "./theme/Fonts";
import theme from "./theme/theme";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";

import HomePage from "./components/homePage/HomePage";
import MenuPage from "./components/menuPage/MenuPage";
import About from "./components/aboutPage/About";
import Contact from "./components/contactPage/Contact";
import ErrorPage from "./components/errorPage/ErrorPage";
import RootLayout from "./components/layout/RootLayout";
import SignIn from "./components/auth/SignIn";
import Register from "./components/auth/Register";
import Cart from "./components/cartPage/Cart";
import CheckOut from "./components/checkoutPage/CheckOut";

import { ChakraProvider, Container } from "@chakra-ui/react";

//creating routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      { path: "/menu", element: <MenuPage /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/register", element: <Register /> },
      { path: "/cart", element: <Cart /> },
      { path: "/checkout", element: <CheckOut /> },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Container
        maxW="95%"
        mt={"2.2%"}
        style={{
          borderRadius: "10px 10px 0 0",
          paddingLeft: "0",
          paddingRight: "0",
        }}
      >
        <Fonts />
        <RouterProvider router={router} />
      </Container>
    </ChakraProvider>
  );
}

export default App;
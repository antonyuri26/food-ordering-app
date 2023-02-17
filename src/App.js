import React, { lazy, Suspense } from "react";
import Fonts from "./theme/Fonts";
import theme from "./theme/theme";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider, Container } from "@chakra-ui/react";

import HomePage from "./components/homePage/HomePage";
// import MenuPage from "./components/menuPage/MenuPage";
import About from "./components/aboutPage/About";
import Contact from "./components/contactPage/Contact";
import ErrorPage from "./components/errorPage/ErrorPage";
import RootLayout from "./components/layout/RootLayout";
import Register from "./components/auth/Register";
import Checkout from "./components/checkoutPage/Checkout";
// import MealsPage from "./components/mealsPage/MealsPage";

import { loader as mealsLoader } from "./components/mealsPage/MealsPage";
import { loader as popMealsLoader } from "./components/homePage/HomePage";
import OrderConfirmation from "./components/confirmationPage/OrderConfirmation";

const MenuPage = lazy(() => import("./components/menuPage/MenuPage"));

const MealsPage = lazy(() => import("./components/mealsPage/MealsPage"));

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
        loader: popMealsLoader,
      },
      {
        path: "/menu",
        element: (
          <Suspense>
            <MenuPage />
          </Suspense>
        ),
      },
      {
        path: "/menu/:categoryId",
        element: (
          <Suspense>
            <MealsPage />
          </Suspense>
        ),
        loader: mealsLoader,
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/register", element: <Register /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/confirmation", element: <OrderConfirmation /> },
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

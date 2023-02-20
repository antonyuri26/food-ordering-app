import React, { lazy, Suspense } from "react";
import Fonts from "./theme/Fonts";
import theme from "./theme/theme";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import HomePage from "./components/homePage/HomePage";
import Contact from "./components/contactPage/Contact";
import ErrorPage from "./components/errorPage/ErrorPage";
import RootLayout from "./components/layout/RootLayout";
import Register from "./components/auth/Register";
import Checkout from "./components/checkoutPage/Checkout";

import { loader as mealsLoader } from "./components/mealsPage/MealsPage";
import { loader as popMealsLoader } from "./components/homePage/HomePage";
import OrderConfirmation from "./components/confirmationPage/OrderConfirmation";

const MenuPage = lazy(() => import("./components/menuPage/MenuPage"));
const MealsPage = lazy(() => import("./components/mealsPage/MealsPage"));
const About = lazy(() => import("./components/aboutPage/About"));

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
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      { path: "/register", element: <Register /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/confirmation", element: <OrderConfirmation /> },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;

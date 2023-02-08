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

import { ChakraProvider } from "@chakra-ui/react";

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
    ],
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;

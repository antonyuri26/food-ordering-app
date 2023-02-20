import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <main style={{ minWidth: "750px" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;

import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer.jsx";
import Navbar from "./navbar/Navbar.jsx";

function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Main;

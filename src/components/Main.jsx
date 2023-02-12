import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer.jsx";
import Navbar from "./navbar/Navbar.jsx";
import useFetch from "../../useFetch.js";

function Main() {
  const [product, setProduct] = useFetch("http://localhost:4321/api/products");
  return (
    <div>
      <Navbar setProduct={setProduct} />
      <Outlet context={product} />
      <Footer />
    </div>
  );
}

export default Main;

import React from "react";
import Welcome from "./Welcome/Welcome";
import Category from "./Category/Category";
import Background from "./Background";
import NewProduct from "./NewProduct/NewProduct";
import Samples from "./NewProduct/Samples";
import Products from "./Products/Products";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <>
      <Background>
        <Welcome />
      </Background>
      <Category />
      <NewProduct />
      <Samples />
      <Products />
      <Footer />
    </>
  );
}

export default Home;

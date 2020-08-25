import React from "react";
import Layout from "./Layout";
import NavBar from "./NavBar/NavBar";
import Welcome from "./Welcome/Welcome";
import Category from "./Category/Category";
import Background from "./Background";
import NewProduct from "./NewProduct/NewProduct";
import Samples from "./NewProduct/Samples";
import Products from "./Products/Products";

function App() {
  return (
    <Layout>
      <Background>
        <NavBar />
        <Welcome />
      </Background>
      <Category />
      <NewProduct />
      <Samples />
      <Products />
    </Layout>
  );
}

export default App;

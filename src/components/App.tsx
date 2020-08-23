import React from "react";
import Layout from "./Layout";
import NavBar from "./NavBar/NavBar";
import Welcome from "./Welcome/Welcome";
import Category from "./Category/Category";
import Background from "./Background";
import NewProduct from "./NewProduct/NewProduct";

function App() {
  return (
    <Layout>
      <Background>
        <NavBar />
        <Welcome />
      </Background>
      <Category />
      <NewProduct />
    </Layout>
  );
}

export default App;

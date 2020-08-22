import React from "react";
import Layout from "./Layout";
import NavBar from "./NavBar/NavBar";
import Welcome from "./Welcome/Welcome";
import Background from "./Background";

function App() {
  return (
    <Layout>
      <Background>
        <NavBar />
        <Welcome />
      </Background>
    </Layout>
  );
}

export default App;

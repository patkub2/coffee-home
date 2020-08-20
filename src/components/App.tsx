import React from "react";
import Layout from "./Layout";
import NavBar from "./NavBar/NavBar";
import Welcome from "./Welcome/Welcome";

function App() {
  return (
    <div>
      <Layout>
        <NavBar />
        <Welcome />
      </Layout>
    </div>
  );
}

export default App;

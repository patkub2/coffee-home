import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Layout from "./Layout";
import Home from "./home/Home";
import Login from "./login/Login";
import NavBar from "./NavBar/NavBar";
import { AuthContextProvider } from "../context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <AuthContextProvider>
          <Layout>
            <NavBar />
            <Switch>
              <Redirect from="/" to="/home" exact />
              <Route path="/home" component={Home} />
              <Route path="/login" component={Login} />
            </Switch>
          </Layout>
        </AuthContextProvider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;

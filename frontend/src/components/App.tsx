import React, { useContext, useState } from "react";
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch,
  useLocation,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./home/Home";
import Login from "./login/Login";
import Shop from "./shop/Shop";

import NavBar from "./NavBar/NavBar";

import { AuthContextProvider, AuthContext } from "../context/auth-context";

function App() {
  const location = useLocation();
  const { token } = useContext(AuthContext);

  return (
    <React.Fragment>
      <AuthContextProvider>
        <Layout>
          <NavBar
            color={location.pathname === "/shop" ? "black" : "white"}
            backgroundColor={
              location.pathname === "/shop" ? "none" : "rgba(5, 5, 5, 0.3)"
            }
          />
          <Switch>
            <Redirect from="/" to="/home" exact />
            {token && <Redirect from="/login" to="/home" exact />}
            <Route path="/home" component={Home} />
            <Route path="/shop" component={Shop} />
            <Route path="/login" component={Login} />
          </Switch>
        </Layout>
      </AuthContextProvider>
    </React.Fragment>
  );
}

export default App;

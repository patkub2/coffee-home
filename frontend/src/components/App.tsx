import React, { useContext } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Layout from "./Layout";
import Home from "./home/Home";
import Login from "./login/Login";
import NavBar from "./NavBar/NavBar";
import { AuthContextProvider, AuthContext } from "../context/auth-context";

function App() {
  const { token, username } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <React.Fragment>
        <AuthContextProvider>
          <Layout>
            <NavBar />
            <Switch>
              <Redirect from="/" to="/home" exact />
              {token && <Redirect from="/login" to="/home" exact />}
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

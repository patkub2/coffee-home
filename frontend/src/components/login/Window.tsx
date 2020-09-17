import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory, NavLink } from "react-router-dom";
//import { AuthContext, AuthContextProvider } from "../../context/AuthContext";
import "./window.css";
import { AuthContext } from "../../context/auth-context";
import { Formik, FormikHelpers, Form, Field } from "formik";
import coffeeLogo from "../../img/coffee-logo.png";

const Container = styled.div`
  /*border: 1px solid red; /* BORDER TEST*/
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
interface Values {
  password: string;
  email: string;
}

export default function Window() {
  const history = useHistory();
  const contextType = useContext(AuthContext);
  const submitHandler = (values) => {
    const password = values.password;
    const email = values.email;
    console.log(password);
    console.log("pre contextType token:", contextType.token);
    console.log(email);

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
          query {
            login(email: "${email}", password: "${password}") {
              userId
              token
              tokenExpiration
              username
            }
          }
        `,
    };

    fetch("http://localhost:5000/graphql", {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Failed!");
        }
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        if (resData.data.login.token) {
          console.log("res data after send: " + resData);
          contextType.login(
            resData.data.login.token,
            resData.data.login.userId,
            resData.data.login.username
          );
          history.push("/home");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("..............................................");
    console.log("contextType token:", contextType.token);
  };
  return (
    <Container>
      <>
        <Formik
          initialValues={{
            password: "",
            email: "",
          }}
          onSubmit={(
            values: Values,
            { setSubmitting }: FormikHelpers<Values>
          ) => {
            setTimeout(() => {
              submitHandler(values);
              //console.log(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form className="Form">
            <img src={coffeeLogo}></img>
            <Field
              className="Field"
              id="email"
              name="email"
              placeholder="Email"
              type="email"
              //value="zadwazlote@test.pl"
            />
            <Field
              className="Field"
              id="password"
              name="password"
              placeholder="Password"
              type="password"
              //value="qwerty"
            />
            <button type="submit" className="loggin-button">
              Log in
            </button>{" "}
            {/* <NavLink to="/" className="register-button">
              Register
            </NavLink> */}
          </Form>
        </Formik>
      </>
    </Container>
  );
}

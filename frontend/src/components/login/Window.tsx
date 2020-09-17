import React, { useContext } from "react";
import styled from "styled-components";
//import { AuthContext, AuthContextProvider } from "../../context/AuthContext";
import { AuthContext } from "../../context/auth-context";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";

const Container = styled.div`
  /*border: 1px solid red; /* BORDER TEST*/
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FieldW = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 20px;
  width: 500px;
  height: 500px;
  color: black;
`;
interface Values {
  password: string;
  email: string;
}

interface Auth {
  token: string;
  email: string;
}

export default function Window() {
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
      <FieldW>
        <div>
          <h1>Signup</h1>
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
            <Form>
              <Field
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                //value="zadwazlote@test.pl"
              />
              <Field
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                //value="qwerty"
              />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      </FieldW>
    </Container>
  );
}

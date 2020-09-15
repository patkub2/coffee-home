import React from "react";
import styled from "styled-components";

import { background } from "../../img";
const BackgroundContainer = styled.div`
  background-image: url(${background});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  width: 100% +10px;
  height: 100vh +10px;
  display: block;
  left: -10px;
  top: -10px;
  bottom: -10px;
  position: fixed;
  right: -10px;
  z-index: 1;
  filter: blur(5px);
  margin: -5px;
  filter: blur(10px);
`;

export default function Background({ children }) {
  return <BackgroundContainer>{children}</BackgroundContainer>;
}

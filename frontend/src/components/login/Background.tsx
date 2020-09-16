import React from "react";
import styled from "styled-components";

import { backgroundBlur } from "../../img";
const BackgroundContainer = styled.div`
  background-image: url(${backgroundBlur});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export default function Background({ children }) {
  return <BackgroundContainer>{children}</BackgroundContainer>;
}

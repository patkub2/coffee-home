import React from "react";
import styled from "styled-components";

import { backgroundBlur } from "../../img";
const BackgroundContainer = styled.div`
  background-color: #0f0f11;
  background-image: url(${backgroundBlur});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  width: 100%;
  height: 100vh;
`;
const BackgroundLayer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

export default function Background({ children }) {
  return (
    <BackgroundContainer>
      <BackgroundLayer>{children}</BackgroundLayer>
    </BackgroundContainer>
  );
}

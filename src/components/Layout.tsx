import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";
import welcome from "../img/welcome.png";

const GlobalStyle = createGlobalStyle`
  body {
    max-height:100vh;
    color: ${({ theme }) => theme.colors.dark};
    font-family: Livvic;
  margin: 0;
  padding: 0;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
`;

const Background = styled.div`
  background-image: url(${welcome});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const StyledWrapper = styled.div`
  position: relative;
  scroll-behavior: smooth;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>
        <Background>{children}</Background>
      </StyledWrapper>
    </>
  </ThemeProvider>
);

export default Layout;

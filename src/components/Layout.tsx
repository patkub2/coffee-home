import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";

const GlobalStyle = createGlobalStyle`
  body {
    min-height:100vh;
    color: ${({ theme }) => theme.colors.dark};
    font-family: Livvic;
    font-family: 'Livvic', sans-serif;
  margin: 0;
  padding: 0;
  font-size:12px;
  background-color:#FFFFFF;
  color:#FFFAEF;
  align-items: center;
  @media only screen and (min-width: 2000px) {
    font-size: 16px;
  }
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
*:focus {
    outline: none;
}
`;

const StyledWrapper = styled.div`
  position: relative;
  scroll-behavior: smooth;
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  </ThemeProvider>
);

export default Layout;

import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "../utils/theme";

const GlobalStyle = createGlobalStyle`
  body {
    height:1000vh;
    color: ${({ theme }) => theme.colors.dark};
    font-family: Livvic;
  margin: 0;
  padding: 0;
  background-color:#FFFAEF;
  color:#FFFAEF;
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

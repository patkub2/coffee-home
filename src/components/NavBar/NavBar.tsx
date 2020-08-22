import React from "react";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import logo from "../../img/logo.svg";
import cart from "../../img/cart.svg";
import emptystar from "../../img/starempty.svg";
import search from "../../img/search.svg";
export default function NavBar() {
  const NavBarContainer = styled.div`
    background: rgba(5, 5, 5, 0.3);
    position: fixed;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    position: -webkit-sticky; /* Safari */

    top: 0;
    z-index: 80;
    /*border: 1px solid yellow; /* BORDER TEST*/
    color: white;
  `;
  const Logo = styled.div`
    margin: auto;
    cursor: pointer;
    img {
      height: 35px;
    }
  `;
  const Menu = styled.div`
    margin: auto 0;
    width: 200px;
  `;
  const Items = styled.div`
    margin: auto 0;
    display: flex;
    justify-content: space-around;
    width: 200px;
    img {
      height: 20px;
      cursor: pointer;
    }
  `;
  return (
    <NavBarContainer>
      <BurgerMenu />
      {/* <Menu>
        <img src={list}></img>
      </Menu> */}
      <Menu />
      <Logo>
        <img src={logo}></img>
      </Logo>
      <Items>
        <img src={cart}></img>
        <img src={emptystar}></img>
        <img src={search}></img>
      </Items>
    </NavBarContainer>
  );
}

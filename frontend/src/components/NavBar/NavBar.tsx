import React, { useContext } from "react";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import logo from "../../img/logo.svg";
import cart from "../../img/cart.svg";
import user from "../../img/user.svg";
import search from "../../img/search.svg";
import BurgerCart from "./BurgerCart";
import { AuthContext } from "../../context/auth-context";
import { NavLink } from "react-router-dom";

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

const Item = styled.div`
  /*border: 1px solid yellow; /* BORDER TEST*/
  position: fixed;
  width: 250px;
  height: 30px;
  right: 80px;
  top: 16px;
  div {
    font-size: 1.2em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      margin-left: 10px;
    }
  }
`;

export default function NavBar() {
  const { token, username } = useContext(AuthContext);
  return (
    <NavBarContainer>
      <BurgerMenu />
      {/* <Menu>
        <img src={list}></img>
      </Menu> */}
      <Logo>
        <img src={logo} alt="noimg"></img>
      </Logo>
      <Item>
        <div>
          {token && username ? (
            <>
              {username} <img src={user} alt="noimg" />
            </>
          ) : (
            <>
              <NavLink to="/login">
                Log in <img src={user} alt="noimg" />
              </NavLink>
            </>
          )}
        </div>
      </Item>
      {/* <Items>
        <img src={cart} alt="noimg"></img>
        <img src={emptystar} alt="noimg"></img>
        <img src={search} alt="noimg"></img>
      </Items> */}
      <BurgerCart />
    </NavBarContainer>
  );
}

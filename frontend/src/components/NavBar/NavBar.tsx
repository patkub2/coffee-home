import React, { useContext, FunctionComponent } from "react";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import { ReactComponent as Logo } from "../../img/logo.svg";
import { ReactComponent as User } from "../../img/user.svg";
import BurgerCart from "./BurgerCart";
import { AuthContext } from "../../context/auth-context";
import { NavLink } from "react-router-dom";

const NavBarContainer = styled.div.attrs()`
  background-color: ${(props) => props.background};
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  position: -webkit-sticky; /* Safari rgba(5, 5, 5, 0.3);*/

  top: 0;
  z-index: 80;
  color: ${(props) => props.color};
  /*border: 1px solid yellow; /* BORDER TEST*/
`;
const LogoC = styled.div`
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

    margin-right: 10px;
    /*border: 1px solid yellow; /* BORDER TEST*/
  }
`;

type ColorProps = {
  color: string;
  backgroundColor?: string;
};

export const NavBar: FunctionComponent<ColorProps> = ({
  color = "black",
  backgroundColor = "rgba(5, 5, 5, 0.3)",
}) => {
  const { token, username } = useContext(AuthContext);
  return (
    <NavBarContainer color={color} background={backgroundColor}>
      <BurgerMenu color={color} />

      <LogoC>
        <Logo fill={color}></Logo>
      </LogoC>
      <Item>
        <div>
          {token && username ? (
            <>
              <div>{username} </div> <User fill={color} />
            </>
          ) : (
            <>
              <div>
                <NavLink to="/login">Log in</NavLink>
              </div>{" "}
              <User fill={color} />
            </>
          )}
        </div>
      </Item>
      <BurgerCart color={color} />
    </NavBarContainer>
  );
};
export default NavBar;

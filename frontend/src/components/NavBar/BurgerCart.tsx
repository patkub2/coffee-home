import React, { useContext, FunctionComponent } from "react";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import { ReactComponent as Cart } from "../../img/cart.svg";
import { AuthContext } from "../../context/auth-context";
import sadcart from "../../img/sadcart.png";
const Menun = styled.div`
  color: black;
  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 30px;
    right: 30px;
    top: 16px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: white;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: white;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: black;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #a49a9b;
    padding: 2.5em 1.5em 0;
    font-size: 2em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
    color: black;
    margin: 20px 0;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }
`;
const Img = styled.img`
  max-width: 100%;
`;
const Text = styled.div`
  margin: 20px 0;
  color: #2e2e2e;
`;
type ColorProps = {
  color: string;
};

export const BurgerCart: FunctionComponent<ColorProps> = ({
  color = "white",
}) => {
  const { token } = useContext(AuthContext);
  return (
    <Menun>
      <Menu right customBurgerIcon={<Cart fill={color} />}>
        {token ? (
          <>
            <Img src={sadcart} />
            <Text>Your cart is empty.</Text>
          </>
        ) : (
          <>
            <Img src={sadcart} />
            <Text>Your need to login to see the cart.</Text>
          </>
        )}
      </Menu>
    </Menun>
  );
};
export default BurgerCart;

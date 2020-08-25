import React from "react";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import list from "../../img/list.svg";
const Menun = styled.div`
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 30px;
    top: 18px;
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
export default function BurgerMenu() {
  return (
    <Menun>
      <Menu customBurgerIcon={<img src={list} />}>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
    </Menun>
  );
}

import React from "react";
import styled from "styled-components";
import Item from "./Item";

export default function Items() {
  const CategoryContainer = styled.div`
    background: rgba(5, 5, 5, 0.3);
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: -webkit-sticky; /* Safari */

    border: 1px solid yellow; /* BORDER TEST*/
    color: white;
  `;
  return (
    <CategoryContainer>
      <Item />
      <Item />
      <Item />
    </CategoryContainer>
  );
}

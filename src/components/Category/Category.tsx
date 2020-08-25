import React from "react";
import styled from "styled-components";
import Item from "./Item";
import coffee from "../../img/coffee.png";
import accessories from "../../img/accessories.png";
import filters from "../../img/filters.png";

const CategoryContainer = styled.div`
  margin-top: 5vh;
  width: 100%;
  height: 30vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: -webkit-sticky; /* Safari */
  /* border: 1px solid red; /* BORDER TEST*/

  color: white;
  @media only screen and (max-width: 1200px) {
    flex-direction: column;
    height: 100vh;
  }
`;
export default function Items() {
  return (
    <CategoryContainer>
      <Item img={coffee} text="Coffee" />
      <Item img={filters} text="Filters" />
      <Item img={accessories} text="Accessories" />
    </CategoryContainer>
  );
}

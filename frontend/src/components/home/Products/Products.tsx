import React from "react";
import styled from "styled-components";
import Product from "./Product";
import image4 from "../../../img/products/image 4.png";
import image5 from "../../../img/products/image 5.png";
import image6 from "../../../img/products/image 6.png";
import image8 from "../../../img/products/image 8.png";
const CategoryContainer = styled.div`
  margin-top: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  position: -webkit-sticky; /* Safari */
  /* border: 1px solid red; /* BORDER TEST*/

  color: black;
`;
export default function Products() {
  return (
    <CategoryContainer>
      <Product
        img={image4}
        title="India"
        desc="Blue Orca Coffee"
        price={21.22}
      />
      <Product
        img={image8}
        title="Brazylia Santos"
        desc="Blue Orca Coffee"
        price={20}
      />
      <Product
        img={image5}
        title="Hounduras"
        desc="Blue Orca Coffee"
        price={20}
      />
      <Product
        img={image6}
        title="Hounduras"
        desc="Blue Orca Coffee"
        price={21}
      />
    </CategoryContainer>
  );
}

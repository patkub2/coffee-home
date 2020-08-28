import React from "react";
import styled from "styled-components";
import vector from "./../../img/Vector.png";
const FooterContainer = styled.div`
  margin-top: 10vh;
  width: 100%;
  min-height: 400px;
  background-color: #111111;
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
    <FooterContainer>
      <img src={vector} />
    </FooterContainer>
  );
}

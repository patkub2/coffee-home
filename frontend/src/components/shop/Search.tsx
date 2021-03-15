import React from "react";
import RangeSlider from "./RangeSlider";
import styled from "styled-components";

const Container = styled.div`
  border: 1px solid red; /* BORDER TEST*/
  border-radius: 0px 0px 30px 30px;
  max-width: 100%;

  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Search() {
  return <Container><RangeSlider></RangeSlider></Container>;
}

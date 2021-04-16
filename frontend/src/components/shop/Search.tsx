import React from "react";
import RangeSlider from "./RangeSlider";
import styled from "styled-components";
import { useState, useEffect } from "react";

const Container = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  border-radius: 0px 0px 30px 30px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  color: black;
  font-size: 19px;
  font-style: normal;
  font-weight: 600;
`;
const Button = styled.button`
  background: none;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 20px;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 15px 25px;
  margin: 20px 10px;
  font-weight: 600;
  box-shadow: 0 5px 2px #b1b1b1;

  :active {
    box-shadow: 0 0px #666;
    transform: translateY(2px);
  }
`;

export default function Search(props) {
  const [childData, setChildData] = React.useState<number[]>([10, 100]);
  return (
    <Container>
      <RangeSlider value={setChildData}> </RangeSlider>
      {childData[0]} zł - {childData[1]} zł
      <Button>Search</Button>
    </Container>
  );
}

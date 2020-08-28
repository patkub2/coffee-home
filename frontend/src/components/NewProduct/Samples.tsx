import React from "react";
import styled from "styled-components";
import samplesbg from "../../img/samplesbg.png";
const SamplesContainer = styled.div`
  width: 100%;
  height: 20vh;
  background-image: url(${samplesbg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  position: -webkit-sticky; /* Safari */
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  /* border: 1px solid red; /* BORDER TEST*/
`;
const Text = styled.div`
  font-size: 3em;
  font-weight: 600;
  letter-spacing: 0.05em;
  font-style: normal;
  text-align: center;
  /* @media only screen and (max-width: 1200px) {
    font-size: 4vw;
  } */
`;
export default function Samples() {
  return (
    <SamplesContainer>
      <Text>Free coffee samples with every purchase</Text>
    </SamplesContainer>
  );
}

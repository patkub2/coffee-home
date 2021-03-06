import React from "react";
import styled from "styled-components";

type ItemProps = {
  img: string;
  text: string;
};
const Text = styled.div`
  font-size: 3em;
  font-weight: 600;
  letter-spacing: 0.05em;
  font-style: normal;
`;
const ItemContainer = styled.div.attrs()`
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 25vw;
  height: 30vw;
  position: -webkit-sticky; /* Safari */
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  @media only screen and (max-width: 1200px) {
    width: 90vw;
    height: 100%;
    margin: 2.5vw 0;
  }
`;
export default function Item({ img, text }: ItemProps) {
  return (
    <ItemContainer img={img}>
      <Text>{text}</Text>
    </ItemContainer>
  );
}

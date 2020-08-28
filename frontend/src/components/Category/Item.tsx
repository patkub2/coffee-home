import React from "react";
import styled from "styled-components";

type ItemProps = {
  img: string;
  text: string;
};

export default function Item({ img, text }: ItemProps) {
  const ItemContainer = styled.div`
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.3),
        rgba(0, 0, 0, 0.3)
      ),
      url(${img});
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
  const Text = styled.div`
    font-size: 3em;
    font-weight: 600;
    letter-spacing: 0.05em;
    font-style: normal;
  `;
  return (
    <ItemContainer>
      <Text>{text}</Text>
    </ItemContainer>
  );
}

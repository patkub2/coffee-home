import React from "react";
import styled from "styled-components";

type ProductProps = {
  img: string;
  text: string;
};

export default function Product({ img, text }: ProductProps) {
  const ProductContainer = styled.div`
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
  `;
  const Text = styled.div`
    font-size: 2.6vw;
    font-weight: 600;
    letter-spacing: 0.05em;
    font-style: normal;
  `;
  return (
    <ProductContainer>
      <Text>{text}</Text>
    </ProductContainer>
  );
}

import React from "react";
import styled from "styled-components";

type ProductProps = {
  img: any;
  title: string;
  desc: string;
  price: number;
};
const ProductContainer = styled.div`
  margin: 20px 20px;
  max-width: 800px;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  position: -webkit-sticky; /* Safari */
  display: flex;
  justify-content: flex-start;
  border: 1px solid orange; /* BORDER TEST */

  @media screen and (max-width: 1360px) {
    margin: 0 100px; /* width less margin */
  }
  @media screen and (max-width: 1000px) {
    margin: 0 20px; /* width less margin */
  }
  @media screen and (max-width: 500px) {
    margin: 0; /* width less margin */
  }
`;

const Img = styled.img`
  border: 1px solid orange; /* BORDER TEST */
  height: 200px;
  border-radius: 10px;
`;
const Title = styled.div`
  border: 1px solid #ff0000; /* BORDER TEST */
  font-size: 2em;
  font-weight: 500;
`;
const TextS = styled.div`
  border: 1px solid #00ff37; /* BORDER TEST */
  font-size: 1.5em;
  font-weight: 500;
  line-height: 1.5em;
`;

export default function Product({ img, title, desc, price }: ProductProps) {
  return (
    <ProductContainer>
      <Img src={img} alt={title}></Img>
      <div>
        <Title>{title}</Title>
        <TextS>{desc}</TextS>

        <TextS>${price}</TextS>
      </div>
    </ProductContainer>
  );
}

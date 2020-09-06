import React from "react";
import styled from "styled-components";

type ProductProps = {
  img: any;
  title: string;
  desc: string;
  price: number;
};
const ProductContainer = styled.div`
  margin: 0 20px;
  width: 300px;
  height: 420px;
  position: -webkit-sticky; /* Safari */
  display: flex;
  justify-content: space-around;
  flex-flow: column wrap;
  /* border: 1px solid orange;/* BORDER TEST */

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
  width: 100%;
  height: 300px;
  border-radius: 10px;
`;
const Title = styled.div`
  font-size: 2em;
  font-weight: 500;
  margin-left: 10px;
`;
const TextS = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  line-height: 1.5em;
  margin-left: 10px;
`;

export default function Product({ img, title, desc, price }: ProductProps) {
  return (
    <ProductContainer>
      <div>
        <Img src={img} alt={title}></Img>

        <Title>{title}</Title>
        <TextS>{desc}</TextS>
      </div>
      <TextS>${price}</TextS>
    </ProductContainer>
  );
}

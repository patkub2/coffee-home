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
  //border: 2px solid #eeeeee; /* BORDER TEST */
  box-shadow: 2px 5px 15px #b1b1b1;
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
  //border: 1px solid #b1b1b1; /* BORDER TEST */
  height: 200px;
  border-radius: 10px;
`;
const Title = styled.div`
  // border: 1px solid #ff0000; /* BORDER TEST */
  margin-left: 15px;
  font-size: 2em;
  font-weight: 500;
`;
const TextS = styled.div`
  // border: 1px solid #00ff37; /* BORDER TEST */
  font-size: 1.5em;
  margin-left: 15px;
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

        <TextS>{price} zł</TextS>
      </div>
    </ProductContainer>
  );
}

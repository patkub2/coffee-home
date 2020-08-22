import React from "react";
import styled from "styled-components";
export default function Welcome() {
  const WelcomeContainer = styled.div`
    width: 100%;
    height: 90vh;
    /*border: 1px solid red; /* BORDER TEST*/
  `;
  const Left = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  const Center = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;

    align-items: right;
    font-style: normal;
    font-weight: 900;
    line-height: 80px;
    color: white;
  `;
  const Text = styled.div`
    font-size: 64px;
  `;
  const TextS = styled.div`
    margin: 10px 0;
    font-size: 24px;
    line-height: 30px;
  `;
  const Button = styled.button`
    background: none;
    border: 5px solid #ffffff;
    box-sizing: border-box;
    border-radius: 40px;
    font-size: 24px;
    line-height: 30px;

    display: inline-block;
    color: #ffffff;
    text-align: center;
    font-size: 28px;
    width: 205px;
    height: 69px;
    margin: 20px 10px;
  `;

  return (
    <WelcomeContainer>
      <Left>
        <Center>
          <Text>
            Sezon Sale <div>20% off.</div>
          </Text>
          <TextS>
            For your Favorite <div>Coffee.</div>
          </TextS>
          <Button>Check out</Button>
        </Center>
      </Left>
    </WelcomeContainer>
  );
}

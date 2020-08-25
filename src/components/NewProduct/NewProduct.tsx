import React from "react";
import styled from "styled-components";
import coffebagpng from "../../img/coffebagpngh.png";
const NewProductContainer = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  /* border: 1px solid red; /* BORDER TEST*/
`;
const Left = styled.div`
  width: 60%;
  height: 100%;
  /*border: 1px solid green; /* BORDER TEST*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Right = styled.div`
  width: 30%;
  height: 100%;
  /*border: 1px solid purple; /* BORDER TEST*/
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
  /*border: 1px solid orange; /* BORDER TEST*/
  font-style: normal;
  font-weight: 900;
  line-height: 80px;
  color: #000000;
`;
const Buttondiv = styled.div`
  display: flex;
  flex-direction: row;
  font-style: normal;
  font-weight: 900;
  line-height: 80px;
  color: #000000;
  justify-content: flex-end;
`;
const Text = styled.div`
  font-size: 4vw;
  font-style: normal;
  font-weight: 500;
`;
const TextS = styled.div`
  margin: 10px 0;
  font-size: 1.3vw;
  line-height: 30px;
  font-style: normal;
  font-weight: 500;
  margin-top: 30px;
`;
const Button = styled.button`
  background: none;
  border: 3px solid #000000;
  box-sizing: border-box;
  font-size: 1.5vw;
  line-height: 30px;
  cursor: pointer;
  display: inline-block;
  color: #000000;
  text-align: center;
  padding: 20px 25px;
  margin: 20px 10px;

  margin-top: 50px;
`;
const Img = styled.img`
  /*border: 1px solid orange; /* BORDER TEST*/
  /* height: 100%; */
  height: 85%;
  overflow-x: hidden;
  overflow-y: hidden;
`;
export default function NewProduct() {
  return (
    <NewProductContainer>
      <Left>
        <Center>
          <Text>SPIECIALITY COFFEES</Text>
          <TextS>
            <div>The highest quality bio coffee imported straight from the</div>
            <div>regions of Ethiopia. 91.6. Only grown in the highest</div>
            <div>quality fields in the guji region</div>
          </TextS>{" "}
          <Buttondiv>
            <Button>Check out</Button>
          </Buttondiv>
        </Center>
      </Left>
      <Right>
        <Img src={coffebagpng} />
      </Right>
    </NewProductContainer>
  );
}

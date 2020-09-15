import React from "react";
import styled from "styled-components";
import coffebagpng from "../../../img/coffebagpngh.png";
const NewProductContainer = styled.div`
  width: 100%;
  max-width: 1800px;
  height: 80vh;
  min-height: 500px;
  display: flex;
  /*border: 1px solid red; /* BORDER TEST*/
`;
const CenterD = styled.div`
  width: 100%;
  /*border: 1px solid green; /* BORDER TEST*/
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
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

const Center = styled.div`
  display: flex;
  flex-direction: column;
  /*border: 1px solid orange; /* BORDER TEST*/
  font-style: normal;
  font-weight: 900;
  color: #000000;
  margin: 0 30px;
`;
const Buttondiv = styled.div`
  display: flex;
  flex-direction: row;
  font-style: normal;
  font-weight: 900;
  line-height: 2em;
  justify-content: flex-end;
`;
const Text = styled.div`
  font-size: 4em;
  font-style: normal;
  font-weight: 500;
`;
const TextS = styled.div`
  margin: 10px 0;
  font-size: 2em;
  line-height: 1.2em;
  font-style: normal;
  font-weight: 500;
  margin-top: 30px;
`;
const Button = styled.button`
  background: none;
  border: 3px solid #000000;
  box-sizing: border-box;
  font-size: 2em;
  line-height: 1.2em;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 20px 25px;
  margin: 20px 10px;

  margin-top: 50px;
`;
const Right = styled.div`
  width: 40%;
  height: 100%;
  /* border: 1px solid purple; /* BORDER TEST*/
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: hidden;
`;
const Img = styled.img`
  /*border: 1px solid orange; /* BORDER TEST*/
  /* height: 100%; */
  max-height: 85%;
  overflow-x: hidden;
  overflow-y: hidden;
`;
export default function NewProduct() {
  return (
    <CenterD>
      <NewProductContainer>
        <Left>
          <Center>
            <Text>SPIECIALITY COFFEES</Text>
            <TextS>
              <div>
                The highest quality bio coffee imported straight from the
              </div>
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
    </CenterD>
  );
}

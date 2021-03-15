import React, { FunctionComponent } from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  /*border: 2px solid red; /* BORDER TEST*/
  margin: 0 30px;
  background: #ffffff;
  border-radius: 5px;
  width: 150px;
  height: 150px;
  filter: drop-shadow(1px 8px 8px rgba(0, 0, 0, 0.25));
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
const Text = styled.div`
  text-align: center;
  width: 100%;
  /*border: 1px solid red; /* BORDER TEST*/
  color: black;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  padding-bottom: 10px;
  text-transform: capitalize;
`;
const Img = styled.div`
  padding-top: 10px;
  /*border: 1px solid red; /* BORDER TEST*/
  width: 60px;
  height: 60px;
  svg {
    width: 60px;
    height: 60px;
  }
`;
type SvgProps = {
  //img: any;
  description: string;
};

const Icon: FunctionComponent<SvgProps> = ({
  //img = "",
  description = "no desc",
  children,
}) => {
  return (
    <IconContainer>
      <Img>{children}</Img>
      <Text>{description}</Text>
    </IconContainer>
  );
};
export default Icon;

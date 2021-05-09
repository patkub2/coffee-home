import React from "react";
import styled from "styled-components";

const CheckboxContainer = styled.label`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`;
// Hide checkbox visually but remain accessible to screen readers.
// Source: https://polished.js.org/docs/#hidevisually
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? "salmon" : "papayawhip")};
  border-radius: 3px;
  transition: all 150ms;

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
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
  user-select: none;
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
const IconContainer = styled.label`
  //border: 2px solid red; /* BORDER TEST*/
  margin: 0 30px;
  background: ${(props) => (props.checked ? "#fdfdfd" : "#ffffff")};
  border-radius: 5px;
  width: 150px;
  height: 150px;
  filter: ${(props) =>
    props.checked
      ? "drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.25))"
      : "drop-shadow(7px 7px 1px rgba(0, 0, 0, 0.25))"};
  border: 3px solid ${(props) => (props.checked ? "#000000" : "#f3f3f3")};
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  flex-direction: column;
  cursor: pointer;

  :active {
    //box-shadow: 0 0px #666;
    transform: translateY(2px);
    //filter: drop-shadow(4px 4px 1px rgba(0, 0, 0, 0.25));
  }
  :hover {
    ${Img} {
      width: 62px;
      height: 62px;
      svg {
        width: 62px;
        height: 62px;
      }
    }
  }
`;
const Checkbox = ({ description = "no desc", children, checked, ...props }) => (
  <IconContainer checked={checked}>
    <HiddenCheckbox checked={checked} {...props} />

    <Img>{children}</Img>
    <Text>{description}</Text>
  </IconContainer>
);

export default Checkbox;

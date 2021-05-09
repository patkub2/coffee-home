import React from "react";
import styled from "styled-components";
import Icon from "./Icon";

import { ReactComponent as Beans } from "../../img/beans.svg";
import { ReactComponent as Filter } from "../../img/filter.svg";
import { ReactComponent as Machine } from "../../img/machine.svg";
import Checkbox from "./Checkbox";

const NavContainer = styled.div`
  /*border: 1px solid red; /* BORDER TEST*/
  border-radius: 0px 0px 30px 30px;
  max-width: 100%;
  height: 270px;
  display: flex;
  flex-direction: column;
`;
const IconContainer = styled.div`
  margin: 0 auto;
  padding: 0px;
  /* border: 1px solid blue; /* BORDER TEST*/
  //max-width: 700px;
  height: 270px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
`;
const NavBackground = styled.div`
  background: #e6e6e6;
  border-radius: 0px 0px 30px 30px;
  width: 100%;
  position: absolute;
  height: 200px;
`;

function Icons() {
  const [childData, setChildData] = React.useState<boolean>(false);
  const handleCheckboxChange = () => {
    setChildData(!childData);
    console.log(childData);
  };
  return (
    <>
      <NavContainer>
        <NavBackground />
        <IconContainer>
          <Icon description="accesories">
            <Machine />
          </Icon>
          <Icon description="filters">
            <Filter />
          </Icon>
          <Icon description="coffee">
            <Beans />
          </Icon>
          <Checkbox
            checked={childData}
            onChange={() => handleCheckboxChange()}
            description="coffee"
          >
            <Beans />
          </Checkbox>
        </IconContainer>
      </NavContainer>
    </>
  );
}

export default Icons;

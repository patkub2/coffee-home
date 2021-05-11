import React, { useEffect } from "react";
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

function Icons(props) {
  const [childData, setChildData] = React.useState({
    coffee: false,
    filters: false,
    accesories: false,
  });
  const handleCheckboxChange = (name, product) => {
    if (product === "coffee") {
      setChildData({ ...childData, coffee: !name });
    }
    if (product === "filters") {
      setChildData({ ...childData, filters: !name });
    }
    if (product === "accesories") {
      setChildData({ ...childData, accesories: !name });
    }

    console.log(name);
  };
  useEffect(() => {
    props.value(childData);
  }, [childData]);
  return (
    <>
      <NavContainer>
        <NavBackground />
        <IconContainer>
          <Checkbox
            checked={childData.accesories}
            onChange={() =>
              handleCheckboxChange(childData.accesories, "accesories")
            }
            description="accesories"
          >
            <Machine />
          </Checkbox>
          <Checkbox
            checked={childData.filters}
            onChange={() => handleCheckboxChange(childData.filters, "filters")}
            description="filters"
          >
            <Filter />
          </Checkbox>
          <Checkbox
            checked={childData.coffee}
            onChange={() => handleCheckboxChange(childData.coffee, "coffee")}
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

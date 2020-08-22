import React from "react";
import styled from "styled-components";

export default function Item() {
  const ItemContainer = styled.div`
    background: rgba(5, 5, 5, 0.3);
    width: 30%;
    height: 500px;
    position: -webkit-sticky; /* Safari */

    border: 1px solid yellow; /* BORDER TEST*/
    color: white;
  `;
  return <ItemContainer></ItemContainer>;
}

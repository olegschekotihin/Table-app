import React from "react";
import styled from 'styled-components';
import Input from "../Input";

export interface HeadColumnProps {
  value: any
  id: any
  onchange: () => void
}

const TH = styled.td`
  font-size: 20px;
`;

function HeadColumn({value, id, onchange}: HeadColumnProps) {
  return (
    <TH key={id}>
      {value}
      <Input
        onchange={onchange}
        dataAttr={value}/>
    </TH>
  )
}

export default HeadColumn
import React from "react";
import Input from "../Input";

export interface HeadColumnProps {
  value: any
  id: any
  onchange: () => void
}

function HeadColumn({value, id, onchange}: HeadColumnProps) {
  return (
    <th key={id}>
      <p>{value}</p>
      <Input
        onchange={onchange}
        dataAttr={value}/>
    </th>
  )
}

export default HeadColumn
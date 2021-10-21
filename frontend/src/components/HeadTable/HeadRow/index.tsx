import React from "react";
import HeadColumn from "../HeadColumn";

export interface HeadRowProps {
  param: any
  onchange: any
}

function HeadRow({param, onchange}:HeadRowProps) {
  let currentData = [];
  if (param && param.length !== 0) {
    currentData = param.find((elem:any, index:number) => {
      if(index === 0) {
        return elem
      }
    })
  }
  return(
    <tr>
      {Object.keys(currentData).map((elem, index) => {
        return <HeadColumn
          value={elem}
          key={index}
          id={elem}
          onchange={onchange}/>
      })}
    </tr>
  )
}

export default HeadRow
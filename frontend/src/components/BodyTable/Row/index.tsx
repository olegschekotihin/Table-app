import React from "react";
import Column from "../Column";

export interface RowProps {
  rows: any
}

function Row({rows}: RowProps) {
  return (
    rows.map((elem) =>
      ( <tr key={elem.userId}>
        {Object.keys(elem).map((item, i) => {
          return <Column
            value={elem[item]}
            key={i}
            id={i}/>
        })}
      </tr> )
    )
  )
}

export default Row
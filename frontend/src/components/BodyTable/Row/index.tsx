import React from "react";
import styled from 'styled-components';
import Column from "../Column";

export interface RowProps {
  rows: any
}

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #e3e3e3;
  }
`;

function Row({rows}: RowProps) {
  return (
    rows.map((elem) =>
      ( <TableRow key={elem.userId}>
        {Object.keys(elem).map((item, i) => {
          return <Column
            value={elem[item]}
            key={i}
            id={i}/>
        })}
      </TableRow> )
    )
  )
}

export default Row
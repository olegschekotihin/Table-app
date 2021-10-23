import React from "react";
import styled from 'styled-components';

export interface ColumnProps {
  value: string
  id: number
}

const TableColumn = styled.td`
  padding: 10px;
`;

function Column({value, id}:ColumnProps) {
  return (
    <TableColumn
      data-id={id}>
      {value}
    </TableColumn>
  )
}

export default Column
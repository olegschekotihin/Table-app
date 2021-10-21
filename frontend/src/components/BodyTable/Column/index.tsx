import React from "react";

export interface ColumnProps {
  value: string
  id: number
}

function Column({value, id}:ColumnProps) {
  return (
    <td
      className='table__column'
      data-id={id}>
      {value}
    </td>
  )
}

export default Column
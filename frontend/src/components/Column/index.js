import React from "react";

function Column({value, id}) {
    return (
        <td className="table__column" key={id} data-id={id}>{value}</td>
    )
}

export default Column
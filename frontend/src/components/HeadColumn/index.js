import React from "react";
import Input from "../Input";

function HeadColumn({value, id, callback, dataAttr}) {
    return (
        <th key={id}>
            <p>{value}</p>
            <Input onchange={callback} dataAttr={value}/>
        </th>
    )
}

export default HeadColumn
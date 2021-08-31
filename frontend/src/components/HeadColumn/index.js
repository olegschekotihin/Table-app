import React from "react";
import Input from "../Input";

function HeadColumn({value, id, onchange, dataAttr}) {
    return(
        <th key={id}>
            {value}
            <Input onChange={onchange} dataAttr={'userId'}/>
        </th>
    )
}

export default HeadColumn
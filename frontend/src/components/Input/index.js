import React from "react";

function Input({onchange, dataAttr}) {
    return(
        <div>
            <input type="text" onChange={onchange} data-name={dataAttr}/>
        </div>
    )
}

export default Input
import React from "react";
import Column from "../Column";

function Row({rows, dataRow, numberRow}) {
    return (
        rows.map((elem, index) =>
            ( <tr>
                {Object.keys(elem).map((item, i) => {
                    return <Column value={elem[item]} id={i}/>
                })}
            </tr> )
        )
    )
}

export default Row
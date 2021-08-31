import React from "react";
import Column from "../Column";

function Row({data}) {
    return(
        <tr className="table__row" key={data._id} data-id={data._id}>
            {Object.keys(data).map((elem, i) => {
                return <Column value={data[elem]} id={i}/>
            })}
        </tr>
    )
}

// function Row({dataRow, numberRow}) {
//     return (
//         index < numberRow && dataRow.map((elem, index) =>
//             ( <tr>
//                 {Object.keys(elem).map((item, i) => {
//                     return <Column value={elem[item]} id={i}/>
//                 })}
//             </tr> )
//         )
//     )
// }

export default Row
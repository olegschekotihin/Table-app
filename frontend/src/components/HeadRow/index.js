import React from "react";
import HeadColumn from "../HeadColumn";

function HeadRow({param, callback}) {
    let currentData = [];
    if (param && param.length !==0) {
        currentData = param.find((elem, index) => {
            if(index === 0) {
                return elem
            }
        })
    }
    return(
        <tr>
            {Object.keys(currentData).map(elem => {
                return <HeadColumn value={elem} id={elem} callback={callback}/>
            })}
        </tr>
    )
}

export default HeadRow
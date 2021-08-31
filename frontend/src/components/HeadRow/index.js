import React from "react";
import HeadColumn from "../HeadColumn";

function HeadRow({param}) {
    return(
        <tr key={param._id} data-id={param._id}>
            {Object.keys(param).map(elem => {
                return <HeadColumn value={param[elem]} id={param.userId}/>
            })}
        </tr>
    )
}

export default HeadRow
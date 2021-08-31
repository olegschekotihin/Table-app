import React from "react";

function Pagination({param, onClick}) {
    const arrOfNumberPage = [];
    for(let i = 0; i<param; i++) {
        arrOfNumberPage.push(i+1)
    }

    return(
        <div className="pagination">
            {arrOfNumberPage.map(e => {
                return <a href="#" className="pagination__item" data-page={e} key={e} onClick={onClick}>{e}</a>
            })}
        </div>

    )
}

export default Pagination
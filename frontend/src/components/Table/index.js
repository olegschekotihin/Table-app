import React, { useEffect, useState } from "react";
import Row from "../Row/index"
import HeadRow from "../HeadRow";
import Pagination from "../Pagination";

function Table({pageSize, usersData}) {
    const [filterValue, setFilterValue] = useState();
    const [dataValue, setDataValue] = useState();
    const [newUsers, setNewUsers] = useState([]);


    const [currentPage, setCurrentPage] = useState(1);

    let rowInPage = pageSize ? pageSize : null
    let currentDataLength = usersData.length

    // Get current posts
    const indexOfLastPost = currentPage * rowInPage;
    const indexOfFirstPost = indexOfLastPost - rowInPage;
    const currentData = usersData.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    useEffect( () => {
        setNewUsers(usersData)
    }, [usersData])

    useEffect(() => {
        let newUserData = usersData.filter(elem => {
            let keys = Object.keys(elem)
            let current = null;
            for (let i = 0, l = keys.length; i < l; i++) {
                if(keys[i] === dataValue) {
                    current = keys[i]
                }
            }
            if(elem[current] === filterValue) {
                return elem
            }
        })
        if(newUserData.length !==0 ) {
            if(newUserData.length < rowInPage) {
            }
            setNewUsers(newUserData)
        } else {
            setNewUsers(usersData)

        }
    },[filterValue])

    const onChange = (event) => {
        setFilterValue(event.target.value);
        console.log('filrValue', filterValue)
        setDataValue(event.target.dataset["name"]);
        console.log('dataValue', dataValue)
    }

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <HeadRow
                        param={newUsers}
                        callback={onChange}
                    />
                </thead>
                <tbody>
                    <Row rows={currentData} dataRow={newUsers} numberRow={rowInPage}/>
                </tbody>
            </table>
            <Pagination
                postsPerPage={rowInPage}
                totalPosts={currentDataLength}
                paginate={paginate}
            />
        </div>
    );
}

export default Table
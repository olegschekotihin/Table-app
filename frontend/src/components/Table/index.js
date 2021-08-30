import React, { useEffect, useState } from "react";
import Row from "../Row/index"
import Pagination from "../Pagination";

function Table({pageSize, usersData}) {
    const [filterValue, setFilterValue] = useState();
    const [dataValue, setDataValue] = useState();
    const [newUsers, setNewUsers] = useState([]);
    const [hidePagination, setHidePagination] = useState(true)

    let rowInPage = pageSize ? pageSize : null
    let newRowInPage;
    let currentDataLength = usersData.length
    let numberOfPaginationLink = Math.ceil(currentDataLength/rowInPage)

    useEffect( () => {
        setNewUsers(usersData)
    }, [usersData])

    useEffect(() => {
        let newUserData = usersData.filter(elem => {
            let keys = Object.keys(elem)
            let current = null;
            for (let i = 0, l = keys.length; i < l; i++) {
                if(keys[i] == dataValue) {
                    current = keys[i]
                }
            }
            if(elem[current] == filterValue) {
                return elem
            }
        })
        if(newUserData.length !==0 ) {
            setHidePagination(true)
            if(newUserData.length < rowInPage) {
                setHidePagination(false)
            }
            setNewUsers(newUserData)
        } else {
            setHidePagination(true)
            setNewUsers(usersData)

        }
    },[filterValue])

    const row = newUsers.map((user, index) => {
        if(index < rowInPage && rowInPage != null) {
            return <Row data={user}/>
        } else if(rowInPage == null) {
            return <Row data={user}/>
        }
    });

    const onChange = (event) => {
        setFilterValue(event.target.value)
        setDataValue(event.target.dataset["name"])
    }

    const changePage = (event) => {
        event.preventDefault();
        let currentNumber = event.target.dataset["page"]
        newRowInPage = currentNumber*rowInPage
        let newPageUser = usersData.filter((user, index) => {
            if((index >= newRowInPage-rowInPage) && (index <= (currentNumber*rowInPage))) {
                return <Row data={user}/>
            }
        })
        setNewUsers(newPageUser)
    }

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        {/*<HeadColumn*/}
                        {/*    onChange={onChange}*/}
                        {/*    dataAttr={'userId'}*/}
                        {/*    value ={1}*/}
                        {/*    id={1}*/}
                        {/*/>*/}
                        <th>Id
                            {/*<Input onChange={onChange} dataAttr={'userId'} />*/}
                            <div><input onChange={onChange} data-name="userId"/></div></th>
                        <th>First name
                            <div><input onChange={onChange} data-name="firstName"/></div></th>
                        <th>Last name
                            <div><input onChange={onChange} data-name="secondName"/></div></th>
                        <th>Age
                            <div><input onChange={onChange} data-name="age"/></div></th>
                        <th>Sex
                            <div><input onChange={onChange} data-name="sex"/></div></th>
                        <th>Organization
                            <div><input onChange={onChange} data-name="organization"/></div></th>
                    </tr>
                </thead>
                <tbody>
                    {row}
                    {/*<Row dataRow={newUsers} numberRow={rowInPage}/>*/}
                </tbody>
            </table>
            {hidePagination && <Pagination param={numberOfPaginationLink} onClick={changePage}/>}
        </div>
    );
}

export default Table
import React, {useEffect, useState} from "react";
import Row from "../BodyTable/Row"
import HeadRow from "../HeadTable/HeadRow";
import Pagination from "../BodyTable/Pagination";

export interface TableProps {
  pageSize?: number
  usersData: any
}

function Table({pageSize, usersData}:TableProps) {
  const [filterDataValue, setFilterDataValue] = useState<string>('');
  const [dataValue, setDataValue] = useState<string>('');
  const [newUsersData, setNewUsersData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const initDataLength = usersData.length
  const [currentDataLength, setCurrentDataLength] = useState(initDataLength)
  let rowInPage = pageSize ? pageSize : 10
  // Get current posts
  const indexOfLastPost = currentPage * rowInPage;
  const indexOfFirstPost = indexOfLastPost - rowInPage;
  const currentData = newUsersData.slice(indexOfFirstPost, indexOfLastPost);

  useEffect( () => {
    setNewUsersData(usersData)
    setCurrentDataLength(usersData.length)
  }, [usersData])

  useEffect(() => {
    let newUserData = usersData.filter((user:string) => {
      let keysUser = Object.keys(user)
      let currentElem:any;

      keysUser.forEach((elem, index) => {
        if(elem === dataValue) {
          currentElem = elem
        }
      })
      if(user[currentElem] == filterDataValue) {
        return user
      }
    })
    if(newUserData.length !== 0 ) {
      setNewUsersData(newUserData)
      setCurrentDataLength(newUserData.length)
    } else {
      setNewUsersData(usersData)
      setCurrentDataLength(usersData.length)
    }
  },[filterDataValue])

  const onChange = (event:any) => {
    setFilterDataValue(event.target.value);
    setDataValue(event.target.dataset['name']);
  }

  const onPaginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className='container'>
      <table className='table'>
        <thead>
        <HeadRow
          param={newUsersData}
          onchange={onChange}
        />
        </thead>
        <tbody>
        <Row
          rows={currentData}/>
        </tbody>
      </table>
      <Pagination
        postsPerPage={rowInPage}
        totalPosts={currentDataLength}
        onPaginate={onPaginate}
      />
    </div>
  );
}

export default Table
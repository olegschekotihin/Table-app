import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import axios from "axios";
import ResponsiveTable from './components/Table/index'
import './App.css';

function App() {
  const [usersData, setUsersData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3301/user/getAll/')
      .then((res) => {
        setUsersData(res.data)
      }).catch((e) => {
      console.log(e)
    })
  }, []);

  const AppSection = styled.section`
    width: 1400px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-content: flex-start;
    justify-content: center;
    flex-wrap: wrap;
  `;

  return (
    <div className="App">
      <AppSection>
        <ResponsiveTable
          usersData={usersData}
          pageSize={8}
        />
      </AppSection>
    </div>
  );
}

export default App;

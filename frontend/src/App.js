import React, { useEffect, useState } from "react";
import Table from './components/Table/index'
import axios from "axios";
import './App.css';

function App() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3301/user/getAll/')
            .then((res) => {
                setUsers(res.data)
            }).catch((e) => {
            console.log(e)
        })
    }, []);

    return (
      <div className="App">
        <Table
          usersData={users}
          pageSize={8}
        />
      </div>
    );
}

export default App;

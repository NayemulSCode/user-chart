import logo from './logo.svg';
import './App.css';
import userdata from './userData/usersdata.json'
import { useEffect, useState } from 'react';
import Users from './components/Users';
function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    setUsers(userdata);
    console.log(userdata);
  },[])
  return (
    <>
      <div className="home">
        <div className="userSection">
            {
              users.map((user) => (
                <Users 
                user={user}
                
                />
              ))
            }
        </div>
      </div>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import userdata from './userData/usersdata.json'
import { useEffect, useState } from 'react';
import Users from './components/Users';
import AddUserInfo from './components/AddUserInfo';
function App() {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    setUsers(userdata);
    console.log(userdata);
  },[]);
  const [addfriends, setAddfriends] = useState([]);
	const addHandler = (dataReceive) => {
		const received = [...addfriends, dataReceive];
		setAddfriends(received);
	};
  return (
    <>
      <div className="home">
        <AddUserInfo addfriends={addfriends} />
        <div className="userSection">
            {
              users.map((user) => (
                <Users 
                user={user}
                addHandler={addHandler}
                />
              ))
            }
        </div>
      </div>
    </>
  );
}

export default App;

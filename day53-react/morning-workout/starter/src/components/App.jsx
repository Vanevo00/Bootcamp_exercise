import React, { useState, useEffect } from "react";
import UserList from './UserList.jsx'



const App = () => {
  const [users, setUsers] = useState([])
  const [defaultUser, setDefaultUser] = useState(null)
  const [selectedUserIndex, setSelectedUserIndex] = useState(null)


  useEffect(() => {
    const url = "https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/"
    
    fetch(url)
			.then(res => res.json())
			.then(data => {
				setUsers(data)
				})
  }, [])
  
  useEffect(() => {
    console.log(users);
  })

  const setSelectedUser =(index) => {
		setSelectedUserIndex(index)
	}
  
  
  return (
    <div className='app'>
      <div className='container'>
        <UserList
          users={users}
          setSelectedUser={setSelectedUser}
          selectedUserIndex={selectedUserIndex}
        />
      </div>
    </div>
  )
}

export default App;

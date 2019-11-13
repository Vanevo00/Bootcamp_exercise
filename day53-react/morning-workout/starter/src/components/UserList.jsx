import React, { Component } from 'react'

import UserCard from './UserCard.jsx'

const UserList = (props) => {
  const { users, setSelectedUser, selectedUserIndex } = props
  let userCard = users.length !== 0 ? 
    users.map((user, index) => (
      <UserCard
        key={index}
        index={index}
        user={user}
        setSelectedUser={setSelectedUser}
				selectedUserIndex={selectedUserIndex}
      />
      
    ))
    : "Loading.."

  return (
    <div className='card_list'>{userCard}</div>
  )
}

export default UserList
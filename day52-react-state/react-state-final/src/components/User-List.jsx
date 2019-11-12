import React, { Component } from 'react'

import UserCard from './User-Card.jsx'

class UserList extends Component {
	render() {
		const { users, setSelectedUser, selectedUserIndex } = this.props
		const userCards = users.map((user, index) => (
			<UserCard
				key={index}
				index={index}
				user={user}
				setSelectedUser={setSelectedUser}
				selectedUserIndex={selectedUserIndex}
			/>
		))
		return <div className='card_list'>{userCards}</div>
	}
}

export default UserList

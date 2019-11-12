import React, { Component } from 'react'

class UserCard extends Component {
	render() {
		const { user, index, setSelectedUser, selectedUserIndex } = this.props
		return (
			<div
				className={`card_container${
					index === selectedUserIndex ? ' selected_user' : ''
				}`}
				onClick={() => {
					setSelectedUser(index)
				}}
			>
				<h5>{user.name}</h5>
				<div className='card_details'>
					<p>Age: {user.age}</p>
					<p>Rank: {user.rank}</p>
				</div>
			</div>
		)
	}
}

export default UserCard

// const UserCard = props => {
// 	const { user, index, setSelectedUser, selectedUserIndex } = props

// 	return (
// 		<div
// 			className={`card_container${
// 				index === selectedUserIndex ? ' selected_user' : ''
// 			}`}
// 			onClick={() => {
// 				setSelectedUser(index)
// 			}}
// 		>
// 			<h5>{user.name}</h5>
// 			<div className='card_details'>
// 				<p>Age: {user.age}</p>
// 				<p>Rank: {user.rank}</p>
// 			</div>
// 		</div>
// 	)
// }

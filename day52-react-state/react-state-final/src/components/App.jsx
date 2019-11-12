import React, { Component } from 'react'

import Nav from './Nav.jsx'
import UserList from './User-List.jsx'
import UserPanel from './User-Panel.jsx'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: [],
			defaultUser: null,
			selectedUserIndex: null,
			loading: true,
		}
		this.setSelectedUser = this.setSelectedUser.bind(this)
	}
	componentDidMount() {
		const url =
			'https://nemadywgu6.execute-api.us-west-2.amazonaws.com/prod/'
		fetch(url)
			.then(res => res.json())
			.then(data => {
				this.setState({
					users: data,
					selectedUserIndex: 0,
					loading: false,
				})
			})
	}

	setSelectedUser(index) {
		this.setState({
			selectedUserIndex: index,
		})
	}

	render() {
		const { users, selectedUserIndex } = this.state
		return (
			<>
				{this.state.loading ? (
					<div style={{ fontSize: '6rem' }}>Loading...</div>
				) : (
					<div className='app'>
						<Nav />
						<div className='container'>
							<UserList
								users={users}
								setSelectedUser={this.setSelectedUser}
								selectedUserIndex={selectedUserIndex}
							/>
							<UserPanel user={users[selectedUserIndex]} />
						</div>
					</div>
				)}
			</>
		)
	}
}

export default App

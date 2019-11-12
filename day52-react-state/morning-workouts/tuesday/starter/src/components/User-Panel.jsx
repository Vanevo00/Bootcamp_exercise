import React, { Component } from 'react'

import UserDetails from './User-Details.jsx'

const defaultMessage = (
	<div style={{ textAlign: 'center', color: 'white' }}>
		Please Select A User To View The Details
	</div>
)

class UserPanel extends Component {
	render() {
		const { user } = this.props

		return (
			<div className='user_panel_container'>
				{!user ? defaultMessage : <UserDetails user={user} />}
			</div>
		)
	}
}

export default UserPanel

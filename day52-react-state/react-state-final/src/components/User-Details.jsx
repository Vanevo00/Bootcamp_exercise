import React, { Component } from 'react'

class UserDetails extends Component {
	render() {
		const { user } = this.props

		return (
			<div className='user_panel'>
				<h3>{user.name}</h3>
				<div className='user_panel_detail'>
					<strong>Rank:</strong>
					<p>{user.rank}</p>
				</div>
				<img
					className='user_panel_image'
					src={user.image}
					alt={`${user.name} profile photo`}
				/>
				<div className='user_panel_details'>
					<div className='user_panel_details_row'>
						<div className='user_panel_detail'>
							<strong>Age:</strong>
							<p>{user.age}</p>
						</div>
						<div className='user_panel_detail'>
							<strong>Job:</strong>
							<p>{user.job}</p>
						</div>
					</div>
				</div>
				<p>{user.bio}</p>
				<button>SET AS DEFAULT</button>
			</div>
		)
	}
}

export default UserDetails

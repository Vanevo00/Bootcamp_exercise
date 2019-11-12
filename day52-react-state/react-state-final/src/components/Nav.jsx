import React, { Component } from 'react'
import '../index.scss'
class Nav extends Component {
	render() {
		return (
			<div className='nav_container'>
				<h1>Users</h1>
				<div className='nav_buttons'>
					<button className='nav_button'>Default User: Freida</button>
					<button className='nav_button'>User List</button>
				</div>
			</div>
		)
	}
}

export default Nav

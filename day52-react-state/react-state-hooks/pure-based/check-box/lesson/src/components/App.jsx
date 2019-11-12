import React, { Component } from 'react'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			checked: true,
		}
	}

	// convert this to a pure component and implement hooks to manage the check box change
    onCheckboxClick = () => {
        this.setState(prevState => {
            return {
                checked: !prevState.checked
            }
        })
    }

	render() {
		return (
			<div className='app'>
				<h1>Checked?</h1>
				<div className='double'>
					<input
						name='checkbox'
						type='checkbox'
                        checked={this.state.checked}
                        onChange={this.onCheckboxClick}
					/>
				</div>
			</div>
		)
	}
}

export default App

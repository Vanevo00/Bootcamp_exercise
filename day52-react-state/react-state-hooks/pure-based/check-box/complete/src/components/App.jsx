import React, { useState } from 'react'

const App = () => {
	const [checked, setChecked] = useState(true)

	const onCheckboxClick = () => {
		setChecked(prevChecked => !prevChecked)
	}

	return (
		<div className='app'>
			<h1>Checked?</h1>
			<div className='double'>
				<input
					name='checkbox'
					type='checkbox'
					checked={checked}
					onChange={onCheckboxClick}
				/>
			</div>
		</div>
	)
}

export default App

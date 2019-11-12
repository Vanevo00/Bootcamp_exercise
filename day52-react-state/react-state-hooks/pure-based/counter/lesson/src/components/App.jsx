import React from 'react'

// convert count to state using hooks and update the two functions to raise/lower the count.
// add an effect that changes the document title to `The current count is ${count}` HINT: document.title = <string>

const App = () => {
	const count = 0
	const onPlusButtonClick = () => {}

	const onMinusButtonClick = () => {}


	return (
		<div className='app'>
			<h1>Count {count}</h1>
			<div className='buttons'>
				<button
					name='checkbox'
					type='checkbox'
					onClick={onPlusButtonClick}
				>
					+
				</button>
				<button
					name='checkbox'
					type='checkbox'
					onClick={onMinusButtonClick}
				>
					-
				</button>
			</div>
		</div>
	)
}

export default App

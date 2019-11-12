import React, { useState, useEffect } from 'react'

const App = () => {
	const [count, setCount] = useState(0)

	const onPlusButtonClick = () => {
		setCount(prevCount => prevCount + 1)
	}

	const onMinusButtonClick = () => {
		setCount(prevCount => Math.max(0, prevCount - 1))
	}

	useEffect(() => {
		document.title = `The counter is currently ${count}`
	})

	return (
		<div className='app'>
			<h1>Count {count}</h1>
			<div className='buttons'>
			<button name='checkbox' type='checkbox' onClick={onPlusButtonClick}>
				+
			</button>
			<button name='checkbox' type='checkbox' onClick={onMinusButtonClick}>
				-
			</button>
			</div>
		</div>
	)
}

export default App

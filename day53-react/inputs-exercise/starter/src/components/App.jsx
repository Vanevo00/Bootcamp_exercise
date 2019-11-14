import React, {useState, useEffect} from "react";

const App = () => {
  const [checkboxValue, setCheckboxValue] = useState(false)
  
  const handleChange = () => {
    setCheckboxValue(!checkboxValue)
  }

  useEffect(() => {
		console.log(checkboxValue);
	})
  
  return (
  <>
    <div style={{ fontSize: "3rem" }}>checkbox</div><br/>
    <input type="checkbox" name="checkbox1" onChange={handleChange} checked={checkboxValue}/>
  </>
  )
}

export default App;

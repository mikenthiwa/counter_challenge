import React from "react";




const InputComponent = ({setCount}) => {
  const handleChange = (event) => setCount(parseInt(event.target.value))
  return(
    <form>
      <input type="number" onChange={handleChange}/>
      <button type="submit" onClick={handleChange}>Confirm</button>
    </form>
  )
}

export default InputComponent

import React, {Fragment, useState} from "react";

const regex = /^-?\d*\.?\d*$/
const MultiplyButtonComponent = ({setCount, count}) => {
  const [init, setInit] = useState(0);
  const multiply = () => {
    const pow = Math.pow(2, (2 + init));
    setCount(pow);
    setInit(init + 1);
  }

  return (
    <Fragment>
      {!regex.test(count) && <div><button type="button" className="btn btn-primary" onClick={multiply}>Multiply</button></div>}
    </Fragment>
  )
}

export default MultiplyButtonComponent

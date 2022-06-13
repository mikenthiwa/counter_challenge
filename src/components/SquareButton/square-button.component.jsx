import React, {Fragment} from 'react';

const SquareButtonComponent = ({count, setCount}) => {

  const sqrt = () => {
    setCount(Math.sqrt(count))
  }

  return (
    <Fragment>
      {/\d+$/.test(count) ? (<div><button type="button" className="btn btn-primary" onClick={sqrt}>Square Root</button></div>) : null}
    </Fragment>

  )
}


export default SquareButtonComponent

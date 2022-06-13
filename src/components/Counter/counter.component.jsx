import {useEffect, useState} from "react";
import {isEven} from "../../service";

const glowType = {
  green: 'green',
  purple: 'purple',
  red: 'red'
}

const CounterComponent = ({count, selected = null}) => {
  const [message, setMessage] = useState('');

  const getStyle = () => {
    if(isNaN(count)) {
      return glowType.red
    }
    else if(Number.isInteger(count)) {
      return glowType.green
    }
    else {
      return glowType.purple
    }
  }


  useEffect(() => {
    const checkEven = async() => {
      const iseven = await isEven(Math.trunc(count));
      const text = iseven ? 'Count is even' : 'Count is not even';
      setMessage(text)
    }
    checkEven()
  }, [count])



  return (
    <div>
      <div className={`${getStyle()}`}>Count: {count} <span>Selected: {selected}</span></div>
      <div className={'message'}>{message}</div>
    </div>
  )
}

export default CounterComponent

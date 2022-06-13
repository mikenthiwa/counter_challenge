import React, {Fragment, useState} from 'react';
import CounterComponent from "./components/Counter/counter.component";
import SquareButtonComponent from "./components/SquareButton/square-button.component";
import MultiplyButtonComponent from "./components/MultiplyButton/multiply-button.component";
import InputComponent from "./components/input/input.component";
import RandomButtonComponent from "./components/RandomNumberButton/random-button.component";
import './App.css';
import Pagination from "./components/Pagination";

const regex = /^-?\d*\.?\d*$/
function App() {
  const [count, setCount] = useState(2);
  const [values, setValues] = useState([]) // values greater than 5
  const [selected, setSetSelected] = useState(null)

  const handleSelect = (val) => {
    setSetSelected(val)
  }


  const handleCount = (count) => {
    if (count > 4){
      setValues([...values, count])
    } else {
      setCount(count)
    }
  }

  return (
    <div className="App">
      <CounterComponent count={count} selected={selected}/>
      {
        regex.test(count) ?
       (

        <div className={'action-buttons'}>
          <SquareButtonComponent count={count} setCount={handleCount}/>
          <MultiplyButtonComponent setCount={handleCount} />
          <RandomButtonComponent setCount={setCount} />
        </div>

        ) : (
          <InputComponent setCount={handleCount} />
        )
      }
      <Pagination itemsPerPage={1} items={values} handleSelect={handleSelect}/>
    </div>
  );
}

export default App;

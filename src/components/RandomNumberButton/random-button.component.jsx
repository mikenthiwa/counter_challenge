
const RandomButtonComponent = ({setCount}) => {

  const generateRandom = () => {
    const random = Math.floor((Math.random() * 10) + 1);
    setCount(random)
  }
  return (
    <div><button type="button" className="btn btn-primary" onClick={generateRandom}>Random</button></div>
  )
}

export default RandomButtonComponent;

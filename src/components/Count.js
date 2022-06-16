import React from 'react';
import '../styles/count_styles.css';
import up from "../images/up_arrow.png"
import down from "../images/down_arrow.png"


export default function App() {
  const [count, setCount] = React.useState(0);
  const [countStat, setCountStat] = React.useState("")

  let countIcon = countStat ? up : down
  
  function add() {
      setCount(prevCount => prevCount + 1)
      setCountStat(true)
      console.log(countStat)
  }
  
  function subtract() {
      setCount(prevCount => prevCount - 1)
      setCountStat(false)
      console.log(countStat)
      
  }
  
  return (
    <div>
      <div>
      </div>
      <div className="counter">
        <img  className="countImg" src={countIcon} alt="" />
          <button className="counter--minus" onClick={subtract}>–</button>
          <div className="counter--count">
              <h1>{count}</h1>
          </div>
          <button className="counter--plus" onClick={add}>+</button>
      </div>
    </div>
  )
}

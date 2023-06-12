import { useState } from 'react'

export default function ScientificCalculator() {

  const [num, setNum] = useState(0)
  const [oldnum, setOldNum] = useState(0)
  const [operator, setOperator] = useState()

  function inputNum(e) {
    let input = e.target.value
    if(num === 0) {
      setNum(input)
    } else {
      setNum(num + input)
    }
  }

  function clear() {
    setNum(0)
  }

  function porcentage() {
    setNum(num / 100)
  }

  function changeSign() {
    if(num > 0) {
      setNum(-num)
    } else {
      setNum(Math.abs(num))
    }
  }

  function operatorHandler(e) {
    let operatorInput = e.target.value
    setOperator(operatorInput)
    setOldNum(num)
    setNum(0)
  }

  function calculate() {
    if(operator === "/") {
      setNum(parseFloat(oldnum) / parseFloat(num))
    } else if (operator === "X") {
      setNum(parseFloat(oldnum) * parseFloat(num))
    } else if (operator === "-") {
      setNum(parseFloat(oldnum) - parseFloat(num))
    } else if (operator === "+") {
      setNum(parseFloat(oldnum) + parseFloat(num))
    }
  }

  return (
    <>
      <div className="wallpaper py-2">
        <div id="calculator">
          <div className="job">
            <div>
              <div className="gap">
                <input id="screen" maxLength={19} disabled/>
              </div>
              <div className="pant">
                <input id="show-display" maxLength={9} disabled/>
              </div>
            </div>
              <div className="gap2">
                <input id="screen" maxLength={19} value={num} disabled/>
              </div>
            <div className="clear"></div>
            <div id="operator" style={{ marginLeft: 4 }}>
              <button>x <sup> 2</sup></button>
              <button>1 / x</button>
              <button>&radic;<span style={{ textDecoration: "overline" }}> x</span></button>
              <button>T o N</button>
              <button>2 <sup> n</sup></button>
              <button>n !</button>
              <button>&#8512; c s v</button>
              <button>* c s v</button>
              <button href="," className="val">,&nbsp; c s v</button>
              <button onClick={changeSign}>+ / -</button>
              <button onClick={porcentage}>%</button>
              <button>(&nbsp; &nbsp;)</button>
              <button onClick={operatorHandler} value="+" style={{ background: "#6e952f", color: "#fff" }}>+</button>
              <button onClick={operatorHandler} value="-" style={{ background: "#ff5647", color: "#fff" }}>-</button>
              <button onClick={operatorHandler} value="X" style={{ background: "#fcb707", color: "#fff" }}>*</button>
              <button onClick={operatorHandler} value="/" style={{ background: "#b535f0", color: "#fff" }}>/</button>
              <button className="esp" onClick={clear} style={{ color: "#fff" }}>C</button>
            </div>
            <div id="keyboard">
              <button onClick={inputNum} value={7}>7</button>
              <button onClick={inputNum} value={8}>8</button>
              <button onClick={inputNum} value={9}>9</button>
              <button onClick={inputNum} value={4}>4</button>
              <button onClick={inputNum} value={5}>5</button>
              <button onClick={inputNum} value={6}>6</button>
              <button onClick={inputNum} value={1}>1</button>
              <button onClick={inputNum} value={2}>2</button>
              <button onClick={inputNum} value={3}>3</button>
              <button onClick={inputNum} value={0}>0</button>
              <button onClick={inputNum} value={"."}>.</button>
              <button onClick={calculate}>=</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )}
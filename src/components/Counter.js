import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0)
  const [buttonDisabled, setButtonDisabled] = useState(false)
  
  function increment(e){
    setCount(count + 1)
    if(count >9) {alert("Please reset, value too high")
    setButtonDisabled(true)}
  }
  function decrement(e){
    setCount(count - 1)
    if(count < -9) {alert("Please reset, value too low")
    setButtonDisabled(true)}
  }
  function reset(e){
    setCount(0)
    setButtonDisabled(false)
  }
  
  return (
    <div className="Counter">
      <h2>Counter</h2>

      <p>You clicked {count} times</p>

      <button disabled={buttonDisabled} onClick={increment} > + </button>
      <button disabled={buttonDisabled} onClick={decrement} > - </button>
      <button onClick={reset} > Reset </button>
    </div>
  );
}

export default Counter;

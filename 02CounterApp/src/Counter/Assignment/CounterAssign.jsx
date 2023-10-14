import React, { useState } from 'react'

const CounterAssign = () => {
    let [counter , setCounter] = useState(0)

    const Adding = () => {
        if(counter < 20) {
            setCounter(counter + 1)
        }
    }
    const Removing = () => {
        if(counter >= 1) {
            setCounter(counter - 1)
        }
    }
  return (
    <div>
        <h1>1 to 20 decrement</h1>
        <h3>Counter : {counter}</h3>
        <button onClick={Adding}> Increment</button>
        <button onClick={Removing}> Decrement</button>
    </div>
  )
}

export default CounterAssign
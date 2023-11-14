import React, { useState } from 'react'

const Counter = () => {
    let [counter , setCounter] = useState(0)


   const Adding = () => {
    setCounter(counter + 1)
   }
   const Removing  = () => {
    setCounter(counter - 1)
   }
  return (
    <div>
        <h1>Counter : {counter}</h1>
        <button onClick={Adding}>Increase</button>
        <button onClick={Removing}>Decrease</button>
    </div>
  )
}

export default Counter
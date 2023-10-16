import { useState } from "react"

export default function BGChanger() {
  const [color , setColor] = useState("blue")

  const Red = () => {
    setColor("red")
  }
  const green = () => {
    setColor("green")
  }
  const blue = () => {
    setColor("blue")
  }
  const gray = () => {
    setColor("gray")
  }
  const black = () => {
    setColor("black")
  }
  const cyan = () => {
    setColor("cyan")
  }
  const teal = () => {
    setColor("teal")
  }

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor : color }}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " 
        // In One line we create function 
        // onClick={()= > setColor("red")}
        onClick={Red}
        style={{backgroundColor : "red"}}>Red</button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " 
        onClick={green}
        style={{backgroundColor : "green"}}>green</button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " 
         onClick={blue}
        style={{backgroundColor : "blue"}}>blue</button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " 
         onClick={gray}
        style={{backgroundColor : "gray"}}>gray</button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " 
         onClick={black}
        style={{backgroundColor : "black"}}>black</button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " 
         onClick={cyan}
        style={{backgroundColor : "cyan"}}>cyan</button>

        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg " 
         onClick={teal}
        style={{backgroundColor : "teal"}}>teal</button>

      </div>
      
    </div>
    </div>
  
  )
}
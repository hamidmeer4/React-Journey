import { useCallback, useState ,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  const [length , setLenght] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false);

  const [Password , setPassword] = useState("")

  const passwordRef = useRef(null )

  const passGenerator = useCallback (() => {
    let pass = ""
    let str = "ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }

    setPassword(pass)

  } ,[length,numberAllowed,charAllowed,setPassword])

    const copyPassClipBoard = useCallback(() => {
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,999)
      window.navigator.clipboard.writeText(Password)
    }, [Password])
  
    useEffect(() => {
      passGenerator( )
    } , [length ,numberAllowed.charAllowed,passGenerator])
  return (
  <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-6 my-8 text-orange-500 bg-slate-800'>
    <h1 className='text-white text-center my-3'>Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden mb-4 '>
      <input 
       type='text'
       value={Password}
       className='outline-none w-full py-1 px-3 '
       placeholder='Password'
       readOnly
       ref={passwordRef}
      />
      <button
      onClick={copyPassClipBoard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>

    </div >

    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type='range'
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e)=> {setLenght(e.target.value )}} />

        <label> Length: {length}</label>
        <div className='flex items-center gap-x-2'>
          <input 
          type='checkbox'
          defaultChecked = {numberAllowed}
          id='numberInput'
          onChange={() =>{
            setNumberAllowed((prev) => !prev)
          }} 
          />
          <label htmlFor='numberInput'>Number</label>
        </div>

        <div className='flex items-center gap-x-2'>
          <input 
          type='checkbox'
          defaultChecked = {charAllowed}
          id='characterInput'
          onChange={() => {
            setCharAllowed((prev) => !prev)
          }} 
          />
          <label htmlFor='characterInput'>Character</label>
        </div>

      </div>
    </div>

   </div>
  </>

  )
}

export default App

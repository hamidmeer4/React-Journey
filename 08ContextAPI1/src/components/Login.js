import React, { useContext, useState } from 'react'
import userContextProvider from '../context/userContextProvider'
import userContext from '../context/UserContext'

const Login = () => {
    const [username ,setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser} = useContext(userContext)

    const Submit = (e) => {
        e.preventDefault()
        setUser(username,password)
        
    }
  return (

 
    <div>
        <h2>Login</h2>

        <input 

        type='text'
        placeholder='usernmae'
        value={username}
        onClick={(e) => {
            setUsername(e.target.value)
        }} />
        <input 

        type='text'
        placeholder='password'
        value={password}
        onClick={(e) => {
            setPassword(e.target.value)
        }}  />
        <button onSubmit={Submit}>submit</button>


    </div>
  )
}

export default Login
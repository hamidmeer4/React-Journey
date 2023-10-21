import React from 'react'
import { useParams } from 'react-router-dom'


const User = () => {
    const {id} = useParams()
  return (
    <div className='bg-orange-800 text-white text-center text-3xl '>User : {id}</div>
  )
}

export default User
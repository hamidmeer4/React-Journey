import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     } )

    // },[])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl  ' >Github Followers : {data.followers} 
    <img src="https://images.pexels.com/photos/18681383/pexels-photo-18681383/free-photo-of-programming.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Github Picture" width={300} />

    </div>
  )
}

export default Github

export const GithubInfo = async () => {
    const res = await fetch('https://api.github.com/users/hiteshchoudhary')
    return res.json()

}
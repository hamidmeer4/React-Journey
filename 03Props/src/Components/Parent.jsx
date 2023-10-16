import React from 'react'
import Card from './Card'
import Tables from './Tables'

const Parent = () => {
  return (
    <div>
        {/* 1)  */}
      {/* <Card
   image = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
   name = "Hamid Meer"
   desc = "I am a passionate frontend software developer with a keen eye for design and a commitment to delivering exceptional user experiences. With a strong foundation in HTML, CSS, and JavaScript, I transform creative concepts into functional and interactive websites and web applications. My expertise in responsive web design ensures that the user interfaces I create are not only visually appealing but also accessible and user-friendly on various devices."
   btnClick = "Contact me" /> */}
    <Tables
    tableImage = "https://images.unsplash.com/photo-1613980790147-f4f449df0dd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
    name = "Afaq Bangash"
    tableEmail = "afaqbngsh@gmail.com"
    titleDev = "Frontend Develoer"
    titleEng = "Engineering "
    tableImage2 = "https://images.unsplash.com/photo-1613324996029-f6190a17838f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
    name2 = "Hamid Bangash"
    tableEmail2 = "hmdbngsh@gmail.com"
    titleDev2 = "BackEnd Developer"
    titleEng2 = "Computer Science"
    

    />
    </div>
  )
}

export default Parent
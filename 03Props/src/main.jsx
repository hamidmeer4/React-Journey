import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Card from './Components/Card'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Card
   image = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
   name = "Hamid Meer"
   desc = "I am a passionate frontend software developer with a keen eye for design and a commitment to delivering exceptional user experiences. With a strong foundation in HTML, CSS, and JavaScript, I transform creative concepts into functional and interactive websites and web applications. My expertise in responsive web design ensures that the user interfaces I create are not only visually appealing but also accessible and user-friendly on various devices."
   btnClick = "Contact me" />
  </React.StrictMode>,
)

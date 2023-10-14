import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Counter/Counter.jsx'
import CounterAssign from './Counter/Assignment/CounterAssign.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <CounterAssign/>
  </React.StrictMode>,
)

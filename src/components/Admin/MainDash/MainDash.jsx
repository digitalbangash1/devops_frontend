import React from 'react'
import './MainDash.css'
import Create from '../Products/Create'
import Read from '../Products/Read'
import Update from '../Products/Update'

const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>Dashboard</h1>
        <Create/>
        <Read/>
        
    </div>
  )
}

export default MainDash
import React from 'react'
import './MainDash.css'
import Create from '../Products/Create'
import Read from '../Products/Read'

const MainDash = () => {
  return (
    <div className="MainDash">
        <Create/>
        <Read/>
    </div>
  )
}

export default MainDash
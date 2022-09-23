import React from 'react'
import Logo from '../Imgs/Logo.png'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="Sidebar">

      {/*  logo */}
      <div className="Logo">
        <img src={Logo} alt="" />
        <span>Batata Webshop</span>
      </div>

      {/*  menu */}
      <div className="menu">
        <div className="menuItem">
          <div> 
            Icon
          </div>
          <span>Dashboard</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
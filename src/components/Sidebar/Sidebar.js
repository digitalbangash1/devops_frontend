import React from 'react'
import Logo from '../Imgs/Logo.png'
import './Sidebar.css'

import { SidebarData } from '../Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons'
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
        {SidebarData.map((item, index) => {
          return(
            <div className="menuItem active">
              <item.icon/>
              <span>
                {item.heading}
              </span>
            </div>
          )
        })}

        <div className="menuItem">
          <UilSignOutAlt/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
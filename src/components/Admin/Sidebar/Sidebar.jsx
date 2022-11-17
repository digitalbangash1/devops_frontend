import React, { useState } from 'react'
import Logo from '../../Imgs/Logo.png'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { SidebarData } from '../Data/Data';
import {UilSignOutAlt} from '@iconscout/react-unicons'

const Sidebar = () => {

  const [selected, setSelected] = useState(0)

  return (
    <div className="Sidebar">

      {/*  logo */}
      <div className="Logo">
        <img src={Logo} alt="" />
        <span>Admin</span>
      </div>

      {/*  menu */}
      <div className="menu">
        {SidebarData.map((item, index)=>{
   return(
    <li className={selected===index?'menuItem active': 'menuItem'}
    key={index}
    onClick={()=>setSelected(index) }
    >

      <item.icon/>
      <a href={item.url}>
        {item.heading}
      </a>
    </li>

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
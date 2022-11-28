import './Admin.css';
import React from 'react';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';
import MainDash from '../../components/Admin/MainDash/MainDash';


function Admin (){
    return(
        <div className="Dashboard">
            <div className="DashboardGlass">
                <Sidebar/>
                <MainDash />
            </div>
        </div>
    )
    }
    export default Admin;
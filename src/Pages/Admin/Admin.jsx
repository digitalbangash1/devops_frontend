import './Admin.css';
import React from 'react';
import Sidebar from '../../components/Admin/Sidebar/Sidebar';
import MainDash from '../../components/Admin/MainDash/MainDash';
import RightSide from '../../components/Admin/RightSide/Rightside';

function Admin (){
    return(
        <div className="Dashboard">
            <div className="DashboardGlass">
                <Sidebar />
                <MainDash />
                <RightSide />
            </div>
        </div>
    )
    }
    export default Admin;
import './Admin.css';
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainDash from '../../components/MainDash/MainDash';
import RightSide from '../../components/RightSide/Rightside';

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
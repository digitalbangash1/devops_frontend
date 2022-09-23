import './Admin.css';
import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';

function Admin (){
    return(
        <div className="Dashboard">
            <div className="DashboardGlass">
                <Sidebar />
            </div>
        </div>
    )
    }
    export default Admin;
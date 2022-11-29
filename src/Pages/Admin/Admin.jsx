import './Admin.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';



function Admin (){
    return(
        <div className="products">
            <div className="productsNav">
                <Link to="/admin/create">Create New Product</Link>
                <Link to="/admin/read">Product List</Link>
            </div>

            <Outlet />
        </div>
    )
    }
    export default Admin;
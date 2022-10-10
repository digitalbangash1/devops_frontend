import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './components/Home/Home'
import Navbar from "./components/shared_view/Navbar";
import Shoes from './components/products/shoes/Shoes'
import Admin from './Pages/Admin/Admin';
import Jeans from "./components/products/jeans/jeans.js";
import Feedback from "./components/Feedback/Feedback";
import Footer from './components/shared_view/Footer';
import Login from './components/login/Login';
import Cart from "./Pages/Cart";
import { SnackbarProvider } from "notistack";
import { Slide } from "@mui/material";
import Testproduct from "./components/procuctstest/Testproduct";


const App = () => {
    return (
        <>
            <Router>

                <SnackbarProvider
                    TransitionComponent={Slide}
                    anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                    }}
                >
                <Navbar/>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/cart" element={<Cart />} />
                    <Route exact path="/testproduct" element={<Testproduct />} />


                </Routes>
                </SnackbarProvider>
            </Router>
        </>
    );
};

export default App;
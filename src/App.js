import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import Navbar from "./components/shared_view/Navbar";
import Login from './components/login/Login';
import Shoes from './components/products/shoes/Shoes'
import Admin from './Pages/Admin/Admin';
import Footer from "./components/shared_view/Footer";
import Shoes from './components/products/shoes/Shoes';
import Jeans from "./components/products/jeans/Jeans";

import Feedback from "./components/Feedback/Feedback";

function App() {
  return (
    <div className="App">
    <Navbar/>
     <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/shoes" element={<Shoes/>}/>
         <Route path="/jeans" element={<Jeans/>}/>
         <Route path="/admin" element={<Admin/>}/>
         <Route path="/Feedback" element={<Feedback/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;


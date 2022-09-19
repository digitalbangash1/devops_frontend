import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import Navbar from "./components/shared_view/Navbar";
import Shoes from './components/products/shoes/Shoes'


function App() {
  return (
    <div className="App">
    <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
         <Route path="/shoes" element={<Shoes/>}/>
     </Routes>
    </div>
  );
}

export default App;

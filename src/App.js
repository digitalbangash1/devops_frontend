import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import Navbar from "./components/shared_view/Navbar";
import Shoes from './components/products/shoes/Shoes'
import Admin from './Pages/Admin/Admin';
import JeansProduct from "./components/products/jeans/jeans";
import Footer from "./components/shared_view/Footer";


function App() {
  return (
    <div className="App">
    <Navbar/>
     <Routes>
       <Route path="/" element={<Home/>}/>
         <Route path="/shoes" element={<Shoes/>}/>
          <Route path="/admin" element={<Admin/>}/>
         <Route path="/jeans" element={<JeansProduct/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;

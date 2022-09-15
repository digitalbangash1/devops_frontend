import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Navbar from "./components/shared_view/Navbar";
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
    <Navbar/>

        <h1>Hello hello</h1>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/login" element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;


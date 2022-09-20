import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'
import Navbar from "./components/shared_view/Navbar";
import Feedback from "./components/Feedback/Feedback";

function App() {
  return (
    <div className="App">
    <Navbar/>

        
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/Feedback" element={<Feedback/>}/>
     </Routes>
    </div>
  );
}

export default App;

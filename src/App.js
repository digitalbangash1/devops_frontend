import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">

        <h1>Hello hello</h1>
     <Routes>
       <Route path="/" element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;

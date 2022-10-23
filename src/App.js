import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import Login from './components/login/Login';
import Shoes from './components/products/shoes/Shoes'
import Admin from './Pages/Admin/Admin';
import Jeans from "./components/products/jeans/jeans.js";
import Feedback from "./components/Feedback/Feedback";
import Navbar from './components/shared_view/Navbar';
import Footer from './components/shared_view/Footer';
import JdShose from "./components/Shopping-Cart/JdShoes";
import Cart from "./components/Shopping-Cart/cart"
import Shopping from "./components/Shopping-Cart/shopping";
import JdShoes from './components/Shopping-Cart/JdShoes';
import { useState, useEffect } from 'react';




function App() {
  // shopping cart relevant
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  useEffect(() => {
    console.log("cart change");
  }, [cart]);
  // shopping cart relevant


  return (
    <div className="App">

      <Navbar setShow={setShow} size={cart.length} />
      <Routes >
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/shoes" element={<Shoes />} />
      <Route path="/jeans" element={<Jeans />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/Feedback" element={<Feedback />} />
      <Route path="/JdShose" element={<JdShose handleClick={handleClick}/>} />
      <Route path="/shoppingCart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>} />

      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes >
    
      <Footer />
    </div>
  );
}



export default App;


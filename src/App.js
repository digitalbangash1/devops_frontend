import React from 'react';
import "@stripe/stripe-js"
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
import { useState, useEffect } from 'react';
import Checkout from "./Pages/checkout/Checkout";
import Success from "./Pages/checkout/Success";
import Cancel from "./Pages/checkout/Cancel";




function App() {
  // shopping cart relevant

  const [cart, setCart] = useState([]);
  const [warning, setwarning] = useState(false);
  const [add, setadd] = useState(false);

  // click at the product and check if is alrady addet to cart
  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true
    })
    if (isPresent) {
      setwarning(true);
      setTimeout(() => {
        setwarning(false)
      }, 2000);
      return;
    }
    else
      setadd(true);
    setTimeout(() => {
      setadd(false)
    }, 2000);

    // set the new product 
    setCart([...cart, item]);
    console.log(item)
  };
  // get our item into sessionStorage 
  useEffect(() => {
    setCart(JSON.parse(sessionStorage.getItem("cart")));
  }, []);


  const handleChange = (item, d) => {
    console.log(item)
    let ind = -1
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index
    });
    const arr = cart;
    arr[ind] += d;
    if (arr[ind] === 0) {
      arr[ind].amount = 1;
      setCart([...arr]);
    }
  };

  // set items in sessionStorage 
  useEffect(() => {
    if (cart) {
      console.log("this is array using cart", cart);
      sessionStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  // shopping cart relevant


  return (
    <div className="App">

      <Navbar size={cart.length} />
      {
        warning && <div className='warning'> Item is already addet to your cart </div>
      }
      {
        add && <div className='add'> You add an item to your cart </div>
      }

      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/JdShose" element={<JdShose handleClick={handleClick} />} />
        <Route path="/shoppingCart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} size={cart.length} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />


        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes >
      <Footer />
    </div>
  );
}
console.log("App.js");



export default App;


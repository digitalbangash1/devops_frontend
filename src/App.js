import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home'
import SignIn from './components/login/SignIn';
import SignUp from './components/login/SignUp';
import Shoes from './components/products/shoes/Shoes'
import Admin from './Pages/Admin/Admin';
import Jeans from "./components/products/jeans/jeans.js";
import Feedback from "./components/Feedback/Feedback";
import Navbar from './components/shared_view/Navbar';
import Footer from './components/shared_view/Footer';
import JdShoes from "./components/Shopping-Cart/JdShoes";
import Read from './Pages/Admin/components/Products/ProductList/index';
import Create from './Pages/Admin/components/Products/CreateProduct/CreateProduct';
import Update from './Pages/Admin/components/Products/UpdateProducts/Update';
import Cart from "./components/Shopping-Cart/cart"
import { useState, useEffect } from 'react';
import Checkout from "./Pages/checkout/Checkout";
import Success from "./Pages/checkout/Success";
import Cancel from "./Pages/checkout/Cancel";
import ProductDetails from "./components/products/ProductDetails";


function App() {

  // shopping cart relevant
  const [cart, setCart] = useState([]);
  const [warning, setwarning] = useState(false);
  const [add, setadd] = useState(false);

  // click at the product and check if is alrady addet to cart
  const handleClick = (item) => {
    console.log('App.js handle click ...');
    let isPresent = false;
    cart.forEach((p) => {
      if (item.id === p.product.id)
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
    setCart([...cart, { product: item, amount: 1 }]);
    console.log(item)
  };
  // get our item into sessionStorage 
  useEffect(() => {
    setCart(JSON.parse(sessionStorage.getItem("cart")));
  }, []);

  const handleChange = (item, d) => {
    console.log('cllll', item, d);
    const ind = cart.findIndex(x => x.product.id === item.product.id);
    console.log("here is ind ", ind)
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // set items in sessionStorage 
  useEffect(() => {
    console.log("this is array using cart", cart);
    sessionStorage.setItem('cart', JSON.stringify(cart));

  }, [cart]);
  // shopping cart relevant
  if (cart === null) {
    console.log("there are no elemant in array")
    window.location.reload(false);
  }

  return (
    <div className="App">

      <Navbar size={cart?.length} />

      {
        warning && <div className='warning'> Item is already added to your cart </div>
      }
      {
        add && <div className='add'> You add an item to your cart </div>
      }

      <Routes >
        <Route exact path="/" element={<Home />} />
        <Route path="/login/" element={<SignUp />} />
        <Route path="/login/signin" element={<SignIn />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="read" element={<Read />} />
          <Route path="create" element={<Create />} />
          <Route path="update/:id" element={<Update />} />
        </Route>
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/jdshoes" element={<JdShoes handleClick={handleClick} />} />
        <Route path="/jdshoes/:id" element={<ProductDetails />} />
        <Route path="/shoppingCart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} size={cart.length} />} />
        <Route path="/checkout" element={<Checkout cart={cart} />} />
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


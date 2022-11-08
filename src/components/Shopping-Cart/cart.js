import React, { useState, useEffect } from "react";
import "./cart.css";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
/*
function saveItems() {
    var cart = JSON.parse(localStorage.getItem('cart'));   
    console.log("this is shopping cart", cart);
}
*/


const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);


    const handleRemove = (id) => {
        const arr = cart.filter((item) => item.product.id !== id);
        setCart(arr);
        handlePrice();

    };


    const handlePrice = () => {
        console.log('cart', cart);
        let ans = 0;
        cart.map((item) => (ans += item.amount * item.product.price));
        setPrice(ans);
    };

    // const handleItemPrice = (item) => {
    //     var amo = 0;
    //    amo += item.amount * cart.item.price;
    //     setitemPrice(amo);
 
    // };
    

    useEffect(() => {
        handlePrice();
        sessionStorage.setItem('myprice', JSON.stringify(price))
        console.log(" this is the fainal price", price)
       // handleItemPrice();
    });
    
   
    return (
        <article>
            {cart.map((item) => (
                <div className="cart_box" key={item.product.id}>
                    <div className="cart_img">
                        <img src={item.product.imagelink} alt="" />
                        <p>{item.product.name}</p>
                    </div>
                    <div>
                        <button onClick={() => handleChange(item,+1)}>+</button>
                        <button>  {item.amount} </button>
                        <button onClick={() => handleChange(item,-1)}>-</button>
                    </div>
                    <div>
                        <span>{item.product.price*item.amount} kr</span>
                        <button onClick={() => handleRemove(item.product.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className="total">
                <span>Total Price of your Items</span>
                <span> {price}  DKK</span>
            </div>
            <div>
            <Link to="/checkout">
                <button  className="link-87" >Checkout</button>
                </Link>
            </div>
        </article>
    );
};

export default Cart;
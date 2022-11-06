import React from "react";
import "./JdShoes.css";
import Feedback from "../Feedback/Feedback";
import { Link } from "react-router-dom";



const Cards = ({ item, handleClick }) => {

    const { title, author, price, img } = item;
    return (

        <div className="cards">
            <div className="image_box">
                <img src={img} alt="" />
            </div>
            <div className="details">
                <p>{title}</p>
                <p>{author}</p>
                <p>Price: {price},00 kr</p>
                <Link className="feedback" to="/Feedback" >Feedback </Link>
                <button className="addtocard" onClick={() => handleClick(item)} > +   Add to Cart</button>
            </div>
        </div>
    );
};

export default Cards;

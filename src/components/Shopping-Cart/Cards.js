import React from "react";
import "./JdShoes.css";


const Cards = ({ item, handleClick }) => {

    const { name, description, price, imageLink } = item;
    return (

        <div className="cards">
            <div className="image_box">
                <img src={imageLink} alt="" />
            </div>
            <div className="details">
                <p>{name}</p>
                <p>{description}</p>
                <p>Price: {price},00 kr</p>
                <button onClick={() => handleClick(item)} > +   Add to Cart</button>
            </div>
        </div>
    );
};

export default Cards;

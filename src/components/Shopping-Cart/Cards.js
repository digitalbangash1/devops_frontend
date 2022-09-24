import React from "react";
import "./JdShoes.css";


const Cards = ({ item , handleClick}) => {

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
                <button onClick={() => handleClick(item)} > +   Add to Cart</button>
            </div>
        </div>
    );
};

export default Cards;

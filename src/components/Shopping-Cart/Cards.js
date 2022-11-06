import React from "react";
import "./JdShoes.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cards = ({item, handleClick}) => {

    const {name, description, price, imageLink} = item;
    return (

        <div className="cards">

            <motion.div className="image_box" whileHover={{scale: 1.2, rotate: 0}}
                        whileTap={{
                            scale: 0.7,
                            rotate: -30,
                            borderRadius: "100%"
                        }}>
                <img src={imageLink} alt=""/>
            </motion.div>
            <div className="details">
                <p>{name}</p>
                <p>{description}</p>
                <motion.p whileHover={{scale: 1.8, rotate: 0}}>Price: {price},00 kr</motion.p>
                <Link className="feedback" to="/Feedback" >Feedback </Link>
                <motion.button whileTap={{
                    scale: 1.5,
                    borderRadius: "50%"
                }} onClick={() => handleClick(item)}> + Add to Cart
                </motion.button>
            </div>
        </div>
    );
};

export default Cards;

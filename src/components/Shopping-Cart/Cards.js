import React from "react";
import "./JdShoes.css";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

const Cards = ({item, handleClick}) => {

    const {name, description, price, imagelink} = item;
    return (
        <div className="cards">
            <motion.div className="image_box" whileHover={{scale: 1.2, rotate: 0}}
                        whileTap={{
                            scale: 0.7,
                            rotate: -30,
                            borderRadius: "100%"
                        }}>
                <Link to={`/jdshoes/${item.id}`}>
                <img src={imagelink} alt=""/>
                </Link>
            </motion.div>
            <div className="details">

                <p>{name}</p>

                <p>{description}</p>
                <motion.p whileHover={{scale: 1.8, rotate: 0}}>Price: {price},00 kr</motion.p>
                <Link className="feedback" to={`/jdshoes/${item.id}`}>Feedback </Link>
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

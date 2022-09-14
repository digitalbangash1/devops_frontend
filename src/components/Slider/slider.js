import { motion } from "framer-motion";
import { useRaf, useEffect, useState } from "react";
import Images from "./Images";
import "./slider.css";
function Slider() {
  console.log(Images);
  return (
    <div className="Slider">
      <motion.dev className="carousel">
        <motion.dev className="inner-carousel">
          {Images.map(ima => {
            return (<motion.dev className="item">
                    <img src={ima} alt=""/>
                    </motion.dev>
                    );
          })}
        </motion.dev>
      </motion.dev>
    </div>
  );
}

export default Slider;


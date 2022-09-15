import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Images from "./Images";
import "./slider.css";


function Slider() {
  console.log(Images);
  const [width,setWidth] = useState(0);

  const carousel =useRef();
  
useEffect(()=>{
console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
setWidth(carousel.current.scrollWidth -carousel.current.offsetWidth);
},[]);

  return (
    <div className="Slider">
      <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>

        <motion.div
         drag="x"
         dragConstraints={{right:0, left:-width}}
         className="inner-carousel"
         >
          {Images.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Slider;
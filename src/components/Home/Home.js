import React from "react";
import Footer from "../shared_view/Footer";
import Navbar from "../shared_view/Navbar";
import Slider from "../Slider/slider";
import Videoo from "./video";





function Homepage (){


return(
    <div>
            <Navbar />
            <Videoo/>
            <Slider/>
            <Footer />
    </div>
)
}
export default Homepage;
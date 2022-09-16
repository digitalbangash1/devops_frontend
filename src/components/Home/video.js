import React from "react";
import startVideo from "../assets/video.mp4";
import "./video.css";

function Videoo(){
    return (
        
        <div className="mainVideo" >
            <div className="overlay"></div>
        <video src={startVideo} autoPlay loop muted/>

        </div>

    )

}


export default Videoo;
import React from "react";
import Background from "../assets/charging.mp4";
import Navbar from "../components/Navbar";

const Main = () => {
    return (
        <div className="main">
            <Navbar />
            <div className="main__cover"></div>
            <video
                className="main__video"
                src={Background}
                autoPlay
                loop
                muted
            ></video>
        </div>
    );
};

export default Main;

import React from "react";
import Navbar from "../components/Navbar";
import BackgroundVideo from "../assets/charging.mp4";

const Main = () => {
    return (
        <div className="homepage-container">
            {/* video background */}
            <video
                src={BackgroundVideo}
                className="homepage-container__video"
                muted
                autoPlay
                loop
            ></video>

            <Navbar />
        </div>
    );
};

export default Main;

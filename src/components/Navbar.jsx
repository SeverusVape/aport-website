import React from "react";
import {
    IoLogoFacebook,
    IoLogoInstagram,
    IoLogoTwitter,
    IoLogoLinkedin,
    IoReorderThree,
    // IoPower,
} from "react-icons/io5";
import { IconContext } from "react-icons";
import CompanyLogo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="main-menu">
            {/* BAR ON TOP */}
            <div className="navbar">
                <div className="navbar__logo">
                    <a href="/">
                        <img src={CompanyLogo} alt="company logo" />
                    </a>
                </div>
                <div className="navbar__icons">
                    <span className="navbar__social">
                        <IconContext.Provider value={{ className: "icon" }}>
                            <a href="/">
                                <IoLogoFacebook />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "icon" }}>
                            <a href="/">
                                <IoLogoInstagram />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "icon" }}>
                            <a href="/">
                                <IoLogoTwitter />
                            </a>
                        </IconContext.Provider>
                        <IconContext.Provider value={{ className: "icon" }}>
                            <a href="/">
                                <IoLogoLinkedin />
                            </a>
                        </IconContext.Provider>
                        <a
                            href
                            role="button"
                            tab-index="0"
                            className="navbar__hamburger"
                        >
                            <IoReorderThree />
                        </a>
                    </span>
                </div>
            </div>
            {/* SIDE MENU */}
            <div className="side-menu"></div>
        </nav>
    );
};

export default Navbar;

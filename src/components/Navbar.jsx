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
            <div className="main-menu__cover"></div>
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
            <div className="side-menu">
                <ul className="nav__links">
                    <li className="nav__link">
                        <a href="/">
                            <span className="link-content">Home</span>
                        </a>
                    </li>
                    <li className="nav__link">
                        <a href="#services">
                            <span className="link-content">Services</span>
                        </a>
                    </li>
                    <li className="nav__link">
                        <a href="#about">
                            <span className="link-content">About</span>
                        </a>
                    </li>
                    <li className="nav__link">
                        <a href="#info">
                            <span className="link-content">Info</span>
                        </a>
                    </li>
                    <li className="nav__link">
                        <a href="#contacts">
                            <span className="link-content">Contacts</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

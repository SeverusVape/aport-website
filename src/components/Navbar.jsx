import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="main-menue">
            <div className="navbar">
                <div className="navbar__logo">
                    <a href="/">
                        <img
                            src={Logo}
                            alt="logo"
                            className="navbar__logo--img"
                        />
                    </a>
                </div>
            </div>
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

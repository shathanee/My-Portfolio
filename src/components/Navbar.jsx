import { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {


    const navLinks = [
        { name: "Home", url: "#home" },
        { name: "About", url: "#about" },
        { name: "Experience", url: "#experience" },
        { name: "Education", url: "#education" },
        { name: "Skills", url: "#skills" },
        { name: "Projects", url: "#projects" },
        { name: "Contact", url: "#contact" },
    ];






    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="navbar-logo">
                    <div className="navbar-logo-hexagon">
                        <FaCode className="navbar-logo-icon" />
                    </div>
                    <span>Portfolio</span>
                </a>

                <div className="navbar-right">
                    <ul className="navbar-menu">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.url} className="navbar-link">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>






                </div>
            </div>
        </nav>
    );
};

export default Navbar;

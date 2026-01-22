import "./Hero.css";
import heroImg from "../assets/images/as.jpg"
import Resume from "../assets/pdf/Shathanee-B-Resume-.pdf";
import React from "react";

const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">Hello, I'm</p>
                    <h1 className="hero-name">Shathanee Balasubramaniyam</h1>
                    <h2 className="hero-title">Backend Developer</h2>
                    <p className="hero-description">
                        I build modern, scalable web applications with passion and precision.
                        I’m a backend developer specializing in REST API development using Spring Boot, with secure authentication and authorization powered by JWT and Spring Security
                    </p>
                    <div className="hero-buttons">
                        <a href={Resume} className="hero-btn primary" download>Download CV</a>
                        <a href={Resume} className="hero-btn secondary" target="_blank" rel="noopener noreferrer">View CV</a>
                    </div>
                </div>
                <div className="hero-image-container">
                    <div className="hero-image-wrapper">
                        <img src={heroImg} alt="Shathanee Balasubramaniyam" className="hero-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

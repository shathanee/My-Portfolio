import "./About.css";
import Resume from "../assets/pdf/Shathanee-B-Resume-.pdf";
import aboutImg from "../assets/images/sathu.jpeg";
import React from "react";

const About = () => {
    const aboutContent = {
        heading: "About Me",
        intro: `I’m a dedicated Backend Developer focused on building secure, scalable, and high-performance applications. I enjoy solving complex problems and creating reliable systems that power modern web applications..`,
        ctaText: "Download CV",
        ctaLink: { Resume },
    };


    return (
        <article className="about">
            <div className="about-container">
                <header className="about-header">
                    <h2 className="about-heading">{aboutContent.heading}</h2>
                </header>

                <div className="about-box">
                    <div className="about-image-wrapper">
                        <img src={aboutImg} alt="Shathanee Balasubramaniyam" className="about-profile-img" />
                    </div>
                    <div className="about-text-content">
                        <p className="about-intro-text">{aboutContent.intro}</p>
                        <p className="about-background-text">{aboutContent.background}</p>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default About;

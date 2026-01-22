import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';
import React from "react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const personalInfo = {
        name: 'Shathanee Balasubramaniyam',
        role: 'Backend Developer',
        about: 'Passionate backend developer specializing in building secure, scalable REST APIs with Spring Boot, Java, and modern database technologies.'
    };

    const quickLinks = [
        { name: 'Home', url: '#home' },
        { name: 'About', url: '#about' },
        { name: 'Experience', url: '#experience' },
        { name: 'Projects', url: '#projects' },
        { name: 'Contact', url: '#contact' },
    ];

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/shathanee', icon: <FaGithub style={{ color: "#ffffff" }} /> },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shathanee-balasubramaniyam-7561492bb/', icon: <FaLinkedin style={{ color: "#0077B5" }} /> },
        { name: 'Email', url: 'mailto:shathanee2002@gmail.com', icon: <FaEnvelope style={{ color: "#D14836" }} /> },
    ];

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* About Me Section */}
                <div className="footer-section footer-about">
                    <h3 className="footer-section-title">About Me</h3>
                    <p className="footer-about-text">{personalInfo.about}</p>
                </div>

                {/* Quick Links Section */}
                <div className="footer-section footer-links">
                    <h3 className="footer-section-title">Quick Links</h3>
                    <ul className="footer-links-list">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.url} className="footer-link">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Section */}
                <div className="footer-section footer-contact">
                    <h3 className="footer-section-title">Get In Touch</h3>
                    <p className="footer-contact-text">Feel free to reach out for collaborations or just a friendly chat.</p>
                    <div className="footer-social-icons">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                className="footer-social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="footer-bottom-container">

                    <p className="footer-copyright">
                        © {currentYear} All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

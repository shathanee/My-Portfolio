import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";
import React from "react";

const Contact = () => {
    const contactInfo = [
        {
            id: 1,
            icon: <FaEnvelope style={{ color: "#D14836" }} />,
            label: "Email",
            value: "shathanee2002@gmail.com",
            link: "mailto:shathanee2002@gmail.com",
        },
        {
            id: 2,
            icon: <FaPhone style={{ color: "#25D366" }} />,
            label: "Phone",
            value: "+94 76 979 4547",
            link: "tel:+94769794547",
        },
        {
            id: 3,
            icon: <FaMapMarkerAlt style={{ color: "#EA4335" }} />,
            label: "Location",
            value: "Jaffna, Sri Lanka",
            link: "https://maps.google.com/?q=Jaffna,Sri+Lanka",
        },
    ];

    return (
        <article className="contact">
            <div className="contact-container">
                <header className="contact-header">
                    <h2 className="contact-heading">Get In Touch</h2>
                    <p className="contact-subtext">
                        Feel free to reach out for collaborations or just a friendly hello!
                    </p>
                </header>

                <div className="contact-grid">
                    {contactInfo.map((info) => (
                        <a
                            href={info.link}
                            key={info.id}
                            className="contact-card"
                            target={info.id === 3 ? "_blank" : undefined}
                            rel={info.id === 3 ? "noopener noreferrer" : undefined}
                        >
                            <div className="contact-icon">{info.icon}</div>
                            <div className="contact-info-text">
                                <span className="contact-label">{info.label}</span>
                                <p className="contact-value">{info.value}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Contact;

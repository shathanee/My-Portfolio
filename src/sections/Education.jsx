import { FaUserGraduate, FaSchool, FaCertificate } from "react-icons/fa";
import "./Education.css";
import React from "react";

const Education = () => {
    const educationData = [
        {
            id: 1,
            icon: <FaUserGraduate style={{ color: "#4A90E2" }} />,
            degree: "BSc(Hons) Software Engineering",
            institution: "International College of Business and Technology",
            duration: "2025 - Present (2026)",
            description: "Currently pursuing BSc(Hons) Software Engineering by Cardiff Metropolitan University at ICBT Campus.",
        },
        {
            id: 2,
            icon: <FaCertificate style={{ color: "#F5A623" }} />,
            degree: "Higher Diploma in Computing and Software Engineering",
            institution: "International College of Business and Technology",
            duration: "2024 - 2025",
            description: "Completed the HD in Computing awarded by Cardiff Metropolitan University at ICBT Campus.",
        },
        // {
        //     id: 3,
        //     icon: <FaCertificate />,
        //     degree: "Full Stack Web Development Boot Camp",
        //     institution: "Online Academy",
        //     duration: "2022",
        //     description: "Intensive training in modern web development frameworks and practices.",
        // },
    ];

    return (
        <article className="education">
            <div className="education-container">
                <header className="education-header">
                    <h2 className="education-heading">Education</h2>
                </header>

                <div className="education-grid">
                    {educationData.map((edu) => (
                        <div className="education-card" key={edu.id}>
                            <div className="education-icon">{edu.icon}</div>
                            <div className="education-info">
                                <h3 className="education-degree">{edu.degree}</h3>
                                <p className="education-institution">{edu.institution}</p>
                                <p className="education-duration">{edu.duration}</p>
                                <p className="education-description">{edu.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Education;

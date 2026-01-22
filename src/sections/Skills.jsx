import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaReact } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import "./Skills.css";
import React from "react";


const Skills = () => {
    const skillsData = [
        { icon: <FaHtml5 style={{ color: "#E34F26" }} />, title: "HTML5" },
        { icon: <FaCss3Alt style={{ color: "#1572B6" }} />, title: "CSS3" },
        { icon: <FaJs style={{ color: "#F7DF1E" }} />, title: "JavaScript" },
        { icon: <FaJava style={{ color: "#007396" }} />, title: "Java" },
        { icon: <SiSpringboot style={{ color: "#6DB33F" }} />, title: "Spring Boot" },
        { icon: <FaReact style={{ color: "#61DAFB" }} />, title: "React" },
        { icon: <SiMongodb style={{ color: "#47A248" }} />, title: "MongoDB" },
        { icon: <SiMysql style={{ color: "#4479A1" }} />, title: "MySQL" },
        { icon: <SiPostman style={{ color: "#FF6C37" }} />, title: "Postman" },
    ];

    return (
        <article className="skills">
            <div className="skills-container">
                <header className="skills-header">
                    <h2 className="skills-heading">Technologies</h2>
                </header>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon">{skill.icon}</div>
                            <h3 className="skill-title">{skill.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Skills;

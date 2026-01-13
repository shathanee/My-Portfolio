import { FaCode, FaServer, FaLightbulb, FaRocket, FaPaintRoller, FaProjectDiagram, FaGit, FaGithub } from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
    const skillsData = [
       
        {
            icon: <FaServer />,
            title: "Backend Development",
            description: "Building robust APIs and server-side applications with Node.js, Express, and databases like MongoDB and PostgreSQL.",
        },
         {
            icon: <FaCode />,
            title: "Frontend Development",
            description: "Creating responsive, accessible, and performant user interfaces with React, TypeScript, and modern CSS.",
        },
         {
            icon: <FaGithub />,
            title: "Version Control",
            description: "Breaking down complex challenges into manageable pieces and finding elegant, efficient solutions.",
        },
        {
            icon: <FaProjectDiagram />,
            title: "Management",
            description: "Breaking down complex challenges into manageable pieces and finding elegant, efficient solutions.",
        },
        
        {
            icon: <FaPaintRoller/>,
            title: "Canva Design",
            description: "Staying up-to-date with the latest technologies and best practices in the ever-evolving tech landscape.",
        },
    ];

    return (
        <article className="skills">
            <div className="skills-container">
                <header className="skills-header">
                    <h2 className="skills-heading">My Skills</h2>
                </header>

                <div className="skills-grid">
                    {skillsData.map((skill, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-icon">{skill.icon}</div>
                            <h3 className="skill-title">{skill.title}</h3>
                            <p className="skill-description">{skill.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Skills;

import "./Projects.css";

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-featured online store with payment integration and admin dashboard.",
            image: "/src/assets/project_1.png", // Paths will be adjusted after image generation
            tags: ["React", "Node.js", "MongoDB"],
            link: "#",
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A productivity tool for managing tasks with a drag-and-drop Kanban board.",
            image: "/src/assets/project_2.png",
            tags: ["React", "Firebase", "Tailwind"],
            link: "#",
        },
        {
            id: 3,
            title: "Creative Portfolio",
            description: "A minimalist portfolio for designers and developers to showcase their work.",
            image: "/src/assets/project_3.png",
            tags: ["React", "Framer Motion", "CSS"],
            link: "#",
        },
    ];

    return (
        <article className="projects">
            <div className="projects-container">
                <header className="projects-header">
                    <h2 className="projects-heading">My Projects</h2>
                </header>

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <a href={project.link} className="project-link-btn">View Project</a>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="project-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Projects;

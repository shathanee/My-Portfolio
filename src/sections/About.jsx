import "./About.css";

const About = () => {
    const aboutContent = {
        heading: "About Me",
        intro: `I’m a dedicated Backend Developer focused on building secure, scalable, and high-performance applications. I enjoy solving complex problems and creating reliable systems that power modern web applications..`,
        ctaText: "Download CV",
        ctaLink: "/src/assets/pdf/White simple Sales Representative Cv Resume (2).pdf",
    };

    return (
        <article className="about">
            <div className="about-container">
                <header className="about-header">
                    <h2 className="about-heading">{aboutContent.heading}</h2>
                </header>

                <div className="about-content-centered">
                    <p className="about-intro-text">{aboutContent.intro}</p>
                    <p className="about-background-text">{aboutContent.background}</p>

                    <div className="about-buttons">
                        <a href="/src/assets/pdf/White simple Sales Representative Cv Resume (2).pdf" className="about-btn primary" download>
                            Download CV
                        </a>
                        <a href="/src/assets/pdf/White simple Sales Representative Cv Resume (2).pdf" className="about-btn secondary" target="_blank" rel="noopener noreferrer">
                            View CV
                        </a>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default About;

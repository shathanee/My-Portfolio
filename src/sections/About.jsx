import "./About.css";

const About = () => {
    const aboutContent = {
        heading: "About Me",
        intro: `I’m a dedicated Backend Developer focused on building secure, scalable, and high-performance applications. I enjoy solving complex problems and creating reliable systems that power modern web applications..`,
        ctaText: "Download CV",
        ctaLink: "/resume.pdf",
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

                    <a href={aboutContent.ctaLink} className="about-cta" download>
                        {aboutContent.ctaText}
                        <span className="about-cta-arrow">→</span>
                    </a>
                </div>
            </div>
        </article>
    );
};

export default About;

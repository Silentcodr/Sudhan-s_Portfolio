import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
    {
        title: "CB's Kitchen (Freelance)",
        description: "Fully responsive food ordering website with WhatsApp automation integration, boosting order efficiency by 40%. Features lazy loading and SEO optimization.",
        tech: ["React", "HTML/CSS", "WhatsApp API"],
        github: "https://github.com/Silentcodr/Project-CB-s-Kitchen",
        demo: "https://silentcodr.github.io/Project-CB-s-Kitchen/",
        demoLabel: "Visit Website"
    },
    {
        title: "AI Medical Fundraising System",
        description: "AI-based fraud detection system for fundraising. Integrated YOLOv8 and PaddleOCR to reduce manual verification by 50% with 94% accuracy.",
        tech: ["Python", "Flask", "YOLOv8", "Bootstrap"],
        github: "https://github.com/Silentcodr/Final-Year-Project.git",
        demo: "#",
        demoLabel: "Live Demo"
    },
    {
        title: "Secure Credential Manager",
        description: "Spring Boot application for generating and managing strong credentials. Uses AES encryption for secure storage and REST APIs.",
        tech: ["Java", "Spring Boot", "MySQL", "AES"],
        github: "https://github.com/Silentcodr/secure-credential-manager.git",
        demo: "#",
        demoLabel: "Live Demo"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                Featured Projects
            </motion.h2>

            <div className="project-grid">
                {projects.map((project, index) => (
                    <motion.div
                        className="project-card"
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <h3 className="project-title">{project.title}</h3>
                        <p className="project-desc">{project.description}</p>
                        <div className="tech-stack">
                            {project.tech.map((t, i) => (
                                <span key={i} className="tech-tag">{t}</span>
                            ))}
                        </div>
                        <div className="project-links">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                <FaGithub /> Code
                            </a>
                            {project.demo !== "#" && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <FaExternalLinkAlt /> {project.demoLabel}
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
    {
        title: "Portfolio Website",
        description: "Modern minimalist portfolio built with React, TypeScript, and Framer Motion. Features a dark theme with glassmorphism effects.",
        tech: ["React", "TypeScript", "Framer Motion"],
        github: "https://github.com/Silentcodr",
        demo: "#"
    },
    {
        title: "Python Automation Suite",
        description: "A comprehensive collection of Python scripts for automating daily tasks, file management, and data scraping.",
        tech: ["Python", "Selenium", "Pandas"],
        github: "https://github.com/Silentcodr",
        demo: "#"
    },
    {
        title: "Django E-Commerce",
        description: "Full-stack e-commerce platform with user authentication, product management, and payment gateway integration.",
        tech: ["Django", "Python", "Stripe API"],
        github: "https://github.com/Silentcodr",
        demo: "#"
    },
    {
        title: "AI Chat Interface",
        description: "Responsive chat interface integrating OpenAI API for real-time AI conversations.",
        tech: ["React", "Node.js", "OpenAI"],
        github: "https://github.com/Silentcodr",
        demo: "#"
    },
    {
        title: "Weather Dashboard",
        description: "Real-time weather tracking application using OpenWeatherMap API with location detection.",
        tech: ["JavaScript", "HTML/CSS", "API"],
        github: "https://github.com/Silentcodr",
        demo: "#"
    },
    {
        title: "Task Management App",
        description: "Productivity tool for managing tasks with drag-and-drop functionality and local storage persistence.",
        tech: ["React", "Redux", "Tailwind"],
        github: "https://github.com/Silentcodr",
        demo: "#"
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
                            <a href={project.demo} className="project-link">
                                <FaExternalLinkAlt /> Demo
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

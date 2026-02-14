import { motion } from 'framer-motion';
import { FaJava, FaReact, FaJs, FaDatabase, FaFileDownload } from 'react-icons/fa';
import { SiSpringboot, SiMysql } from 'react-icons/si';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                About Me
            </motion.h2>

            <div className="about-content">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    <h3>Full Stack Developer</h3>
                    <p>
                        I am Sudhan Santhosraj J, a Computer Science Engineer with a passion for building robust and scalable applications.
                        My expertise lies in the <strong>Java ecosystem</strong> (Spring Boot) and modern frontend technologies like <strong>React</strong>.
                    </p>
                    <p>
                        I love solving complex problems, from optimizing database queries to creating seamless user experiences.
                        Currently, I am focused on delivering high-quality, full-stack solutions and exploring the potential of AI integration in web apps.
                    </p>

                    <a href="/resume.pdf" download="Sudhan_Santhosraj_Resume.pdf" className="resume-btn">
                        <FaFileDownload /> Download Resume
                    </a>
                </motion.div>

                <div className="skills-container">
                    <motion.div
                        className="skills-grid"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <div className="skill-item">
                            <FaJava className="skill-icon" />
                            <span>Java</span>
                        </div>
                        <div className="skill-item">
                            <SiSpringboot className="skill-icon" />
                            <span>Spring Boot</span>
                        </div>
                        <div className="skill-item">
                            <FaJs className="skill-icon" />
                            <span>JavaScript</span>
                        </div>
                        <div className="skill-item">
                            <FaReact className="skill-icon" />
                            <span>React</span>
                        </div>
                        <div className="skill-item">
                            <SiMysql className="skill-icon" />
                            <span>MySQL</span>
                        </div>
                        <div className="skill-item">
                            <FaDatabase className="skill-icon" />
                            <span>SQL</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

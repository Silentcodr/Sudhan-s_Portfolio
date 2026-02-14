import { motion } from 'framer-motion';
import { FaPython, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
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
                    <p>
                        I am a passionate developer with a strong focus on building efficient, scalable web applications and automation tools.
                        With a deep understanding of both Python and JavaScript ecosystems, I bridge the gap between backend logic and frontend interactivity.
                    </p>
                    <p>
                        My journey involves solving complex problems, optimizing performance, and creating user-centric designs that stand out.
                        I'm constantly learning and adapting to new technologies to deliver the best solutions.
                    </p>
                </motion.div>

                <motion.div
                    className="skills-grid"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <div className="skill-item">
                        <FaPython className="skill-icon" /> Python
                    </div>
                    <div className="skill-item">
                        <FaReact className="skill-icon" /> React & QA
                    </div>
                    <div className="skill-item">
                        <FaNodeJs className="skill-icon" /> Node.js
                    </div>
                    <div className="skill-item">
                        <FaDatabase className="skill-icon" /> Database Design
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;

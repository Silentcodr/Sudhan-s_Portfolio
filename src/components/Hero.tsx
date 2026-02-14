import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Hi, I'm <span>Sudhan Santhosraj J</span>
                </motion.h1>
                <motion.h2
                    className="typewriter-text"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    style={{
                        color: 'var(--text-secondary)',
                        fontSize: '1.5rem',
                        marginBottom: '2.5rem',
                        height: '1.8rem' // Prevent layout shift
                    }}
                >
                    <Typewriter
                        words={['CS Engineer', 'Full Stack Developer', 'AI Enthusiast', 'Freelancer']}
                        loop={true}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </motion.h2>
                <motion.div
                    className="btn-group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <a href="#projects" className="btn btn-primary">View Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </motion.div>
            </motion.div>

            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                width: '300px',
                height: '300px',
                background: 'var(--accent-blue)',
                filter: 'blur(150px)',
                opacity: 0.2,
                borderRadius: '50%',
                zIndex: -1
            }}></div>
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '10%',
                width: '400px',
                height: '400px',
                background: 'var(--accent-cyan)',
                filter: 'blur(150px)',
                opacity: 0.15,
                borderRadius: '50%',
                zIndex: -1
            }}></div>
        </section>
    );
};

export default Hero;

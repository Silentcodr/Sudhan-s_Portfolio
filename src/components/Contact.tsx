import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                Get In Touch
            </motion.h2>

            <motion.div
                className="contact-form"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" placeholder="your@email.com" />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea rows={5} placeholder="How can I help you?"></textarea>
                </div>
                <button className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </motion.div>

            <motion.div
                className="social-links"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
            >
                <a href="https://github.com/Silentcodr" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /></a>
                <a href="#" className="social-link"><FaLinkedin /></a>
                <a href="#" className="social-link"><FaTwitter /></a>
                <a href="mailto:contact@example.com" className="social-link"><FaEnvelope /></a>
            </motion.div>
        </section>
    );
};

export default Contact;

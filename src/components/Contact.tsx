import { motion } from 'framer-motion';
import { FaGithub, FaEnvelope, FaLinkedin } from 'react-icons/fa';
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

            <motion.form
                action="https://formspree.io/f/mvzbaoba"
                method="POST"
                className="contact-form"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="your@email.com" required />
                </div>
                <div className="form-group">
                    <label>Message</label>
                    <textarea name="message" rows={5} placeholder="How can I help you?" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
            </motion.form>

            <motion.div
                className="social-links"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
            >
                <a href="https://github.com/Silentcodr" target="_blank" rel="noopener noreferrer" className="social-link"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/sudhan-santhosraj-j-3a9341214/" target="_blank" rel="noopener noreferrer" className="social-link"><FaLinkedin /></a>
                <a href="mailto:sudhansanthoshraj007@gmail.com" className="social-link"><FaEnvelope /></a>
            </motion.div>
            <p style={{ marginTop: '2rem', color: 'var(--text-secondary)' }}>
                📍 Bangalore, Karnataka <br />
                📞 +91-8925409139
            </p>
        </section>
    );
};

export default Contact;

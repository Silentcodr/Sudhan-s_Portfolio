import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#" className="logo">
                    Silent<span className="highlight">Codr</span>
                </a>

                {/* Desktop Menu */}
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="btn-primary" style={{
                        padding: '0.5rem 1.2rem',
                        background: 'var(--accent-blue)',
                        borderRadius: '4px',
                        color: 'white',
                        fontWeight: 600,
                        marginLeft: '1rem'
                    }}>Hire Me</a>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <motion.div
                className="mobile-menu"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                style={{ overflow: 'hidden', background: 'var(--primary-bg)' }}
            >
                {isOpen && (
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '2rem', gap: '1.5rem', alignItems: 'center' }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </motion.div>
        </nav>
    );
};

export default Navbar;

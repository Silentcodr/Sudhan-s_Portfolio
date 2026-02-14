const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem',
            color: 'var(--text-secondary)',
            borderTop: '1px solid var(--border-glass)',
            background: 'rgba(10, 10, 10, 0.8)',
            fontSize: '0.9rem'
        }}>
            <p>&copy; {new Date().getFullYear()} SilentCodr. Built with React & Vanilla CSS.</p>
        </footer>
    );
};

export default Footer;

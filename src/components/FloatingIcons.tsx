import { motion } from 'framer-motion';
import { FaReact, FaJsSquare, FaPython, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';
import { SiMysql, SiSpringboot } from 'react-icons/si';

const icons = [
    { Icon: FaReact, color: '#61DAFB', size: 50, x: '10%', y: '20%', delay: 0 },
    { Icon: FaJsSquare, color: '#F7DF1E', size: 45, x: '80%', y: '15%', delay: 1 },
    { Icon: FaPython, color: '#3776AB', size: 55, x: '85%', y: '70%', delay: 2 },
    { Icon: SiMysql, color: '#4479A1', size: 45, x: '15%', y: '75%', delay: 3 },
    { Icon: SiSpringboot, color: '#6DB33F', size: 50, x: '70%', y: '85%', delay: 4 },
    { Icon: FaHtml5, color: '#E34F26', size: 40, x: '5%', y: '50%', delay: 1.5 },
    { Icon: FaCss3Alt, color: '#1572B6', size: 40, x: '90%', y: '40%', delay: 2.5 },
    { Icon: FaGitAlt, color: '#F05032', size: 45, x: '50%', y: '10%', delay: 3.5 },
];

const FloatingIcons = () => {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: 'none',
            zIndex: 0
        }}>
            {icons.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 0.2,
                        scale: 1,
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        opacity: { duration: 1, delay: item.delay },
                        scale: { duration: 1, delay: item.delay },
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: item.delay
                        },
                        rotate: {
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                            delay: item.delay
                        }
                    }}
                    style={{
                        position: 'absolute',
                        left: item.x,
                        top: item.y,
                        color: item.color,
                        fontSize: `${item.size}px`,
                        filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.1))'
                    }}
                >
                    <item.Icon />
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingIcons;

import { useEffect, useState } from 'react';
import './Cursor.css';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hidden, setHidden] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [linkHover, setLinkHover] = useState(false);

    useEffect(() => {
        const addEventListeners = () => {
            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseenter", onMouseEnter);
            document.addEventListener("mouseleave", onMouseLeave);
            document.addEventListener("mousedown", onMouseDown);
            document.addEventListener("mouseup", onMouseUp);
        };

        const removeEventListeners = () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseenter", onMouseEnter);
            document.removeEventListener("mouseleave", onMouseLeave);
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("mouseup", onMouseUp);
        };

        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const onMouseEnter = () => {
            setHidden(false);
        };

        const onMouseLeave = () => {
            setHidden(true);
        };

        const onMouseDown = () => {
            setClicked(true);
        };

        const onMouseUp = () => {
            setClicked(false);
        };

        addEventListeners();

        // Link hover effect
        const handleLinkHoverEvents = () => {
            document.querySelectorAll("a, button, .project-card").forEach((el) => {
                el.addEventListener("mouseover", () => setLinkHover(true));
                el.addEventListener("mouseout", () => setLinkHover(false));
            });
        };

        handleLinkHoverEvents();

        // Re-attach listeners when DOM changes (simple observation)
        const observer = new MutationObserver(handleLinkHoverEvents);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            removeEventListeners();
            observer.disconnect();
        };
    }, []);

    const cursorClasses = `cursor ${hidden ? "cursor--hidden" : ""} ${clicked ? "cursor--clicked" : ""} ${linkHover ? "cursor--link-hover" : ""}`;

    return (
        <div
            className={cursorClasses}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`
            }}
        />
    );
};

export default Cursor;

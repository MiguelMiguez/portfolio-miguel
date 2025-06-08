import React, { useEffect, useRef, useState } from "react";
import "./MouseTracker.css";

export default function MouseTracker() {
    const dotRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 900);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (isMobile) return;
        const moveDot = (e) => {
            if (dotRef.current) {
                dotRef.current.style.left = `${e.clientX}px`;
                dotRef.current.style.top = `${e.clientY}px`;
            }
        };
        window.addEventListener("mousemove", moveDot);
        return () => window.removeEventListener("mousemove", moveDot);
    }, [isMobile]);

    if (isMobile) return null;

    return <div ref={dotRef} className="mouse-reflection"></div>;
}
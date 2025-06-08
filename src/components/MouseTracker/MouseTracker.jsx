import React, { useEffect, useRef } from "react";
import "./MouseTracker.css";

export default function MouseTracker() {
    const dotRef = useRef(null);

    useEffect(() => {
        const moveDot = (e) => {
            if (dotRef.current) {
                dotRef.current.style.left = `${e.clientX}px`;
                dotRef.current.style.top = `${e.clientY}px`;
            }
        };
        window.addEventListener("mousemove", moveDot);
        return () => window.removeEventListener("mousemove", moveDot);
    }, []);

    return <div ref={dotRef} className="mouse-reflection"></div>;
}
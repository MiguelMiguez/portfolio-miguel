import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';

const Animaciones = ({ src, speed = 1 }) => {
    const [dimensions, setDimensions] = useState({ width: 300, height: 300 });

    const updateDimensions = () => {
        const width = window.innerWidth;
        if (width >= 1200) {
            setDimensions({ width: 500, height: 500 });
        } else if (width >= 992) {
            setDimensions({ width: 400, height: 400 });
        } else if (width >= 768) {
            setDimensions({ width: 300, height: 300 });
        } else if (width >= 576) {
            setDimensions({ width: 300, height: 300 });
        } else {
            setDimensions({ width: 300, height: 300 });
        }
    };

    useEffect(() => {
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
        <dotlottie-player
            src={src}
            background="transparent"
            speed={speed}
            style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
            loop
            autoplay
        ></dotlottie-player>
    );
};

export default Animaciones;
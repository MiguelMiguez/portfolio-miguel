import React from "react";
import "./AboutMe.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import aboutmeData from "../../data/aboutme.json";

export default function AboutMe({ lang }) {
    const [width, setWidth] = React.useState(
        window.innerWidth >= 1280 ? 600 : 400
    );

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth >= 1280 ? 600 : 400);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="aboutme-section" id="sobremi">
            <div className="aboutme-container">
                <div className="aboutme-animation">
                    <DotLottieReact
                        src="https://lottie.host/12ba1661-ac3c-4fbb-8d9f-38a7e2ccf50f/fKe9yg4mVe.lottie"
                        loop
                        autoplay
                        style={{ width: `${width}px`, maxWidth: "100%" }}
                    />
                </div>
                <div className="aboutme-content">
                    <span className="section-label">Conóceme</span>
                    <h2 className="aboutme-title">
                        {aboutmeData[lang].title1}
                        <span className="text-accent">{aboutmeData[lang].title2}</span>
                    </h2>
                    <p className="aboutme-description">{aboutmeData[lang].description}</p>
                </div>
            </div>
        </section>
    );
}
import React from "react";
import "./AboutMe.css";
import Animaciones from "../../components/Animaciones/Animaciones";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function AboutMe() {
    const [width, setWidth] = React.useState(
        window.innerWidth >= 1280 ? 500 : 350
    );

    React.useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth >= 1280 ? 600 : 350);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="aboutme-section" id="sobremi">
            <div className="aboutme-content">
                <div className="aboutme-animation">
                    <DotLottieReact
                        src="https://lottie.host/12ba1661-ac3c-4fbb-8d9f-38a7e2ccf50f/fKe9yg4mVe.lottie"
                        loop
                        autoplay
                        style={{ width: `${width}px`, maxWidth: "100%" }}
                    />
                </div>
                <div className="aboutme-info">
                    <h2>
                        Sobre <span className="aboutme-orange">mi</span>
                    </h2>
                    <p>
                        Aspiro a desarrollar todas mis capacidades y habilidades para crecer personal y profesionalmente en una compañía, aportando compromiso, responsabilidad, dinamismo y creatividad. Me considero una persona autodidacta, siempre en busca de estar a la vanguardia de la tecnología. Cuento con experiencia como Desarrollador Front-End y Analista de Aplicaciones.
                    </p>
                </div>
            </div>
        </section>
    );
}
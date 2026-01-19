import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import "./ButtonScroll.css";

const sectionIds = ["inicio", "sobremi", "experiencia", "formacion", "proyectos", "tecnologias"];

export default function ButtonScroll() {
    const [isAtLastSection, setIsAtLastSection] = React.useState(false);
    const [bottomOffset, setBottomOffset] = React.useState(32);

    const handleScrollToNext = () => {
        if (isAtLastSection) {
            const firstSection = document.getElementById(sectionIds[0]);
            if (firstSection) {
                firstSection.scrollIntoView({ behavior: "smooth" });
            }
            setIsAtLastSection(false);
            return;
        }

        let currentIdx = 0;
        for (let i = 0; i < sectionIds.length; i++) {
            const el = document.getElementById(sectionIds[i]);
            if (el) {
                const rect = el.getBoundingClientRect();
                if (rect.top >= -100) {
                    currentIdx = i;
                    break;
                }
            }
        }
        const nextIdx = Math.min(currentIdx + 1, sectionIds.length - 1);
        const nextSection = document.getElementById(sectionIds[nextIdx]);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
        setIsAtLastSection(nextIdx === sectionIds.length - 1);
    };

    React.useEffect(() => {
        const onScroll = () => {
            const footer = document.querySelector("footer");
            let footerVisible = false;
            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                footerVisible = footerRect.top < window.innerHeight && footerRect.bottom > 0;
            }

            const lastSection = document.getElementById(sectionIds[sectionIds.length - 1]);
            let isVisible = false;
            if (lastSection) {
                const rect = lastSection.getBoundingClientRect();
                const height = rect.height;
                const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
                isVisible = visibleHeight / height > 0.5;
            }

            setIsAtLastSection(footerVisible || isVisible);

            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                const overlap = window.innerHeight - footerRect.top;
                setBottomOffset(overlap > 0 ? overlap + 16 : 32);
            } else {
                setBottomOffset(32);
            }
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        onScroll();
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
        };
    }, []);

    return (
        <button
            className="scroll-btn"
            onClick={handleScrollToNext}
            aria-label={isAtLastSection ? "Volver al inicio" : "Ir a la siguiente sección"}
            style={{ bottom: bottomOffset }}
        >
            {isAtLastSection ? <ArrowUp size={24} /> : <ArrowDown size={24} />}
        </button>
    );
}
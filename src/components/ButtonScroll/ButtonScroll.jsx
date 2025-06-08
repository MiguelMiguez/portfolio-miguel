import React from "react";
import "./ButtonScroll.css";


const sectionIds = ["inicio", "sobremi", "experiencia", "formacion", "proyectos"];

export default function ButtonScroll() {
    const [isAtLastSection, setIsAtLastSection] = React.useState(false);
    const [bottomOffset, setBottomOffset] = React.useState(32); // 2rem en px

    const handleScrollToNext = () => {
        const currentIdx = sectionIds.findIndex(id => {
            const el = document.getElementById(id);
            if (!el) return false;
            const rect = el.getBoundingClientRect();
            return rect.top >= -100 && rect.top < window.innerHeight / 2;
        });

        if (currentIdx === sectionIds.length - 1) {
            const firstSection = document.getElementById(sectionIds[0]);
            if (firstSection) {
                firstSection.scrollIntoView({ behavior: "smooth" });
            }
            setIsAtLastSection(false);
        } else {
            const nextIdx = currentIdx === -1 ? 1 : currentIdx + 1;
            const nextSection = document.getElementById(sectionIds[nextIdx]);
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: "smooth" });
            }
            setIsAtLastSection(nextIdx === sectionIds.length - 1);
        }
    };

    React.useEffect(() => {
        const onScroll = () => {

            const footer = document.querySelector("footer");
            let footerVisible = false;
            if (footer) {
                const footerRect = footer.getBoundingClientRect();
                footerVisible = footerRect.top < window.innerHeight && footerRect.bottom > 0;
            }

            const proyectos = document.getElementById("proyectos");
            let isVisible = false;
            if (proyectos) {
                const rect = proyectos.getBoundingClientRect();
                const height = rect.height;
                const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
                isVisible = visibleHeight / height > 0.6;
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
            className={`hero-next-btn${isAtLastSection ? " rotated" : ""}`}
            onClick={handleScrollToNext}
            aria-label={isAtLastSection ? "Volver al inicio" : "Ir a la siguiente sección"}
            style={{ bottom: bottomOffset }}
        >
            ↓
        </button>
    );
}
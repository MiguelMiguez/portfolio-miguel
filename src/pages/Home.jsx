import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../sections/Hero/Hero'
import AboutMe from '../sections/AboutMe/AboutMe'
import Experiencie from '../sections/Experiencie/Experiencie'
import Education from '../sections/Education/Education'
import Portfolio from '../sections/Portfolio/Portfolio'
import Footer from '../components/Footer/Footer'
import ButtonScroll from '../components/ButtonScroll/ButtonScroll'

const Home = () => {
    const [lang, setLang] = useState("es");
    const handleLangChange = () => setLang(prev => prev === "es" ? "en" : "es");

    return (
        <div className="bg-[#202020] text-white min-h-screen">
            <Navbar lang={lang} onLangChange={handleLangChange} />
            <ButtonScroll />
            <Hero />
            <AboutMe lang={lang} />
            <Experiencie lang={lang} />
            <Education lang={lang} />
            <Portfolio lang={lang} />
            <Footer />
        </div>
    )
}

export default Home
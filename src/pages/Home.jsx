import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../sections/Hero/Hero'
import AboutMe from '../sections/AboutMe/AboutMe'
import Experiencie from '../sections/Experiencie/Experiencie'
import Education from '../sections/Education/Education'
import Portfolio from '../sections/Portfolio/Portfolio'



const Home = () => {
    return (
        <div className="bg-[#202020] text-white min-h-screen">
            <Navbar />
            <Hero />
            <AboutMe />
            <Experiencie />
            <Education />
            <Portfolio />


        </div>
    )
}

export default Home
import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../sections/Hero/Hero'
import AboutMe from '../sections/AboutMe/AboutMe'
import Experiencie from '../sections/Experiencie/Experiencie'


const Home = () => {
    return (
        <div className="bg-[#202020] text-white min-h-screen">
            <Navbar />
            <Hero />
            <AboutMe />
            <Experiencie />
        </div>
    )
}

export default Home
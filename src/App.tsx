import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import './assets/styles/global.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <ParticlesBackground />
           <Navbar />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
};

export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Photography from './components/Photography';
import ParticlesBackground from './components/ParticlesBackground';
import './assets/styles/global.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="App">
                {/* ✅ Keep Particles Here So It Stays in the Background */}
                <ParticlesBackground />
                <Navbar />

                <Routes>
                    {/* ✅ Home Page: Keeps All Sections Together */}
                    <Route
                        path="/"
                        element={
                            <>
                                <Hero />
                                <About />
                                <Experience />
                                <Projects />
                                <Contact />
                            </>
                        }
                    />

                    {/* ✅ Photography Page: Separate from the Home Page */}
                    <Route path="/photography" element={<Photography />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
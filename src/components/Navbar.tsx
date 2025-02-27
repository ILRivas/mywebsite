// src/components/Navbar.js
import React, {useState} from 'react';
import '../assets/styles/components/Navbar.css';
import logo from '../assets/images/IRLogo.png';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </div>
                
                {/* Desktop Menu */}
                <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Code Sample</a></li>
                    <li><a href="#photography">Photography</a></li>
                    <li><a href="#contact">Contact</a></li>
                    
                </ul>

                {/* Hamburger Menu Button */}
                <button className="menu-toggle" onClick={toggleMobileMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
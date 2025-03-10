import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import '../assets/styles/components/Navbar.css';
import logo from '../assets/images/IRLogo.png';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleNavClick = (sectionId: string) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
            }, 100); // Delay to ensure navigation happens first
        } else {
            document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
                    <li><button onClick={() => handleNavClick('home')}>Home</button></li>
                    <li><button onClick={() => handleNavClick('about')}>About</button></li>
                    <li><button onClick={() => handleNavClick('experience')}>Experience</button></li>
                    <li><button onClick={() => handleNavClick('projects')}>Code Sample</button></li>
                    <li>
                        <button
                            onClick ={() => window.location.href = "/photography"}
                        >
                            Photography
                        </button>
                    </li>
                    <li><button onClick={() => handleNavClick('contact')}>Contact</button></li>
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
// src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/components/Hero.css';
import logo from '../assets/images/IRLogo.png';
import portraitImage from '../assets/images/RW2_9849.jpg';

const Hero: React.FC = () => {
    return (
        <section className="hero-section" id="home">
            <motion.div 
                className="hero-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <motion.img 
                    src={logo} 
                    alt="Logo" 
                    className="hero-logo"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                
                <motion.img
                    src={portraitImage}
                    alt="Israel Rivas Portrait"
                    className="hero-image"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                />

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                >
                    Software Engineer | Photographer
                </motion.h2>
            </motion.div>
        </section>
    );
};

export default Hero;
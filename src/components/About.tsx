// src/components/About.tsx

import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/components/About.css';
import profileImage1 from '../assets/images/Me.jpg';
import profileImage2 from '../assets/images/1409.jpg';

const About: React.FC = () => {
    return (
        <section className="about-section" id="about">
            <motion.div 
                className="about-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <motion.div 
                    className="about-text"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <h2 className="about-heading">A Little <br /> About Me</h2>
                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Hi, I'm Israel Rivas, a software engineer, educator, and photographer from the Rio Grande Valley in Texas. I create impactful solutions using Python, React, and VSCode, blending creativity with technology.
                    </motion.p>

                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        Currently, I teach and mentor 7th and 8th graders in Alton, Texas. I guide students in utilizing technology while fostering
                        digital literacy and problem-solving skills. My background as a paramedic has strengthened my resilience, adaptability, and quick-thinking traits that I bring
                        to every project.
                    </motion.p>

                    <motion.p 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Beyond coding, I express my creativity through photography! 
                        Feel free to explore my work and connect if you'd like to collaborate!
                    </motion.p>
                </motion.div>

                <motion.div 
                    className="about-images"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <img src={profileImage1} alt="Photo of Needle Decompression taken by Israel" className="about-image main-image" />
                    <img src={profileImage2} alt="Photo of Blue Angels taken by Israel" className="about-image secondary-image" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
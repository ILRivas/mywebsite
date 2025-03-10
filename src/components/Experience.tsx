import React from 'react';
import { motion } from 'framer-motion';
import '../assets/styles/components/Experience.css';
import profileImage1 from '../assets/images/NeedleBW.jpg';
import profileImage2 from '../assets/images/20170122_144347.jpg';
import profileImage3 from '../assets/images/Blue-Angels.jpg';

const Experience: React.FC = () => {
    return (
        <section className="experience-section" id="experience">
            <motion.div 
                className="exp-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <div className="exp-content">
                    {/* Text Content First */}
                    <motion.div 
                        className="exp-text"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <h2 className="exp-heading">Work Experience</h2>

                        <div className="exp-projects">
                            <h3>Personal Projects:</h3>
                            <ul>
                                <li>2024: Developed a Budget Tracker App using Python and Pyside, providing income and expense management with a focus on practical budgeting solutions.</li>
                                <li>2025: Developed a personal portfolio website using React, Typescript, and Frame Motion.</li>
                            </ul>

                            <h3>Professional Work:</h3>
                            <ul>
                                <li><strong>Educator | Alton, Texas</strong> | Taught 7th and 8th grade Touch Systems Data Entry, focusing on typing skills, digital literacy, and technology integration in the classroom.</li>
                                <li><strong>Paramedic | McAllen, Texas</strong> | Delivered emergency care in high-stress situations, showcasing quick thinking and resilience—skills that translate well to software development.</li>
                                <li><strong>Business Owner | Bail Bond Company</strong> | Managed millions of dollars in bonds, led meetings with stakeholders and clients, and ensured compliance with industry regulations while maintaining strong client relationships.</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Images Second */}
                    <motion.div 
                        className="exp-images"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <img src={profileImage1} alt="Photo of Needle Decompression taken by Israel" className="experience-image main-image" />
                        <img src={profileImage2} alt="Photo of Blue Angels taken by Israel" className="experience-image secondary-image" />
                        <img src={profileImage3} alt="Photo of" className="experience-image tertiary-image" />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
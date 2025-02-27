// src/components/ParticlesBackground.tsx
import React, { useEffect } from 'react';
import Particles from 'particlesjs';

const ParticlesBackground: React.FC = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && document.querySelector('.background')) {
            try {
                Particles.init({
                    selector: '.background',
                    color: '#333333',
                    connectParticles: true, // Ensure particles connect with lines
                    maxParticles: 100,
                    sizeVariations: 3,
                    speed: 0.5,
                    minDistance: 150, // Increased connection distance
                    responsive: [
                        {
                            breakpoint: 768,
                            options: {
                                maxParticles: 80,
                                color: '#333333',
                                connectParticles: true
                            }
                        },
                        {
                            breakpoint: 425,
                            options: {
                                maxParticles: 50,
                                connectParticles: true
                            }
                        },
                        {
                            breakpoint: 320,
                            options: {
                                maxParticles: 30,
                                connectParticles: true
                            }
                        }
                    ]
                });
            } catch (error) {
                console.error('Particles.js initialization error:', error);
            }
        }
    }, []);

    return <canvas className="background"></canvas>;
};

export default ParticlesBackground;
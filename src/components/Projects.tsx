import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import axios from 'axios';
import { motion } from 'framer-motion';
import '../assets/styles/components/Projects.css';

const repoName = 'budget-tracker-application';
const filePath = 'gui/logic/manage_budget_logic.py';
const githubUsername = 'ILRivas';

const fileUrl = `https://api.github.com/repos/${githubUsername}/${repoName}/contents/${filePath}`;
const repoLink = `https://github.com/${githubUsername}/${repoName}`;

const Projects: React.FC = () => {
    const [code, setCode] = useState<string | null>(null);

    useEffect(() => {
        const fetchFile = async () => {
            try {
                const response = await axios.get(fileUrl);
                const decodedContent = atob(response.data.content);
                setCode(decodedContent);
            } catch (error) {
                console.error('Failed to fetch file from GitHub:', error);
            }
        };

        fetchFile();
    }, []);

    return (
        <section className="projects-section" id="projects">
            <motion.div 
                className="projects-container"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <h2 className="projects-heading">Budget Tracker Sample Code</h2>
                {code ? (
                    <motion.div 
                        className="code-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        viewport={{ once: true }}
                    >
                        <SyntaxHighlighter language="python" style={coy}>
                            {code}
                        </SyntaxHighlighter>
                    </motion.div>
                ) : (
                    <p>Loading code...</p>
                )}
                <motion.div
                    className="button-container"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <a href={repoLink} target="_blank" rel="noopener noreferrer" className="repo-button">
                        View Full Repository
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Projects;
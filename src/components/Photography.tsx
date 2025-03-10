import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Photography.css';

const Photography: React.FC = () => {
    return (
        <div className="photography-container">
            <h1 className="construction-header">Under Construction</h1>
            <p className="construction-text">
                This section will showcase my photography work soon. Stay tuned!
            </p>
            <Link to="/" className="return-home">Return to Home</Link>
        </div>
    );
};

export default Photography;
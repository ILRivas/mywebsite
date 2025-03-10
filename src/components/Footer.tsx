import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import "../assets/styles/components/Footer.css"; // Adjust path as needed

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>© 2025 Israel Rivas II | All Rights Reserved</p>
      <div className="social-icons">
        <a 
          href="https://www.linkedin.com/in/israel-rivas-ii/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="linkedin"
        >
          <FaLinkedin className="social-icon" />
        </a>
        <a 
          href="https://github.com/ILRivas" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github"
        >
          <FaGithub className="social-icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
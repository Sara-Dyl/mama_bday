import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>I love you! &copy;{new Date().getFullYear()} <br /> <br /> Have the best day momma!</p>
        </footer>
    );
};

export default Footer;
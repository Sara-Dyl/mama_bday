import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [activeNav, setActiveNav] = useState('/');

    const handleNavClick = (path) => {
        setActiveNav(path);
    };

    return (
        <nav>
            <ul className="navbar">
                <li>
                    <Link
                        to="/"
                        tabIndex="0"
                        className={activeNav === '/' ? 'active' : ''}
                        onClick={() => handleNavClick('/')}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        to="/Memories"
                        tabIndex="0"
                        className={activeNav === '/Memories' ? 'active' : ''}
                        onClick={() => handleNavClick('/Memories')}
                    >
                        Memories
                    </Link>
                </li>
                <li>
                    <Link
                        to="/Music"
                        tabIndex="0"
                        className={activeNav === '/Music' ? 'active' : ''}
                        onClick={() => handleNavClick('/Music')}
                    >
                        Music
                    </Link>
                </li>
                <li>
                    <Link
                        to="/ShowLove"
                        tabIndex="0"
                        className={activeNav === '/ShowLove' ? 'active' : ''}
                        onClick={() => handleNavClick('/ShowLove')}
                    >
                        Show Love
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
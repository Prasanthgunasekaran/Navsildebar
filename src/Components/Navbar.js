import React, { useState } from 'react';
import './Navbar.scss';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`slidebar ${isOpen ? 'open' : ''}`}>
            <button className="toggle-btn" onClick={toggleSidebar}>
                {isOpen ? 'X' : 'Open'}
            </button>
            <div className="slidebar-content">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;

import React from 'react';
import './navbar.css';

import Logo from '../../assets/Linuxjobber_logo.png';
import forwardIcon from '../../assets/forward_icon.png'

export default function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="logo">
                    <a href="#"><img src={Logo} alt="LinuxJobber logo" /></a>
                </div>

                <h3> Classroom Profile</h3>
                <div className="go"><a href="#">
                    <p>Go to Classroom <img src={forwardIcon} alt="forward icon" /> </p>
                </a></div>
            </div>
        </nav>

    )
}

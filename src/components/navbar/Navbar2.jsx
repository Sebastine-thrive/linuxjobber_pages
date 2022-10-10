import React from 'react';
import Logo from '../../assets/Linuxjobber_logo.png';
import './navbar2.css';

import Nobody from '../../assets/nobody.jpg';


export default function Navbar2() {
    return (
        <nav>
            <div className="container2">
                <div className="logo">
                    <a href="#"><img src={Logo} alt="LinuxJobber logo" /></a>
                </div>

                <h3> Classroom Profile</h3>

                <div className='name_info'> <p> Nobody</p>
                    <img className='profile_pic' src={Nobody} alt="" width='60px' height='60px' />
                </div>
            </div>
        </nav>
    )
}


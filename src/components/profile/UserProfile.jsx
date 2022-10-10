
import React from 'react';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Navbar from '../navbar/Navbar';

import './profile.css'
import Nobody from '../../assets/nobody.jpg';
import human from '../../assets/human.png';
import dark_forward_icon from '../../assets/dark_forward_icon.png';
import graduate_icon from '../../assets/graduate_icon.png';
import marked_icon from '../../assets/lab_active.png';
import logout_icon from '../../assets/logout_icon.png';

import { NavLink } from 'react-router-dom';




export default function UserProfile() {
  return (
    <div className='userprofile'>
      {/* <Navbar /> */}
      <div className='profile'>

        <div className="profile_picture">
          <img className="img1" src={Nobody} alt="profile" width="95%" height='230px' />
          <p className='icon'>
            <a href=""><CameraAltOutlinedIcon style={{ width: '20px', marginTop: '3px', }} /> </a>
          </p>
        </div>


        <div className='username'> <h2> Nobody Lorem</h2>
          {/* <span > &#60;  </span> Mr Seb  / <span> &#62;  </span> */}
        </div>

        <div className="profile_buttons">

          <div className='button_info'>
            <NavLink to='/your_profile' exact="true">
              {/* <button className='button1'> */}
                <img className='symbol' src={human} alt="" height='16px' />
                <span className='title' id='title1'> Profile</span>
                <img className='arrow1' src={dark_forward_icon} alt="" />
              {/* </button> */}
            </NavLink>
          </div>

          <div className='button_info'>
            <NavLink to='/your_course' exact="true">
              <img className='symbol' src={graduate_icon} alt="" width='18px' height='16px' />
              <span className='title' id='title2'>Courses </span>
              <img className='arrow2' src={dark_forward_icon} alt="" />
            </NavLink>

          </div>

          <div className='button_info'>
            <NavLink to='/dad' exact="true">

              <img className='symbol' src={marked_icon} alt="" width='15px' height='15px' />
              <span className='title' id='title3' > Attendance </span>
              <img className='arrow3' src={dark_forward_icon} alt="" />
            </NavLink>

          </div>


          <p className='logout'><img src={logout_icon} alt="" /> Logout</p>

        </div>
      </div >
    </div>


  )
}






import React, { Component } from 'react';
import video1 from '../../assets/videos/5. static_Form_Components.mp4';
import './video.css';

export class Video extends Component {
    render() {
        return (
            <>
                <div className='video'>
                    <video controls width="600" height='450px' marginTop='4rem'>

                        <source src={video1} />

                        Download the video.
                        <a href={video1}>MP4</a>
                    </video>
                </div>
                <h4>React Form Components</h4>
            </>

        )
    }
}

export default Video
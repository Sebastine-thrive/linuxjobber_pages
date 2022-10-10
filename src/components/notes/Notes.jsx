import React, { Component } from 'react';
import './notes.css';

import Blue_ForwardIcon from '../../assets/blue_forward_icon.png';
import Play from '../../assets/play_button.png';



export class Notes extends Component {
    render() {
        return (
            <>
                <div className='card_body'>

                    <div className='topic'> <img src={Play} alt="" width='25px' height='25px' />
                        <h4> React Form Component</h4>
                        <div className='go_to' >  <h5>Go to Video </h5>  <img src={Blue_ForwardIcon} alt="" />
                        </div>
                    </div>

                    <div className='content'>
                        <p>
                            <b>How to build a React Form component</b> <br />
                            Whether it's a login page or an internal tool, your React app is going to need a form, and handling events and dataflow via raw HTML inputs isn't any fun. This guide will walk you through how to use the react-hook-form library and take you step-by-step through a project where we create a form for an internal tool and extend it with some useful features. <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita velit earum esse et optio blanditiis incidunt, neque officia quos quas accusantium consequuntur eveniet totam soluta deleniti eius dignissimos quis? Perspiciatis eaque, officia quos eos odio accusantium?

                        </p>
                    </div>

                </div>

                <div className='card_body'>

                    <div className='topic'> <img src={Play} alt="" width='25px' height='25px' />
                        <h4> React Form component</h4>
                        <div className='go_to'>  <h5>Go to Video </h5>  <img src={Blue_ForwardIcon} alt="" />
                        </div>
                    </div>

                    <div className='content'>
                        <p>

                            <b>How to build a React Form component</b> <br />
                            Whether it's a login page or an internal tool, your React app is going to need a form, and handling events and dataflow via raw HTML inputs isn't any fun. This guide will walk you through how to use the react-hook-form library and take you step-by-step through a project where we create a form for an internal tool and extend it with some useful features. <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita velit earum esse et optio blanditiis incidunt, neque officia quos quas accusantium consequuntur eveniet totam soluta deleniti eius dignissimos quis? Perspiciatis eaque, officia quos eos odio accusantium?

                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est obcaecati amet vitae explicabo dolorum blanditiis a ratione ab excepturi iusto asperiores, temporibus qui. Numquam laudantium nihil vitae qui quaerat id!
                        </p>
                    </div>
                </div>
            </>
        )
    }
}



export default Notes
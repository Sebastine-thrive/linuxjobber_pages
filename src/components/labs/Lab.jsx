import React, { Component } from 'react';
import './lab.css'

import Upload_icon from '../../assets/upload_icon.png';
import divider from '../../assets/divider_icon.png';
import Darkblueforward_icon from '../../assets/darkblue_forward _icon.png'


export class Lab extends Component {
    render() {

        return (


            <div className='.card_body'>
                <ol className='lab_body'>
                    <li >
                        <p>
                            In this lab, we shall be discussing Scoping in  which refers to the current context of code, which determines the accessibility of variables to JavaScript. The two types of scope are local and global: Global variables are those declared outside of a block. Local variables are those declared inside of a block.
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit aperiam culpa earum quisquam molestiae placeat laboriosam magnam perferendis?

                            <h4>Note:</h4>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id itaque recusandae similique iste eius odit, ipsam fuga sed, earum aspernatur magnam minus omnis qui! Unde harum nemo aut pariatur nisi dolor voluptatem quos itaque atque velit veritatis assumenda, expedita ab?
                            </p>

                            <h4>Task:</h4>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore nam, distinctio reiciendis doloremque fuga, blanditiis laboriosam quas, laborum ea iure quos! Suscipit nemo consequuntur nobis voluptas atque vero. Vel ipsum non eius quis temporibus earum.</p>

                            <h4>Hint:</h4>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, iure. Minima, tempore molestiae quibusdam vero suscipit ratione autem eveniet voluptatem ut beatae aliquam sunt. Cum?</p>
                        </p>

                        <div className='lab_buttons'>
                            {/* <input className='lab_button1' */}
                            {/* /> */}

                            <label htmlFor="input_tag">
                                <div className='lab_button1'>
                                    <img src={Upload_icon} alt="" /> <span> Upload lab</span>
                                    <input type="file" id='input_tag' accept="image/*,.pdf..img" />
                                </div>
                            </label>

                            {/* <span>Upload Lab </span>  */}
                            <img src={divider} alt="" />


                            <div className='center'> <img src="" alt="" /> <span> Your file will be here</span></div> <img src={divider} alt="" />
                            <button className='lab_button2'><span> Submit the task </span> <img src={Darkblueforward_icon} alt="" /> </button>
                        </div>
                    </li>


                </ol>

            </div>
        )
    }
}

export default Lab
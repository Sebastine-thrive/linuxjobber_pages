import React, { useState } from 'react';
import UserProfile from '../../components/profile/UserProfile';
import Card from '../../components/card/card';

import Slider from '@mui/material/Slider';


import Pen_icon from '../../assets/pen_icon.png';

import './yourprofile.css';


export default function YourProfile() {

    const [value0, setValue0] = useState(3);
    const [value1, setValue1] = useState(6);
    const [value2, setValue2] = useState(4);
    const [value3, setValue3] = useState(7);
    const [value4, setValue4] = useState(1);
    const [value5, setValue5] = useState(9);
    const [value6, setValue6] = useState(8);
    const [value7, setValue7] = useState(2);

    const [equalValue, setEqualValue] = useState(true)


    const handleSliderChange0 = (event, newValue) => {
        setValue0(newValue);
        if ((newValue === value7) || (newValue === value1) || (newValue === value2) || (newValue === value3) || (newValue === value4) || (newValue === value5) || (newValue === value6)) {
            setEqualValue(true)
        } else {
            setEqualValue(false)
        }
    };

    return (
        <div className='your_profile'>
            <UserProfile />

            <div className='maincolumn'>

                <div>
                    <Card
                        width='900px'
                        height='150px'
                        marginBottom='3rem'
                    >
                        <div className='your_profile_card'
                        >
                            <div className='firstname'>
                                <label htmlFor="">First Name :</label>
                                <input className='first' type="text" name="emailAddress" placeholder=" Sebastine"
                                    disabled
                                />


                            </div>

                            <div className='lastname'>
                                <label htmlFor="">Last Name :</label>
                                <input className='first' type="text" placeholder='Duru' disabled />
                            </div>

                            <div className='email'>
                                <label htmlFor="">Email:</label>
                                <input className='email' type="email" placeholder='Sebasiousgenius@gmail.com' disabled />
                            </div>
                        </div>
                    </Card>
                </div>

                <div>
                    <Card
                        width='900px'
                        height='150px'
                        marginBottom='3rem'

                    >
                        <div className='your_profile_card2'
                        >
                            <div className='course'>
                                <label htmlFor="">Course of study in school:</label>
                                <input type="text" name="emailAddress" placeholder="Industrial Engineering" disabled
                                />


                            </div>

                            <div className='student'>
                                <label htmlFor="">I am a student :</label>
                                <input type="text" placeholder='No' disabled />
                            </div>

                            <div className='graduation'>
                                <label htmlFor=""> Graduation date:</label>
                                <input type="text" placeholder='20th October, 2023' disabled />
                            </div>
                        </div>
                    </Card>
                </div>

                <div className='new_card'>
                    <div className='slide_display'>
                        <div className='intpoint_body'>
                            <div className='intpoints'>
                                <p> Cybersecurity <span> {value0}/10 </span> </p>

                                <p className='slide'>
                                    <Slider
                                        style={{ width: 250, height: 8, marginLeft: 0, marginTop: -30 }}
                                        value={value0}
                                        // onChange={handleSliderChange0}
                                        aria-labelledby="input-slider"
                                        min={0}
                                        max={10}
                                        defaultValue={1}
                                        step={1}
                                        valueLabelDisplay='auto'
                                        marks
                                    />
                                </p>
                            </div>

                            <div className='intpoints'>
                                <p> Project Management <span> {value1}/10 </span> </p>

                                <p className='slide'>
                                    <Slider
                                        style={{ width: 250, height: 8, marginLeft: 0, marginTop: -30 }}
                                        value={value1}
                                        // onChange={handleSliderChange1}
                                        aria-labelledby="input-slider"
                                        min={0}
                                        max={10}
                                        defaultValue={1}
                                        step={1}
                                        valueLabelDisplay='auto'
                                        marks
                                    />
                                </p>
                            </div>

                            <div className='intpoints'>
                                <p> Python <span> {value2}/10 </span> </p>

                                <p className='slide'>
                                    <Slider
                                        style={{ width: 250, height: 8, marginLeft: 0, marginTop: -30 }}
                                        value={value2}
                                        // onChange={handleSliderChange2}
                                        aria-labelledby="input-slider"
                                        min={0}
                                        max={10}
                                        defaultValue={1}
                                        step={1}
                                        valueLabelDisplay='auto'
                                        marks
                                    />
                                </p>
                            </div>

                            <div className='intpoints'>
                                <p> Git <span> {value3}/10 </span> </p>

                                <p className='slide'>
                                    <Slider
                                        style={{ width: 250, height: 8, marginLeft: 0, marginTop: -30 }}
                                        value={value3}
                                        // onChange={handleSliderChange3}
                                        aria-labelledby="input-slider"
                                        min={0}
                                        max={10}
                                        defaultValue={1}
                                        step={1}
                                        valueLabelDisplay='auto'
                                        marks
                                    />
                                </p>
                            </div>

                            <div className='intpoints'>
                                <p> Differential Calculus <span> {value4}/10 </span> </p>

                                <p className='slide'>
                                    <Slider
                                        style={{ width: 250, height: 8, marginLeft: 0, marginTop: -30 }}
                                        value={value4}
                                        // onChange={handleSliderChange4}
                                        aria-labelledby="input-slider"
                                        min={0}
                                        max={10}
                                        defaultValue={1}
                                        step={1}
                                        valueLabelDisplay='auto'
                                        marks
                                    />
                                </p>
                            </div>

                            <div className='intpoints'>
                                <p> Product Planning <span> {value5}/10 </span> </p>

                                <p className='slide'>
                                    <Slider
                                        style={{ width: 250, height: 8, marginLeft: 0, marginTop: -30 }}
                                        value={value5}
                                        // onChange={handleSliderChange5}
                                        aria-labelledby="input-slider"
                                        min={0}
                                        max={10}
                                        defaultValue={1}
                                        step={1}
                                        valueLabelDisplay='auto'
                                        marks
                                    />
                                </p>
                            </div>

                            <div className='intpoints'>
                                <p> Agile Methodologies <span> {value6}/10 </span> </p>

                                <p className='slide'>
                                    <Slider
                                        style={{ width: 250, height: 8, marginLeft: 0, marginTop: -30 }}
                                        value={value6}
                                        // onChange={handleSliderChange6}
                                        aria-labelledby="input-slider"
                                        min={0}
                                        max={10}
                                        defaultValue={1}
                                        step={1}
                                        valueLabelDisplay='auto'
                                        marks
                                    />
                                </p>
                            </div>

                            <div className='intpoints'>
                                <p> React  <span> {value7}/10 </span> </p>

                                <p className='slide'>
                                    <Slider
                                        style={{ width: 250, height: 8, marginLeft: 0, marginTop: -30 }}
                                        value={value7}
                                        // onChange={handleSliderChange7}
                                        aria-labelledby="input-slider"
                                        min={0}
                                        max={10}
                                        defaultValue={1}
                                        step={1}
                                        valueLabelDisplay='auto'
                                        marks
                                    />
                                </p>
                            </div>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

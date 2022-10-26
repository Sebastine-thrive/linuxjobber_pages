import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import UserProfile from '../../components/profile/UserProfile';
import Card from '../../components/card/card';

import './interest.css';
// import InputSlider from '../../components/slider/Slider';
import Slider from '@mui/material/Slider';


export default function Interest() {
    // const [anyValue, setAnyValue] = useState()
    const [value0, setValue0] = useState(0);
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [value3, setValue3] = useState(0);
    const [value4, setValue4] = useState(0);
    const [value5, setValue5] = useState(0);
    const [value6, setValue6] = useState(0);
    const [value7, setValue7] = useState(0);

    const [equalValue, setEqualValue] = useState(true)


    const handleSliderChange0 = (event, newValue) => {
        setValue0(newValue);
        if ((newValue === value7) || (newValue === value1) || (newValue === value2) || (newValue === value3) || (newValue === value4) || (newValue === value5) || (newValue === value6)) {
            setEqualValue(true)
        } else {
            setEqualValue(false)
        }
    };


    const handleSliderChange1 = (event, newValue) => {
        setValue1(newValue);
        if ((newValue === value0) || (newValue === value7) || (newValue === value2) || (newValue === value3) || (newValue === value4) || (newValue === value5) || (newValue === value6)) {
            setEqualValue(true)
        } else {
            setEqualValue(false)
        }
    };


    const handleSliderChange2 = (event, newValue) => {
        setValue2(newValue);
        if ((newValue === value0) || (newValue === value1) || (newValue === value7) || (newValue === value3) || (newValue === value4) || (newValue === value5) || (newValue === value6)) {
            setEqualValue(true)
        } else {
            setEqualValue(false)
        }
    };


    const handleSliderChange3 = (event, newValue) => {
        setValue3(newValue);
        if ((newValue === value0) || (newValue === value1) || (newValue === value2) || (newValue === value7) || (newValue === value4) || (newValue === value5) || (newValue === value6)) {
            setEqualValue(true)
        } else {
            setEqualValue(false)
        }
    };


    const handleSliderChange4 = (event, newValue) => {
        setValue4(newValue);
        if ((newValue === value0) || (newValue === value1) || (newValue === value2) || (newValue === value3) || (newValue === value7) || (newValue === value5) || (newValue === value6)) {
            setEqualValue(true)
        } else {
            setEqualValue(false)
        }
    };


    const handleSliderChange5 = (event, newValue) => {
        setValue5(newValue);
        if ((newValue === value0) || (newValue === value1) || (newValue === value2) || (newValue === value3) || (newValue === value4) || (newValue === value7) || (newValue === value6)) {
            setEqualValue(true)
        } else {
            setEqualValue(false)
        }
    };


    const handleSliderChange6 = (event, newValue) => {
        setValue6(newValue);
        if ((newValue === value0) || (newValue === value1) || (newValue === value2) || (newValue === value3) || (newValue === value4) || (newValue === value5) || (newValue === value7)) {
            setEqualValue(true)
        } else {
            setEqualValue(false)
        }
    };


    const handleSliderChange7 = (event, newValue) => {
        setValue7(newValue);
        if ((newValue === value0) || (newValue === value1) || (newValue === value2) || (newValue === value3) || (newValue === value4) || (newValue === value5) || (newValue === value6)) {

            setEqualValue(true)
        } else {
            setEqualValue(null)
        }
    };




    return (
        <div className='interest'>
            <UserProfile />

            <div className='main'>
                <Card
                    width='800px'
                    height='550px'
                    marginBottom='3rem'
                >

                    <div className='intcard_content'>
                        <h4> Score your level of interest in these job titles: </h4>


                        <div className='intpoint_body'>
                            <div className='intpoints'>
                                <p> Cybersecurity <span> {value0}/10 </span> </p>

                                <p className='slide'>
                                    <Slider
                                        style={{ width: 250, height: 8, marginLeft: 0, marginTop: -30 }}
                                        value={value0}
                                        onChange={handleSliderChange0}
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
                                        onChange={handleSliderChange1}
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
                                <p> Project Management <span> {value2}/10 </span> </p>

                                <p className='slide'>
                                    <Slider
                                        style={{ width: 250, height: 8, marginLeft: 0, marginTop: -30 }}
                                        value={value2}
                                        onChange={handleSliderChange2}
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
                                <p> Project Management <span> {value3}/10 </span> </p>

                                <p className='slide'>
                                    <Slider
                                        style={{ width: 250, height: 8, marginLeft: 0, marginTop: -30 }}
                                        value={value3}
                                        onChange={handleSliderChange3}
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
                                <p> Project Management <span> {value4}/10 </span> </p>

                                <p className='slide'>
                                    <Slider
                                        style={{ width: 250, height: 8, marginLeft: 0, marginTop: -30 }}
                                        value={value4}
                                        onChange={handleSliderChange4}
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
                                <p> Project Management <span> {value5}/10 </span> </p>

                                <p className='slide'>
                                    <Slider
                                        style={{ width: 250, height: 8, marginLeft: 0, marginTop: -30 }}
                                        value={value5}
                                        onChange={handleSliderChange5}
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
                                <p> Project Management <span> {value6}/10 </span> </p>

                                <p className='slide'>
                                    <Slider
                                        style={{ width: 250, height: 8, marginLeft: 0, marginTop: -30 }}
                                        value={value6}
                                        onChange={handleSliderChange6}
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
                                <p> Project Management <span> {value7}/10 </span> </p>

                                <p className='slide'>
                                    <Slider
                                        style={{ width: 250, height: 8, marginLeft: 0, marginTop: -30 }}
                                        value={value7}
                                        onChange={handleSliderChange7}
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

                        {equalValue && (
                            <h4 className='error'> * You cannot pick a number twice </h4>
                        )}

                    </div>

                    {(equalValue == null) && (
                        <Link to='/your_profile'>
                            <button className='done'> Done  </button>
                        </Link>
                    )}

                </Card>
            </div>

        </div>
    )
}


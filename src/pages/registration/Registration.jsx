import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './registration.css';

import UserProfile from '../../components/profile/UserProfile';
import ForwardIcon from '../../assets/forward_icon.png';
import Card from '../../components/card/card';
import ReplyIcon from '@mui/icons-material/Reply';
import link from '../../assets/link.png';
import No from '../../assets/no.png'


export default function Registration() {
    const [studentButton, setStudentButton] = useState(true);
    const [student, setStudent] = useState(null);

    const [graduateButton, setGraduateButton] = useState(true);
    const [graduate, setGraduate] = useState(null);

    const [countryReqButton, setCountryReqButton] = useState(true);
    const [countryRequire, setCountryRequire] = useState(null);

    const [completedButton, setCompletedButton] = useState(true);
    const [completed, setCompleted] = useState(null);

    const [linkAppear, setLinkAppear] = useState(false)




    const handleStudentTrue = () => {
        setStudent(true);
        setStudentButton(false)
        // console.log(student)
    };

    const handleStudentFalse = () => {
        if ((student === null) && (student !== true)) {
            setStudent(false);
        } else {
            setStudent(null)
        };
        setStudentButton(false);
    }


    const handleGraduateTrue = () => {
        setGraduate(true);
        setGraduateButton(false);
    };

    const handleGraduateFalse = () => {
        if ((graduate === null) && (graduate !== true)) {
            setGraduate(false);
        } else {
            setGraduate(null)
        }
        setGraduateButton(false);
    }

    const handleRequireTrue = () => {
        setCountryRequire(true);
        setCountryReqButton(false)
    };

    const handleRequireFalse = () => {
        if ((countryRequire === null) && (countryRequire !== true)) {
            setCountryRequire(false);
        } else {
            setCountryRequire(null)
        }
        setCountryReqButton(false)
        setLinkAppear(true)
    }

    const handleCompletedTrue = () => {
        setCompleted(true);
        setCompletedButton(false)
        setLinkAppear(true)
    };

    const handleCompletedFalse = () => {
        if ((completed === null) && (completed !== true)) {
            setCompleted(false);
        } else {
            setCompleted(null)
        }
        setCompletedButton(false)
        setLinkAppear(true)
    };


    return (
        <div className='registration'>

            <UserProfile />
            <div className='card_container'>
                <Card
                    width='600px' height='550px'>
                    <div className='regcard_content'>

                        <ol>

                            <li><div className='content'>   <label htmlFor="course"> Course of study in School:</label>

                                <input type="text" id="name" name="course" required placeholder='Course of study' />
                            </div> </li>

                            <li><div className='content'>   <label htmlFor="name"> Are you a student?
                                <span className={student ? 'show' : 'hide'} id='yes'> &#10004; Yes</span>

                                {!student && (
                                    <span
                                        // className='hidden_display'
                                        className={(student === null) ? 'hide' : 'show'}
                                        id='no'> &times; No</span>
                                )}</label>

                                {studentButton && (
                                    <span className='answer_body first_set' > <button className='answer ' onClick={() => handleStudentTrue()}> Yes </button>
                                        <button className='answer' onClick={() => handleStudentFalse()}> No </button> <br />
                                    </span>
                                )}

                                {student && <>
                                    <input id='shorter' type="text" name="name" placeholder='Course of study' />


                                    <input className='short' type="text" id="name" name="name" placeholder='Expected graduation date' />
                                    <ReplyIcon style={{ color: '#C5CCEC', marginLeft: -30, }} />
                                </>
                                }

                            </div> </li>

                            <li> <div className='content'>   <label htmlFor="name"> Did you graduate?
                                <span className={graduate ? 'show' : 'hide'} id='yes'> &#10004; Yes</span>

                                {!graduate && (
                                    <span className={(graduate === null) ? 'hide' : 'show'} id='no'> &times; No</span>
                                )}
                            </label>

                                {(graduate !== null) && (
                                    <>
                                        <input className={graduate !== null ? 'show' : 'hide'} id='shorter' type="text" name="name" placeholder='Current occupation' />
                                        <ReplyIcon style={{ color: '#C5CCEC', marginLeft: -30, }} /> <br />
                                    </>
                                )}


                                {graduateButton && (
                                    <span className='answer_body' > <button className='answer ' onClick={() => handleGraduateTrue()}> Yes </button>
                                        <button className='answer' onClick={() => handleGraduateFalse()}> No </button>
                                    </span>
                                )}

                            </div></li>

                            <li> <div className='content'>   <label htmlFor="name"> Does your country require post-graduation service?
                                <span className={countryRequire ? 'show' : 'hide'} id='yes'> &#10004; Yes</span>

                                {!countryRequire && (
                                    <span className={countryRequire === null ? 'hide' : 'show'} id='no'> &times; No</span>
                                )}
                            </label>

                                {countryReqButton && (
                                    <span className='answer_body' > <button className='answer ' onClick={() => handleRequireTrue()}> Yes </button>
                                        <button className='answer' onClick={() => handleRequireFalse()}> No </button>
                                    </span>
                                )}

                                {(countryRequire && (
                                    <p> <img src={link} alt="" height='30px' /> Have you completed?
                                        <span
                                            className={completed ? 'show' : 'hide'}
                                            id='yes'> &#10004; Yes</span>

                                        {!completed && (
                                            <span className={(completed === null) ? 'hide' : 'show'} id='no'> &times; No</span>
                                        )}
                                        <br />

                                        {completedButton && (
                                            <span className='answer_body' > <button className='answer ' onClick={ handleCompletedTrue}> Yes </button>
                                                <button className='answer' onClick={() => handleCompletedFalse()}> No </button>
                                            </span>
                                        )}
                                    </p>
                                )

                                )}

                            </div></li>
                        </ol>

                    </div>

                    {linkAppear && (
                        <Link to='./interest'>
                            <button className={(!countryRequire ? 'next' : 'next_no')}> Next Step <img src={ForwardIcon} alt="" /> </button>
                        </Link>
                    )}

                </Card>
            </div>

        </div>
    )
}

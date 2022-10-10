import React, { useState } from 'react';
import './chat.css';

import MessageCard from '../messageCards/MessageCard';
import MessageCardU from '../messageCards/MessageCard2';

import { Studentlist } from '../../components/Lists';

import ChatActive from '../../assets/chat_active.png';
import Icon from '../../assets/blue_forward_icon.png';
import Ellipse from '../../assets/ellipse_list.png';
import TopList from '../../assets/toplist_icon.png';
import Down from '../../assets/down_icon.png';
import Up from '../../assets/up_icon.png';
import File from '../../assets/file_icon.png';






export default function Chats({ privateChat, generalChat, handlePrivateChat, handleGeneralChat }) {

    const [participants, setParticipants] = useState(false);

    const handleParticipant = () => {
        if (participants === true) {
            setParticipants(false);
        } else {
            setParticipants(true)
        }
    }


    return (
        <div className='chat'>
            <div className='chat_card1'>

                <div className='search_bar'>
                    <i id='fontuser' className="fa fa-search fa-lg"></i>
                    <input type="text" placeholder="Search.." />

                    <div className={generalChat ? 'chat_title' : 'chat_title2'} onClick={() => handleGeneralChat()}>
                        <img className='img1' src={ChatActive} alt="" />
                        <span>General chat </span>
                        <img className='img2' src={Icon} alt="" />
                    </div>

                    <div className={generalChat ? 'chat_title2' : 'chat_title'} onClick={() => handlePrivateChat()}>
                        <img className='img1' src={ChatActive} alt="" />
                        <span>Private chat </span>
                        <img className='img2' src={Icon} alt="" />
                    </div>

                    {generalChat && (
                        <div className='student_roll'>
                            <ul className='student_list'>
                                <li>
                                    <img className='ellipse' src={Ellipse} alt="" />
                                    <div className='name'>
                                        <p>Adams S. </p>
                                        <span> Hi there, how is the task going</span>
                                    </div>

                                    <img src={Icon} alt="" />
                                </li>

                                <li>
                                    <img className='ellipse' src={Ellipse} alt="" />
                                    <div className='name'>
                                        <p>Paul S. </p>
                                        <span> Anyone knows how I can reach the boss? </span>
                                    </div>

                                    <img className='forward_icon' src={Icon} alt="" />
                                </li>

                                <li>
                                    <img className='ellipse' src={Ellipse} alt="" />
                                    <div className='name'>
                                        <p>Sarah L. </p>
                                        <span> Who is Nobody Scholes here?</span>
                                    </div>
                                    <img src={Icon} alt="" />
                                </li>

                                <li>
                                    <img className='ellipse' src={Ellipse} alt="" />
                                    <div className='name'>
                                        <p>Lionel P. </p>
                                        <span> So much noise..its too early for that!</span>
                                    </div>
                                    <img src={Icon} alt="" />
                                </li>

                                <li>
                                    <img className='ellipse' src={Ellipse} alt="" />
                                    <div className='name'>
                                        <p>Nobody S. </p>
                                        <span> Who is looking for nobody?</span>
                                    </div>
                                    <img src={Icon} alt="" />
                                </li>
                            </ul>

                        </div>
                    )}
                </div>

            </div>


            <div className={generalChat ? 'chat_card2' : 'chat_card2_alternative'} >
                <div className='chatcard2_body'>


                    {generalChat && (
                        <>

                            <div className='chatheader_parent'>
                                <div className='chat_header' onClick={() => handleParticipant()}>
                                    <img src={TopList} alt="" />
                                    <span>List of Participants </span>
                                    <img src={participants ? Up : Down} alt="" />
                                </div>

                                {participants && (
                                    <>
                                        <div className='participant_list'>
                                            <div className='participants'>
                                                <div className='participants1'>

                                                    <div>
                                                        <img src={Ellipse} alt="" />
                                                        <span>Adams Smith</span>
                                                    </div>

                                                    <div>
                                                        <img src={Ellipse} alt="" />
                                                        <span> Paul Scholes</span>
                                                    </div>

                                                    <div>
                                                        <img src={Ellipse} alt="" />
                                                        <span> Sarah Levine </span>
                                                    </div>
                                                </div>

                                                <div className='participants2'>

                                                    <div>
                                                        <img src={Ellipse} alt="" />
                                                        <span>Lionel Pio</span>
                                                    </div>

                                                    <div>
                                                        <img src={Ellipse} alt="" />
                                                        <span> Nobody Scholes</span>
                                                    </div>

                                                    <div>
                                                        <img src={Ellipse} alt="" />
                                                        <span> Ada Drinkwater </span>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </>
                                )}

                            </div>

                            <div className='messager_parent'>

                                <div className='messager'>
                                    <img src={Ellipse} alt="" /> <span> Sarah Levine</span>
                                </div>

                                <MessageCard
                                    width='auto'
                                    height='auto'
                                    time='09:40'
                                >
                                    Hey! Are you there? You good or do i have to worry about you. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ut dolore voluptates!
                                </MessageCard>

                                <div className='messager'>
                                    <img src={Ellipse} alt="" /> <span> Adams Smith</span>
                                </div>

                                <MessageCard
                                    width='auto'
                                    height='auto'
                                    time='09:43'
                                    backgroundColor='orange'
                                    color='blue'

                                >
                                    Hey guy! Are you there? I have been calling since morning!
                                </MessageCard>

                                <MessageCardU
                                    width='14rem'
                                    height='auto'
                                    color='white'
                                    time='09:46'

                                >
                                    Sup! What's going on?
                                </MessageCardU>

                                <div className='messager'>
                                    <img src={Ellipse} alt="" /> <span> Paul scholes</span>
                                </div>
                                <MessageCard
                                    width='auto'
                                    height='auto'
                                    time='10:00'

                                >Are you okay?
                                </MessageCard>

                                <MessageCard
                                    width='auto'
                                    height='auto'
                                    time='10:00'
                                >
                                    We have been trying to reach you. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ab eum recusandae.

                                </MessageCard>
                                <MessageCardU
                                    width='auto'
                                    height='auto'
                                    color='white'
                                    time='10:03'

                                >
                                    Told you I was gonna be offline for a while cos Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id quisquam officia est!
                                </MessageCardU>

                            </div>

                            <div className='chatmsg'>
                                <i class="fa-regular fa-face-smile"></i>
                                <input type="text" placeholder='Type a message' />
                                <img src={File} className='file_icon' alt="" />
                                <button> Send </button>
                            </div>
                        </>
                    )}

                    {privateChat && (
                        <div className='messager_parent'>

                            <div className='messager'>
                                <img src={Ellipse} alt="" /> <span> Sarah Levine</span>
                            </div>

                            <MessageCard
                                width='auto'
                                height='auto'
                                time='09:40'
                            >
                                Hey! Are you there? You good or do i have to worry about you. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ut dolore voluptates!
                            </MessageCard>


                            <MessageCardU
                                width='14rem'
                                height='auto'
                                color='white'
                                time='09:46'
                            >
                                Sup! What's going on?
                            </MessageCardU>


                            <MessageCard
                                width='auto'
                                height='auto'
                                time='09:40'
                            >
                                Thoght you would be in class. Where are you? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis ut dolore voluptates!
                            </MessageCard>

                            <MessageCardU
                                width='14rem'
                                height='auto'
                                color='white'
                                time='09:46'
                            >
                                I am with the guys. We are on the way. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis voluptatem doloribus facilis eveniet consectetur nihil eligendi.
                            </MessageCardU>

                            <div className='private_chatmsg'>
                                <i class="fa-regular fa-face-smile"></i>
                                <input type="text" placeholder='Type a message' />
                                <img src={File} className='file_icon' alt="" />
                                <button> Send </button>
                            </div>
                        </div>

                    )}

                </div>



            </div>
        </div >
    )

}


import React, { useState } from 'react';
import Lab from '../../components/labs/Lab';
import Video from '../../components/video/Video';
import Notes from '../../components/notes/Notes';
import Chats from '../../components/chat/Chat';

import BackIcon from '../../assets/backward_icon.png';
import Blue_ForwardIcon from '../../assets/blue_forward_icon.png';
import List from '../../assets/list_icon.png';
import List2 from '../../assets/list_active.png';
import MessageIcon from '../../assets/message_icon.png';
import NoteActive from '../../assets/note_icon_active.png';
import Note from '../../assets/note_icon.png';

import LabActive from '../../assets/note_icon_active.png';
import Lab_icon from '../../assets/lab.png';

import ChatActive from '../../assets/chat_active.png';
import Chat from '../../assets/chat.png';

import Play from '../../assets/play_button.png';



import Group from '../../assets/group1.png';
import Group2 from '../../assets/group_icon.png';

import { Topiclist, Studentlist } from '../../components/Lists';
import './yourcourse.css'

export default function YourCourse({privateChat, generalChat, handlePrivateChat, handleGeneralChat}) {

  const [studentButton, setStudentButton] = useState(false);
  const [courseButton, setCourseButton] = useState(true);

  const [noteButton, setNoteButton] = useState(true);
  const [labButton, setLabButton] = useState(false);
  const [playButton, setPlayButton] = useState(false);
  const [chatButton, setChatButton] = useState(false);

  

  const handleStudentButton = () => {
    if (studentButton === false) {
      setStudentButton(true);
      setCourseButton(false);
    } else {
      return null;
    }
  }

  const handleCourseButton = () => {
    if (courseButton === false) {
      setCourseButton(true);
      setStudentButton(false);
    } else {
      return null;
    }
  }


  const handleNoteButton = () => {
    if (noteButton === false) {
      setNoteButton(true);
      setLabButton(false);
      setPlayButton(false);
      setChatButton(false)
    } else {
      return null;
    }

  }

  const handleLabButton = () => {
    if (labButton === false) {
      setLabButton(true);
      setNoteButton(false);
      setPlayButton(false);
      setChatButton(false)
    } else {
      return null;
    }

  }


  const handleChatButton = () => {
    if (chatButton === false) {
      setChatButton(true);
      setNoteButton(false);
      setPlayButton(false);
      setLabButton(false)
    } else {
      return null;
    }
  }


  const handlePlayButton = () => {
    if (playButton === false) {
      setPlayButton(true)
    } else {
      return null;
    }
    setNoteButton(false);
    setLabButton(false);
    setChatButton(false)
  }

  const goToVideo = () => {
    if (playButton === false) {
      setPlayButton(true);
      setCourseButton(true);
      setNoteButton(false);
      setLabButton(false);
      setChatButton(false)
    } else {
      return null;
    }

  }



  return (
    <div className='parentdiv'>
      <div className='yourcourse'>
        <h5> <img src={BackIcon} alt="" /> Your Courses</h5>

        <div className='head_buttons'>
          <button onClick={() => handleCourseButton()} className='head_button1'> <img src={courseButton ? List2 : List} alt="" /> <span className={courseButton ? 'span_active' : 'span1'}> Topic </span> </button>

          <button onClick={() => handleStudentButton()} className='head_button2'><img src={studentButton ? Group2 : Group} alt="" /> <span className={studentButton ? 'span_show' : 'span1'} >Students </span>  <span id='number' className={studentButton ? 'span_show2' : 'span2'}>30</span> </button>
        </div>

        {courseButton && (
          <div className='card1'>

            <div className='courselist_body'>
              {Topiclist.map((item, index) => {
                return (

                  <ul index={index} className='list_body'>
                    <li className='course_list'>{item}</li>
                  </ul>
                )
              })
              }
            </div>
          </div>
        )}

        {studentButton && (
          <div className='card1'>


            <div className='studentlist_body'>
              {Studentlist.map((list, id) => {
                return (

                  <ul id={{ id }} >
                    <li className='student_list'>{list}
                      <button className='studentlist_button' onClick={()=>handlePrivateChat()}> <img src={MessageIcon} alt="message icon" /> <span>Write a message </span> </button></li>
                  </ul>
                )
              })
              }
            </div>
          </div>
        )}

      </div>

      <div className='contentdiv'>
        <div className='content_buttons'>
          <button onClick={() => handlePlayButton()} className='head_button3'> <img src={playButton ? Video : Video} alt="" /> <span className={playButton ? 'span_active' : 'span1'}> Video </span> </button>

          <button onClick={() => handleLabButton()} className='head_button3'> <img src={labButton ? LabActive : Lab_icon} alt="" /> <span className={labButton ? 'span_active' : 'span1'}> Lab </span> </button>

          <button onClick={() => handleNoteButton()} className='head_button3'> <img src={noteButton ? NoteActive : Note} alt="" /> <span className={noteButton ? 'span_active' : 'span1'}> Note </span> </button>

          <button onClick={() => handleChatButton()} className='head_button3'> <img src={chatButton ? ChatActive : Chat} alt="" /> <span className={chatButton ? 'span_active' : 'span1'}> Chat </span> </button>
        </div>

        {noteButton && (
          <div className='card2'>
            <Notes />
          </div>
        )}

        {/* Labs */}

        {
          labButton && (
            <div className='card2' >
              <Lab />
            </div>
          )
        }

        {/* video */}

        {playButton && (
          <div className='card3'>
            <Video />
          </div>

        )}

        {/* chat */}

        {chatButton && (
          <>
            <Chats privateChat={privateChat} generalChat={generalChat} handlePrivateChat={handlePrivateChat} handleGeneralChat={handleGeneralChat} />
          </>

        )}






      </div>

    </div >
  )
}


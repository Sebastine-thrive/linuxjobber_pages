import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/navbar/Navbar';
import Navbar2 from "./components/navbar/Navbar2";
// import UserProfile from "./components/profile/UserProfile";
import Registration from "./pages/registration/Registration";
import Interest from "./pages/interest/Interest";
import YourProfile from "./pages/yourProfile/YourProfile";
import YourCourse from "./pages/yourcourse/YourCourse";


import './App.css';

function App() {

  const [generalChat, setGeneralChat] = useState(true);
  const [privateChat, setPrivateChat] = useState(false);


  const handlePrivateChat = () => {
    if (privateChat === false) {
      setPrivateChat(true)
      setGeneralChat(false)
    } else {
      return null;
    }
  }


  const handleGeneralChat = () => {
    if (generalChat === false) {
      setGeneralChat(true);
      setPrivateChat(false);
    } else {
      return null;
    }
  }

  
  const wrapNavbar = (item) => {
    return (
      <>
        <Navbar />
        {item}
        </>
    )}

  const wrapNavbar2 = (item) => {
    return (
      <>
        <Navbar2 />
        {item}
      </>
    )
  }


  return (
    <Router>

      <div id='mainbody'>
        <Routes>
          <Route exact path='/' element={wrapNavbar(<Registration />)} />
          <Route exact path='/interest' element={wrapNavbar(<Interest />)} />
          <Route exact path='/your_profile' element={wrapNavbar(<YourProfile />)} />
     
          <Route exact path='/your_course' element={wrapNavbar2(<YourCourse privateChat={privateChat} generalChat={generalChat} handlePrivateChat={handlePrivateChat} handleGeneralChat={handleGeneralChat} />)}  />

        </Routes>
      </div>
    </Router>









  );
}

export default App;

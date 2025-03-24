import React from 'react';
import Home from './pages/home/Home';
import { Route,Routes } from "react-router-dom";
import Login from './pages/Login/Login';
import Player from './pages/player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from './firebase'
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const navigate =useNavigate();
  useEffect(()=>{
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("logged In")
        navigate("/")
      }
      else{
        console.log("logged Out")
        navigate("/login")
      }
    })
  },[])
  return (
    <>
    <ToastContainer theme='dark' />
    <Routes>
      <Route path='/'element={<Home />} ></Route>
      <Route path='/login'element={<Login />} ></Route>
      <Route path='/player/:id'element={<Player />} ></Route>
    </Routes>
      
    </>
  );
}

export default App;

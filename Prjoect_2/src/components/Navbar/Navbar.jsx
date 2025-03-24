import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import { Bell, Search ,ChevronDown, Pointer } from 'lucide-react';
import profileImg from '../../assets/profile_img.png'
import logo from '../../assets/logo.png'
import caret from '../../assets/caret_icon.svg'
import { useNavigate } from 'react-router-dom'; 
import {logout} from '../../firebase'
const Navbar = () => {
    const navref =useRef();
    useEffect(() => {
        const handleScroll = () => {
          if (navref.current) { // Ensure navref is not null
            if (window.scrollY > 80) {
              navref.current.classList.add("nav-dark");
            } else {
              navref.current.classList.remove("nav-dark");
            }
          }
        };
      
        // Add event listener
        window.addEventListener("scroll", handleScroll);
      
        // Cleanup: Remove event listener on unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []); // Empty dependency array to run only once on mount
      
  return (
    <div className="Navbar" ref={navref}>
        <div className="left-bar">
            <img src={logo} alt="LOGO" />
            <div className="link">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Tv shows</a></li>
                    <li><a href="#">Movies</a></li>
                    <li><a href="#">New & Popular</a></li>
                    <li><a href="#">MyList</a></li>
                    <li><a href="#">Browse By Language</a></li>
                </ul>
            </div>
        </div>
        <div className="right-bar">
            <Search size={24} cursor={Pointer} className='search' />
            <p>Children</p>
            <Bell size={24} />
            <div className="profile_pic">
                <img className = "profile_img" src={profileImg} alt="" />
                <img src={caret} alt="" />
                <div className="Profile_dropdown">
                    <p onClick={logout}>Sign out of Profile</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
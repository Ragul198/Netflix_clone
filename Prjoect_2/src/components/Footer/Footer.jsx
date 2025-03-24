import React from 'react'
import './Footer.css'
import instagram from '../../assets/instagram_icon.png'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'
import youtube from '../../assets/youtube_icon.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <img src={instagram} alt="" />
        <img src={facebook} alt="" />
        <img src={twitter} alt="" />
        <img src={youtube} alt="" />
      </div>
      <div className="text">
      <ul>
      <li>FAQ</li>
          <li>Help Center</li>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>Legal Notices</li>
          <li>Contact Us</li>
          <li>Random Item 1</li>
          <li>Random Item 2</li>
          <li>Random Item 3</li>
          <li>Random Item 4</li>
          <li>Random Item 5</li>
        </ul>
      </div>
      <div className="copyright">copyright © 2025, Netflix. </div>
    </div>
  )
}

export default Footer
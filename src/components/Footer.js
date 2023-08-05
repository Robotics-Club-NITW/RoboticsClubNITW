import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
    <div className="footer-container">
      <div className="footer-left">
        <h3>Robotics Club NITW</h3>
        <p>National Institute of Technology Warangal</p>
        <p>Email: something@gmail.com</p>
        <p>Phone: 123-456-7890</p>
      </div>
      <div className="footer-right">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="https://www.facebook.com/roboticsclub" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.twitter.com/roboticsclub" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/roboticsclub" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Robotics Club. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
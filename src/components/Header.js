import React, { useEffect, useState } from 'react'
import './Header.css'
// import logo from '../assets/favicon.ico'
import { NavLink, useLocation } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'

const Header = () => {
  const [show, setShow] = useState(false)
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    }
    else {
      setColor(false)
    }
  }
  window.addEventListener("scroll", changeColor)

  const onScroll = () => {
    // let pixelsFromTop = window.scrollY;
    // let documentHeight = document.body.clientHeight;
    // let windowHeight = window.innerHeight;
    // let difference = documentHeight - windowHeight;
    // let percentage = (100 * pixelsFromTop) / difference;
    // document.getElementById("bar").style.width = `${percentage}%`;
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const handleShow = (e) => { setShow(!show) }
  return (
    <>
      <section className={`h-wrapper ${color ? 'header-bg' : ''}`}>
        <div className='h-wrap-cont'>
        <img className='h-wrap-img' src={'https://roboticsclubnitw.github.io/images/Robotics%20Club,%20NITW.png'} style={{height:'100%'}} alt="Logo Here" />
        {useLocation().pathname==='/'?<></>:<><div className="hr-title"><h1 style={{fontSize:'1rem'}}>Robotics Club</h1></div></>}
        </div>
        <div className={`flexCenter ${show ? `h-menu hactive` : `h-menu`}`}>
          <li><NavLink onClick={handleShow} className='navlink' to='/' >Home</NavLink></li>
          <li><NavLink onClick={handleShow} className='navlink' to='/members' >Members</NavLink></li>
          <li><NavLink onClick={handleShow} className='navlink' to='/competitions' >Competitions</NavLink></li>
          <li><NavLink onClick={handleShow} className='navlink' to='/events' >Events</NavLink></li>
          <li><NavLink onClick={handleShow} className='navlink' to='/projects' >Projects</NavLink></li>
          <li><NavLink onClick={handleShow} className='navlink' to='/alumni' >Alumni</NavLink></li>
          {/* <button className='btn'>Contact</button> */}
        </div>
        <div onClick={handleShow} className="h-icon">
          {show ? <BiMenuAltRight size={30} /> : <FaBars size={20} style={{ color: 'white' }} />}
        </div>
      </section>
      {/* <div className="progressWrap" id="bar"></div> */}
    </>
  )
}

export default Header
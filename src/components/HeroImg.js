import React from 'react'
import './HeroImg.css'
import Particlesbg from './Particlesbg'


const HeroImg = (props) => {
  return (
    <>
    <div className="hero-image">
        <Particlesbg/>
        <div className="hero-content">
          <h1 style={props.small && {fontSize:'2.5rem'}}>{props.title}</h1>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  )
}

export default HeroImg
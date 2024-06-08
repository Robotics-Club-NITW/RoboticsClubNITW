import React, { useEffect } from 'react'
import './StartLoader.css'
import { preLoaderAnim } from '../animations'

const StartLoader = () => {

    useEffect(() => {
      preLoaderAnim()
    }, [])
    

  return (
    <>
    <div className="preloader">
      <div className="texts-container">
        <span>WELCOME&nbsp;</span>
        <span>TO &nbsp;</span>
        <span>ROBOTICS &nbsp;</span>
        <span>CLUB &nbsp;</span>
        <span>NITW</span>
      </div>
    </div>
    </>
  )
}

export default StartLoader
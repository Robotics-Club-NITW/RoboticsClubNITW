import React from 'react'
import './CompeteTab.css'
import { Link, Outlet } from 'react-router-dom'

const CompeteTab = () => {
    return (
        <>
            <div className="compcont">
                <div className="comptabs">
                    <Link to={'robocon'} className="comptab comprobocon">
                        <div className="compimg"></div>
                        <p>Robocon</p>
                    </Link> 
                    <Link to={'eyantra'} className="comptab compeyantra">
                        <div className="compimg"></div>
                        <p>EYantra</p>
                    </Link>
                    <Link to={'others'} className="comptab compothers">
                        <div className="compimg"></div>
                        <p>Others</p>
                    </Link>
                </div>
            </div>
            <Outlet/>
        </>
    )
}

export default CompeteTab
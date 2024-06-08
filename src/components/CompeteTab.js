import React, { useRef, useState } from 'react'
import './CompeteTab.css'
import { Link, Outlet } from 'react-router-dom'

const CompeteTab = () => {
    const ref = useRef(null);
    const [currtab, setCurrtab] = useState('')
    const scrollToOut = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <div className="compcont">
                <div className="comptabs">
                    <Link onClick={()=>{scrollToOut();setCurrtab('Robocon')}} to={'robocon'} className="comptab comprobocon">
                        <div className="compimg"></div>
                        <p>Robocon</p>
                    </Link>
                    <Link onClick={()=>{scrollToOut();setCurrtab('EYantra')}} to={'eyantra'} className="comptab compeyantra">
                        <div className="compimg"></div>
                        <p>EYantra</p>
                    </Link>
                    <Link onClick={()=>{scrollToOut();setCurrtab('Other')}} to={'others'} className="comptab compothers">
                        <div className="compimg"></div>
                        <p>Others</p>
                    </Link>
                </div>
            </div>
            <div style={{backgroundColor:'black','color':'#fff',textAlign:'center',padding:'90px 0 0 0'}} ref={ref}><h2>{currtab} {currtab===''?'':'Timeline'}</h2></div>
            <Outlet/>
        </>
    )
}

export default CompeteTab
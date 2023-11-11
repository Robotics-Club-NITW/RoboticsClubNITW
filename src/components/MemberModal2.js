import React, { useState } from 'react'
import './MemberModal2.css'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
const MemberModal2 = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCubeClick = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <>
            <div className="mainmodal">
                <div className="cubemod">
                    <div className={`cubemodal ${isFlipped ? 'flipped' : ''}`}
                        onMouseEnter={handleCubeClick} onMouseLeave={handleCubeClick}>
                        <div className="cube-inner">
                            <div className="cube-face cube-front">
                                <div className="contentFace">
                                    <p>VSK</p>
                                    <p>GenSec</p>
                                </div>
                            </div>
                            <div className="cube-face cube-back">
                                <div className="contentBack">
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit quos voluptatem impedit </p>
                                    <div className="socialsback">
                                        <FaInstagram />
                                        <FaLinkedin />
                                    </div>
                                </div>
                            </div>
                            <div className="cube-face cube-left"></div>
                            <div className="cube-face cube-right"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MemberModal2
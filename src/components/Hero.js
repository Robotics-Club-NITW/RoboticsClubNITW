import React from 'react'
import './Hero.css'
// import { GradientTexture, MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
// import heroimg from '../assets/herorobo.png'
import { Link } from 'react-router-dom'
import Particlesbg from './Particlesbg'
import Tilt from 'react-parallax-tilt';

const Hero = () => {
    return (
        <>
            <section className="hr-wrapper">
                <Particlesbg />
                <div className="flexCenter hr-container">
                    <div className="hr-left">
                        <div className="hr-title">
                            <h1>Robotics Club</h1>
                        </div>
                        <div className="hr-desc">
                            <p>We do Something Robotic</p>
                            {/* <Link className='hr-btn btn'>Read More</Link>
                            <Link className='hr-btn btn'>Read More</Link> */}
                        </div>
                    </div>
                    <div className="hr-right">
                        <div className="img-container">
                            {/* <img src={heroimg} alt="" /> */}
                            {/* <div className='mainlogotilt'> */}
                                <Tilt
                                className='mainlogotilt'
                                perspective={500}
                                glareEnable={true}
                                glareMaxOpacity={0.3}
                                glareReverse
                                scale={1.02}
                                >
                                    <div className='logotilt'>
                                    </div>
                                </Tilt>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero

/*

Code of ball randomly flowing
<Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
    <OrbitControls enableZoom={false} />
    <ambientLight intensity={1} />
    <directionalLight position={[3, 2, 1]} />
    <Sphere args={[1, 100, 200]} scale={1.2}>
        <MeshDistortMaterial distort={0.6} speed={2}>
            <GradientTexture
                stops={[0, 1]} // As many stops as you want
                colors={['#4066ff', '#ff0000']} // Colors need to match the number of stops
                size={1024} // Size is optional, default = 1024
            />
        </MeshDistortMaterial>
    </Sphere>
</Canvas>
*/
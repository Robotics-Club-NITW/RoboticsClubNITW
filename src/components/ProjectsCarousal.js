import { Suspense, useState } from 'react';
import Slider from 'react-slick';
import './ProjectsCarousal.css'
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, Stage } from '@react-three/drei';

// import icons
import { BsArrowLeft, BsArrowRight, } from 'react-icons/bs';

// import images
import img1 from '../assets/IMG_5505.jpg';
import img2 from '../assets/IMG_5505.jpg';
import img3 from '../assets/IMG_5505.jpg';
import img4 from '../assets/IMG_5505.jpg';
import RoboModel from './RoboModel';

const images = [img1, img2, img3, img4];

function SampleNextArrow({ onClick }) {
  return (
    <div className='arrow arrow-right' onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className='arrow arrow-left' onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}
function EmptyArrow({ onClick }) {
  return (
    <div></div>
  );
}

function ProjectsCarousal() {

  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // pauseOnHover: true,
    autoplaySpeed: 2500,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? 'dot dot-active' : 'dot'}>
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // dots: false,
          nextArrow: <EmptyArrow />,
          prevArrow: <EmptyArrow />,
        }
      }]
  };

  return (
    <div className="carcontainer">
      <div className="slider">
        <Slider {...settings}>
          {
            images.map((img, index) => (
              <div className={index === slideIndex ? 'slide slide-active' : 'slide'} key={index}>
                <div className='img-cont-pro'>
                  {/* <Canvas>
                      <OrbitControls enableZoom={false} enabled={true} autoRotate />
                    <Stage>
                      <ambientLight />
                      <pointLight position={[0, 10, 10]} />
                      <RoboModel />
                    </Stage>
                  </Canvas> */}
                  {/* <img src="https://www.analyticsinsight.net/wp-content/uploads/2022/05/Top-10-Best-Robotics-Project-Ideas-for-Engineering-Students-in-2022.jpg" alt="" /> */}
                  <div className="imgcont">
                            <div className="imgstacktop"><img src={'https://www.analyticsinsight.net/wp-content/uploads/2022/05/Top-10-Best-Robotics-Project-Ideas-for-Engineering-Students-in-2022.jpg'} alt="" /></div>
                            <div className="imgstackbot"><img src={'https://www.analyticsinsight.net/wp-content/uploads/2022/05/Top-10-Best-Robotics-Project-Ideas-for-Engineering-Students-in-2022.jpg'} alt="" /></div>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
      </div>
    </div>
  );
}

export default ProjectsCarousal;
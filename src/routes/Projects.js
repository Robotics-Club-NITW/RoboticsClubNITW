import React from 'react'
import HeroImg from '../components/HeroImg';
import ProjectsCarousals from '../components/ProjectsCarousal';
import ComingSoon from '../components/ComingSoon';

const Projects = () => {
  return (
    <>
      <div>
        <HeroImg title='Projects' desc='Explore our Projects' />
        {/* <h2>Projects</h2> */}
        <ComingSoon />
        {/* <ProjectsCarousals/> */}
      </div>
    </>
  )
}

export default Projects
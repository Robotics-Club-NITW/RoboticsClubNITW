import React from 'react'
import HeroImg from '../components/HeroImg';
import ProjectsCarousals from '../components/ProjectsCarousal';

const Projects = () => {
  return (
    <>
     <div>
      <HeroImg title='Projects' desc='Explore our Projects'/>
        {/* <h2>Projects</h2> */}
        <ProjectsCarousals/>
      </div>
    </>
  )
}

export default Projects
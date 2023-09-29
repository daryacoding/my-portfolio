import React from 'react'
import ProjectItem from '../../components/ProjectItem/ProjectItem'
import { ProjectList } from '../../helpers/ProjectList'

import './Projects.css'

function Projects({ image, name }) {
  return (
    <div className='projects'>
        <h1> My Personal Projects </h1>
        
        <div className='project-list'>
           {ProjectList.map((project, idx) => {
                return <ProjectItem id = {idx} name={project.name} image={project.image}/>
           })}
        </div>
    </div>
  )
}

export default Projects
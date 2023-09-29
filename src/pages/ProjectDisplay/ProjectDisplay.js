import React from 'react'
import { useParams } from 'react-router-dom'
import { ProjectList } from '../../helpers/ProjectList'
import { GitHub } from '@mui/icons-material'
import './ProjectDisplay.css'

function ProjectDisplay() {
    const { id } = useParams()
    const project = ProjectList[id]
  return (
    <div className='project'>
        <h1> {project.name} </h1>
        <img src={project.image} />
        <GitHub />
        <p>
            Skills: {project.skills}
        </p>
    </div>
  )
}

export default ProjectDisplay
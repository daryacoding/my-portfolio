import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, my name is Darya.</h2>
            <div className='prompt'>
                <p> 
                    A software engineer with a passion for learning and creating. 
                </p>
                <LinkedIn />
                <Email />
                <GitHub />
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>
                        ReactJS, HTML, CSS, NPM, TailWindCSS, StyledComponents,
                        MaterialUI
                    </span>
                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span>
                        NodeJS, Java Spring, ExpressJS, MySQL, MongoDb, Digital Ocean, Heroku
                    </span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>
                        JavaScript, Java, Python
                    </span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home
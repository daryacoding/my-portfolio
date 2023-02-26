import React from 'react'
const tvParty = require('../images/tv-party.png');
const instafake = require('../images/instafake.png')
export default function Projects() {
    return (
        <div className='projects'>
            <div className='TV-Party'>
                <img src={tvParty} alt='tv-party' width='500rem' height='350rem' />
                <h4>TV Party</h4>
                <p>
                A user-friendly blog where users can log and rate shows that they have watched.
                </p>
                <ul>
                    <li>Created a blog where users can log tv shows they have watched and leave reviews.</li>
                    <li>Utilized a full stack MongoDB, Express, React, Node.js to build a CRUD application in 2 weeks</li>
                    <li>Created application with a back-end approach first and styled with CSS flexbox using restful API routes.</li>
                </ul>
            </div>
            <div className='instafake'>
                <img src={instafake} alt='instafake' width='500rem' height='350rem' />
                <h4>InstaFake</h4>
                <p>
                An Instagram MERN stack developed clone where a visitor can come socialize with other users by post, 
                commenting and liking. Just like the real thing, but with a few twists!
                </p>
                <ul>
                    <li>Collaborated on a group project to create an instagram clone where users can follow one another and upload pictures.</li>
                    <li>Utilized a full stack MongoDB, Express, React, Node.js to build a CRUD application in 2 weeks.</li>
                    <li>Created an application with a mobile-first approach and styled the application using React-Components and SCSS.</li>
                </ul>
            </div>
        </div>
    )
}

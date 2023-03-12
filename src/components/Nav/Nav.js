import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <div className='nav-bar'>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <a href='https://docs.google.com/document/d/1S7BpdCiVfFoFWLIiyvcqzw68rkPQf40xXSph9saZiFA/edit?usp=sharing' target='_blank'>My Resume</a>
        </div>
    )
}

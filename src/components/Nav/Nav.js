import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Reorder } from '@mui/icons-material'
import "./Nav.css"

export default function Nav() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location])

    return (
        <div className='nav-bar' id={expandNavbar ? "open" : "close"}>
            <div className='toggle-button'>
                <button
                    onClick={() => {
                        setExpandNavbar((prev) => !prev);
                    }}
                >
                    <Reorder />
                </button>
            </div>
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
                <a href='https://docs.google.com/document/d/1S7BpdCiVfFoFWLIiyvcqzw68rkPQf40xXSph9saZiFA/edit?usp=sharing' target='_blank'>My Resume</a>
            </div>
        </div>
    )
}

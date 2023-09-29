import { GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='social-media'>
                <LinkedIn />
                <GitHub />
            </div> 
            <p> &copy; 2023 darya-abdullahzadeh.com</p>
        </div>
    )
}

export default Footer
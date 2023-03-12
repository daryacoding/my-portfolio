import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { VscMail } from 'react-icons/vsc'

export default function Contact() {
    return (
        <div className='contact'>
            <a href="https://github.com/daryacoding" target="_blank"><BsGithub sx={{ width: '100%', height: '100%' }}/> </a>
            <a href="https://www.linkedin.com/in/darya-abdullahzadeh/" target="_blank"><BsLinkedin /></a>
            <VscMail />
        </div>
    )
}

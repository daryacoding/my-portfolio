import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { VscMail } from 'react-icons/vsc'

export default function Contact() {
    return (
        <div className='contact'>
            <BsGithub href="https://github.com/daryacoding" />
            <BsLinkedin />
            <VscMail />
        </div>
    )
}

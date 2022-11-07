import React from 'react'
import './Footer.css'
import { AiOutlineInstagram } from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer'>
        <a href='https://www.instagram.com/_anonymous__boi_/?hl=en' className='footer_insta'>
            <AiOutlineInstagram className='footer_insta_logo'/>
            </a>

        <span className='footer_note'>Note: This is just a project of disney-hotstar clone</span>
    </div>
  )
}

export default Footer
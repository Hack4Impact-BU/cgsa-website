import React from 'react'
import './header.css'
import MagnifyingGlass from '../../assets/Magnifying_glass_icon.svg'
import XIcon from '../../assets/X_icon.png'

const localLink = window.location.href.substring(window.location.href.lastIndexOf('/'));

function Header({ visible, sendVisible }) {
    return (
        <>
            <div id='headbar'>
                <p className='title'><b>Boston University</b> Center for Gender, Sexuality, and Activism</p>
                <button id='fullmenu' onClick={sendVisible}>{visible ? "Close Menu" : "Full Menu"} <img src={visible ? XIcon : MagnifyingGlass} style={{marginTop: visible ? '-0.1rem' : 0}}/></button>
            </div>
            <hr/>
            <div id='navbar'>
                <a href='/' id={localLink == '/' ? 'selected' : ''}>Home</a>
                <a href='/about-us' id={localLink == '/about-us' ? 'selected' : ''}>About Us</a>
                <a href='/resources' id={localLink == '/resources' ? 'selected' : ''}>Resources</a>
                <a href='/contact-us' id={localLink == '/contact-us' ? 'selected' : ''}>Contact Us</a>
            </div>
        </>
    )
}

export default Header
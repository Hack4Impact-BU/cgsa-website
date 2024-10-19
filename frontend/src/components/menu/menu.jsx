import React from 'react'
import './menu.css'

function Menu({ visible }) {
    return (
        <>
            {visible && <div id="menu">
                <div id="items">
                    <p className="header">Who We Are</p>
                    <p className="header">What We Do</p>
                    <p className="header">Get Involved</p>
                    <p><a href='/about-us'>About Us</a></p>
                    <p><a href='/resources'>Resources</a></p>
                    <p><a href='/newsletter'>Newsletter Sign-Up</a></p>
                    <p><a href='/blog'>Blog</a></p>
                    <p><a href='/calendar'>Calendar</a></p>
                    <p><a href='/space-booking'>Space Booking Form</a></p>
                    <p><a href='/contact-us'>Contact Us</a></p>
                    <p style={{gridColumn: 3}}><a href='/volunteer'>Volunteer Sign-Up</a></p>
                </div>
                <input placeholder="Search site..."/>
            </div>}
        </>
    )
}

export default Menu
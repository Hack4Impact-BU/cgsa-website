import React from 'react'
import './footer.css'
import Instagram from '../../assets/instagram.png'
import Twitter from '../../assets/twitter.png'
import BUPlate from '../../assets/BU_Plate.png'
import Map from '../../assets/map.png'
import Phone from '../../assets/phone.png'
import Mail from '../../assets/mail.png'

function Footer() {
    return (
        <>
            <div id="footer">
                <div id="socials">
                    <a href="https://www.instagram.com/bucgsa" target="_blank"><img src={Instagram} /></a>
                    <a href="https://x.com/bucgsa" target="_blank"><img src={Twitter} /></a>
                </div>
                <img src={BUPlate} id="plate" />
                <p id='title'><b>Boston University</b> Center for Gender, Sexuality, and Activism</p>
                <div id="contact">
                    <div id="contactItem">
                        <img src={Map} />
                        <p>GSU Basement 775 Comm. Ave, Boston MA 02215</p>
                    </div>
                    <div id="contactItem">
                        <img src={Phone} />
                        <p>617-358-5575</p>
                    </div>
                    <div id="contactItem">
                        <img src={Mail} />
                        <p>cgsa@bu.edu</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer 
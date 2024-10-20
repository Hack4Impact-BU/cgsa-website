import React from 'react';
import "./home.css";
import Image1 from '../../assets/about_image1.jpg';
import CGSA from '../../assets/cgsa.jpg';
import Event from '../../assets/event.jpg'

function Home() {

    return (
        <div className='home_wrapper'>

            <div className='home_aboutContainer'>
                <div className='home_aboutLeft'>
                    <img src={Image1} className='home_image' />
                </div>
                <div className='home_aboutRight'>
                    <h1 className='home_aboutHeading'>
                        <span className='home_bigLetter'>A</span>BOUT <span className='home_bigLetter'>U</span>S
                    </h1>
                    <div className='home_aboutCard'>
                        <p className='home_aboutText'>
                            The Center for Gender, Sexuality and Activism (CGSA) at Boston University
                            strives to be a safe space for people of all genders and sexualities.
                            <br />
                            <br />
                            Using a social justice framework, the CGSA aims to end gender oppression and violence,
                            and advocates for the full equality and inclusion of women, queer and trans students.
                            <br />
                            <br />
                            Our dynamic community fosters challenging and open discourse, promotes student activism,
                            and provides resources and education for the Boston University community.
                        </p>
                        <button className='home_learnButton home_button'>Learn More!</button>
                    </div>
                </div>
            </div>

            <div className='home_centerContainer'>
                <img src={CGSA} className='home_image' />
                <div className='home_centerButtons'>
                    <button className='home_button'>Check Events Calendar!</button>
                    <button className='home_button'>Sign Up for the CGSA Mailing List!</button>
                </div>
            </div>

            <h1 className='home_heading'>
                Upcoming Events
            </h1>
            <div className='home_eventsContainer'>
                <div className='home_event'>
                    <img className='home_eventImage' src={Event} />
                    <h2>Event Name</h2>
                </div>
                <div className='home_event'>
                    <img className='home_eventImage' src={Event} />
                    <h2>Event Name</h2>
                </div>
                <div className='home_event'>
                    <img className='home_eventImage' src={Event} />
                    <h2>Event Name</h2>
                </div>
            </div>

        </div>
    );

}


export default Home;
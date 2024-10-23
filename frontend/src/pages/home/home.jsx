import React, { useEffect, useState } from 'react';
import "./home.css";
import Image1 from '../../assets/about_image1.png';
import Image2 from '../../assets/about_image2.png';
import Image3 from '../../assets/about_image3.png';
import Image4 from '../../assets/about_image4.png';
import Image5 from '../../assets/about_image5.png';
import Image6 from '../../assets/about_image6.png';
import CGSA from '../../assets/cgsa.jpg';

function Home() {

    const images = [Image1, Image2, Image3, Image4, Image5, Image6];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (currentIndex === images.length - 1) {
                setCurrentIndex(0);
            }
            else {
                setCurrentIndex(currentIndex + 1);
            }
        }, 8000)

        return () => clearInterval(intervalId);
    }, [currentIndex]);

    return (
        <div className='home_wrapper'>

            <div className='home_aboutContainer'>

                <div className='home_aboutLeft'>
                    <div className='home_topTab'></div>
                    <div className='home_imageContainer'  style={{backgroundImage: `url(${images[currentIndex]}`}}></div>
                    <div className='home_bottomTab'></div>
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
                        <a href="/about-us"><button className='home_learnButton home_button'>Learn More!</button></a>
                    </div>
                </div>
            </div>

            <div className='home_centerContainer'>
                <img src={CGSA} className='home_image' />
                <div className='home_centerButtons'>
                    <a href="/calendar"><button className='home_button'>Check Events Calendar!</button></a>
                    <a href="/newsletter"><button className='home_button'>Sign Up for the CGSA Mailing List!</button></a>
                </div>
            </div>

            <h1 className='home_heading'>
                Upcoming Events
            </h1>
            <div className='home_eventsContainer'>
                <div className='home_event'>
                    <h2>Event Name</h2>
                    <p>Placeholder text here.</p>
                </div>
                <div className='home_event'>
                    <h2>Event Name</h2>
                    <p>Placeholder text here.</p>
                </div>
                <div className='home_event'>
                    <h2>Event Name</h2>
                    <p>Placeholder text here.</p>
                </div>
            </div>

        </div>
    );

}


export default Home;
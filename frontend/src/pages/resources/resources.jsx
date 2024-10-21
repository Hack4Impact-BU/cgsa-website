import React from 'react';
import "./resources.css";
import Placeholder from '../../assets/image_placeholder.jpg';

function Resources() {

    return (
        <div className='resources_wrapper'>

            <div className='resources_resourceContainer'>
                <div className='resources_leftContainer'>
                    <h1 className='resources_heading'>GARB</h1>
                    <h1 className='resources_heading'>The Gender Affiring Room for Belonging</h1>
                    <img src={Placeholder} />
                </div>
                <div className='resources_rightContainer'>
                    <div className='resources_infoContainer'>
                        <h2 className='resources_subheading'>Who can use GARB?</h2>
                        <p className='resources_infoText'>
                            GARB is a free closet for transgender/gender non-conforming BU students.
                            Anyone who wishes to experiment with or affirm their gender can use GARB and take products home.
                        </p>
                    </div>
                    <div className='resources_infoContainer'>
                        <h2 className='resources_subheading'>How do I use GARB?</h2>
                        <p className='resources_infoText'>
                            The best way to use GARB is however it makes you comfortable.
                            Take home some products, try on clothes or jewelry, practice your makeup skills, and explore your identity.
                            There is no sign up process and you don’t need to write down what you take.
                        </p>
                    </div>
                    <div className='resources_infoContainer'>
                        <h2 className='resources_subheading'>Questions or Comments</h2>
                        <p className='resources_infoText'>
                            Please see a volunteer at the front desk at the CGSA Space or email cgsa@bu.edu.
                            If you have suggestions or comments, feel free to leave us a note in the suggestion box!
                        </p>
                    </div>
                    <div className='resources_infoContainer'>
                        <h2 className='resources_subheading'>Can I have some privacy?</h2>
                        <p className='resources_infoText'>
                            Of course! GARB is also available as a safe, private space where students can lock the door and try on any
                            clothes, makeup, or other products to explore their gender identity and expression.
                        </p>
                    </div>
                </div>
            </div>

            <div className='resources_resourceContainer'>
                <div className='resources_leftContainer'>
                    <h1 className='resources_heading'>Library</h1>
                    <img src={Placeholder} />
                </div>
                <div className='resources_rightContainer'>
                    <div className='resources_infoContainer'>
                        <h2 className='resources_subheading'>Subheading</h2>
                        <p className='resources_infoText'>
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                            Magna vulputate pharetra vitae diam morbi netus bibendum.
                        </p>
                    </div>
                </div>
            </div>

            <div className='resources_resourceContainer'>
                <div className='resources_leftContainer'>
                    <h1 className='resources_heading'>Sensory Room</h1>
                    <img src={Placeholder} />
                </div>
                <div className='resources_rightContainer'>
                    <div className='resources_infoContainer'>
                        <h2 className='resources_subheading'>Subheading</h2>
                        <p className='resources_infoText'>
                            Lorem ipsum odor amet, consectetuer adipiscing elit.
                            Magna vulputate pharetra vitae diam morbi netus bibendum.
                        </p>
                    </div>
                </div>
            </div>

            <h1 className='resources_heading' style={{fontSize: '36px'}}>
                Other Resources
            </h1>
            <div className='resources_otherContainer'>
                <div className='resources_otherResource'>
                    <h2>Placeholder</h2>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit.
                        Magna vulputate pharetra vitae diam morbi netus bibendum.</p>
                </div>
                <div className='resources_otherResource'>
                    <h2>Placeholder</h2>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit.
                        Magna vulputate pharetra vitae diam morbi netus bibendum.</p>
                </div>
                <div className='resources_otherResource'>
                    <h2>Placeholder</h2>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit.
                        Magna vulputate pharetra vitae diam morbi netus bibendum.</p>
                </div>
                <div className='resources_otherResource'>
                    <h2>Placeholder</h2>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit.
                        Magna vulputate pharetra vitae diam morbi netus bibendum.</p>
                </div>
            </div>

        </div>
    );

}


export default Resources;

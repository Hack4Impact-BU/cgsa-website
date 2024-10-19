import React from 'react';
import './contact-us.css';

function ContactUs() {

    return (
        <div className='wrapper'>
            <div className='contactContainer'>
                <h1 className='mainText'>There are lots of ways to get in touch with us!</h1>
                <div className='infoItem'>
                    <p className='infoText'>George Sherman Union <br />
                        775 Commonwealth Ave. <br />
                        Basement floor <br />
                        Boston, MA 02215</p>
                </div>
                <div className='infoItem'>
                    <p className='infoText'>Mailing address: <br />
                        1 University Way <br />
                        c/o Student Activities Office <br />
                        Boston, MA 02215</p>
                </div>
                <div className='infoItem'>
                    <p className='infoText'>Phone: (617) 358-5575 <br />
                        Email: cgsa@bu.edu</p>
                </div>
                <div className='infoItem'>
                    <p className='infoText'>Find us on social media on Twitter, Facebook, and Instagram!</p>
                </div>
                <a href="mailto:cgsa@bu.edu"><button className='contactButton'>
                    Click here to contact us!
                </button></a>
            </div>
        </div>
    );

}

export default ContactUs;

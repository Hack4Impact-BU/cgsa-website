import React from 'react';
import './contact-us.css';

function ContactUs() {
    return (
        <div className='contact_wrapper'>
            <div className='contact_contactContainer'>
                <h1 className='contact_mainText'>There are lots of ways to get in touch with us!</h1>
                <div className='contact_infoItem'>
                    <p className='contact_infoText'>George Sherman Union <br />
                        775 Commonwealth Ave. <br />
                        Basement Floor <br />
                        Boston, MA 02215</p>
                </div>
                <div className='contact_infoItem'>
                    <p className='contact_infoText'>Mailing address: <br />
                        1 University Way <br />
                        c/o Student Activities Office <br />
                        Boston, MA 02215</p>
                </div>
                <div className='contact_infoItem'>
                    <p className='contact_infoText'>Phone: (617) 358-5575 <br />
                        Email: cgsa@bu.edu</p>
                </div>
                <div className='contact_infoItem'>
                    <p className='contact_infoText'>Find us on social media on Twitter and Instagram!</p>
                </div>
                <a href="mailto:cgsa@bu.edu"><button className='contact_contactButton'>
                    Click here to contact us!
                </button></a>
            </div>
        </div>
    );

}

export default ContactUs;

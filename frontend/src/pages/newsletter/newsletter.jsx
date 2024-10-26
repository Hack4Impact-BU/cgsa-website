import React from 'react'
import './newsletter.css'

function Newsletter() {
    return (
        <>
        <div className="form">
            <h1 className='form_header'>Newsletter Sign-Up</h1>
            <p className="form_description">Placeholder text here.</p>
            <div className="form_questions">
                <div className="form_split">
                    <p>First Name</p>
                    <p>Last Name</p>
                    <input type='text'/>
                    <input type='text'/>
                </div>
                <div className="form_fullLine">
                    <p>BU Email</p>
                    <input type='text'/>
                </div>
            </div>
            <div className='form_center'>
                <button className='form_submit'>Submit</button>
            </div>
        </div>
        </>
    )
}

export default Newsletter
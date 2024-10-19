import React from 'react'
import './newsletter.css'

function Newsletter() {
    return (
        <>
        <div className="form">
            <h1>Newsletter Sign-Up</h1>
            <p id="description">Placeholder text here.</p>
            <div className="questions">
                <div className="name">
                    <p>First Name</p>
                    <p>Last Name</p>
                    <input type='text'/>
                    <input type='text'/>
                </div>
                <div className="email">
                    <p>BU Email</p>
                    <input type='text'/>
                </div>
            </div>
            <div className='center'>
                <button className='submit'>Submit</button>
            </div>
        </div>
        </>
    )
}

export default Newsletter
import React, { useState } from 'react';
import axios from 'axios';
import './newsletter.css';

function Newsletter() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/newsletter', {
                first_name: firstName,
                last_name: lastName,
                email: email,
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error signing up for newsletter');
        }
    };

    return (
        <div className="form">
            <h1 className='form_header'>Newsletter Sign-Up</h1>
            <p className="form_description">Placeholder text here.</p>
            <form onSubmit={handleSubmit}>
                <div className="form_questions">
                    <div className="form_split">
                        <p>First Name</p>
                        <p>Last Name</p>
                        <input type='text' required />
                        <input type='text' required />
                    </div>
                    <div className="form_fullLine">
                        <p>BU Email</p>
                        <input type='text' required />
                    </div>
                </div>
                <div className='form_center'>
                    <button type='submit' className='form_submit'>Submit</button><br/>
                    {message && <strong><i className='form_note'>{message}</i></strong>}
                </div>
            </form>
        </div>
    );
}

export default Newsletter;

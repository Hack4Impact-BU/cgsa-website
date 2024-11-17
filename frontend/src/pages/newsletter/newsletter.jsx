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
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                <input type='text' placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                <input type='email' placeholder='BU Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type='submit'>Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Newsletter;

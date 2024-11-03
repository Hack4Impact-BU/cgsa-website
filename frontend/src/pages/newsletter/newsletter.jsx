import React, { useState } from 'react';
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
                email: email,
                // Include firstName and lastName if needed in the backend
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
                        <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <p>Last Name</p>
                        <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="form_fullLine">
                        <p>BU Email</p>
                        <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className='form_center'>
                    <button type='submit' className='form_submit'>Submit</button>
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Newsletter;

import React, { useState } from 'react';
import axios from 'axios';

function Volunteer() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        pronouns: '',
        graduationYear: '',
        phone: '',
        helpEvents: '',
        helpLibrary: '',
        safeSpace: '',
        questions: ''
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/volunteer', formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error signing up to volunteer');
        }
    };

    return (
        <div className="form">
            <h1 className='form_header'>Volunteer Sign-Up</h1>
            <form onSubmit={handleSubmit}>
                {/* Input fields here, e.g.: */}
                <input type='text' name='firstName' placeholder='First Name' onChange={handleChange} required />
                <input type='text' name='lastName' placeholder='Last Name' onChange={handleChange} required />
                <input type='email' name='email' placeholder='BU Email' onChange={handleChange} required />
                {/* Add other input fields following this pattern */}
                <button type='submit'>Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Volunteer;

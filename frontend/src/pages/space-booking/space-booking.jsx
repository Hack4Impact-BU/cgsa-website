import React, { useState } from 'react';
import axios from 'axios';
import './space-booking.css';

function SpaceBooking() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        clubOrganization: '',
        primaryContactName: '',
        primaryContactEmail: '',
        purpose: '',
        bookingTime: '',
        recurringDays: '',
        spaceNeeded: '',
        closeSpace: '',
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/booking', formData);
            setMessage(response.data.message);
        } catch (error) {
            setMessage('Error submitting booking');
        }
    };

    return (
        <div className="form">
            <h1 className="form_header">Space Booking Form</h1>
            <form onChange={handleChange} onSubmit={handleSubmit}>
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
                    <div className="form_radio">
                        <p>Are you booking for a club or organization?</p>
                        <input type='radio' id='bYes' name='club' value='yes' onClick={() => toggle('clubOrg', 'bYes')} required /><label>Yes</label>
                        <input type='radio' id='bNo' name='club' value='no' onClick={() => toggle('clubOrg', 'bYes')} required /><label>No</label>
                    </div>
                    <div className="form_fullLine" id='clubOrg'>
                        <p>Name of Club or Organization</p>
                        <input type='text' required />
                    </div>
                    <div className="form_split" style={{ marginTop: '1.5rem' }}>
                        <p>Primary Contact Name</p>
                        <p>Primary Contact Email</p>
                        <input type='text' required />
                        <input type='text' required />
                    </div>
                    <div className="form_fullLine">
                        <p>Purpose of Booking</p>
                        <input type='text' required />
                    </div>
                    <div className="form_fullLine" style={{ width: '22%' }}>
                        <p>Time of Booking</p>
                        <input type='datetime-local' min={new Date().toISOString().slice(0, -8)} required />
                    </div>
                    <div className="form_radio">
                        <p>Is this a recurring event?</p>
                        <input type='radio' id='wYes' name='recur' value='yes' onClick={() => toggle('recurring', 'wYes')} required /><label>Yes</label>
                        <input type='radio' id='wNo' name='recur' value='no' onClick={() => toggle('recurring', 'wYes')} required /><label>No</label>
                    </div>
                    <div className="form_fullLine" id="recurring">
                        <p>Day(s) of Week</p>
                        <input type='text' required />
                    </div>
                    <div className="form_radio">
                        <p>Will you need the main space, the library, or both?</p>
                        <input type='radio' name='space' value='main' required /><label>Main Space</label>
                        <input type='radio' name='space' value='library' required /><label>Library</label>
                        <input type='radio' name='space' value='both' required /><label>Both</label>
                    </div>
                    <div className="form_radio">
                        <p>Will you need the space to be closed during your booking?</p>
                        <input type='radio' name='close' value='yes' required /><label>Yes</label>
                        <input type='radio' name='close' value='no' required /><label>No</label>
                    </div>
                </div>
                <div className='form_note'>
                    <i>Remember to tidy the space after each event or meeting.</i>
                </div>
                <div className='form_center'>
                    <button type='submit' className='form_submit'>Submit</button><br/>
                    {message && <strong><i className='form_note'>{message}</i></strong>}
                </div>
            </form>
        </div>
    );
}

export default SpaceBooking;

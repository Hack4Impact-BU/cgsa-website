import React, { useState } from 'react';
import axios from 'axios';
import './space-booking.css';

function SpaceBooking() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        club_organization: '',
        primary_contact_name: '',
        primary_contact_email: '',
        purpose: '',
        booking_time: '',
        recurring_days: '',
        space_needed: '',
        close_space: '',
    })
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/booking', formData)
            setMessage(response.data.message)
        } catch (error) {
            setMessage('Error submitting booking')
        }
    }

    function toggle(toToggle, value) {
        var element = document.getElementById(toToggle)
        var radio = document.getElementById(value)
        if (radio.checked) {
            element.style.display = 'flex'
        } else {
            element.style.display = 'none'
        }
    }

    return (
        <div className="form">
            <h1 className="form_header">Space Booking Form</h1>
            <div className="form_description">
                <p style={{ fontSize: '1.5rem' }}>Book the space for a meeting or event!</p>
                <p>For club meetings, priority will be given to those wishing to keep their old meeting times. Other booking conflicts will be resolved based on the form we received first.</p>
                <p>We will email your booking confirmation to your primary contact. If you have any questions, feel free to <a href='/contact-us'>contact us</a>.</p>
            </div>
            <form onChange={handleChange} onSubmit={handleSubmit}>
                <div className="form_questions">
                    <div className="form_split">
                        <p>First Name</p>
                        <p>Last Name</p>
                        <input type='text' name='first_name' required />
                        <input type='text' name='last_name' required />
                    </div>
                    <div className="form_fullLine">
                        <p>BU Email</p>
                        <input type='text' name='email' required />
                    </div>
                    <div className="form_radio">
                        <p>Are you booking for a club or organization?</p>
                        <input type='radio' id='bYes' name='cluborg_bool' value='yes' onClick={() => toggle('clubOrg', 'bYes')} required /><label>Yes</label>
                        <input type='radio' id='bNo' name='cluborg_bool' value='no' onClick={() => toggle('clubOrg', 'bYes')} required /><label>No</label>
                    </div>
                    <div className="form_fullLine" id='clubOrg'>
                        <p>Name of Club or Organization</p>
                        <input type='text' name='club_organization' />
                    </div>
                    <div className="form_split" style={{ marginTop: '1.5rem' }}>
                        <p>Primary Contact Name</p>
                        <p>Primary Contact Email</p>
                        <input type='text' name='primary_contact_name' />
                        <input type='text' name='primary_contact_email' required />
                    </div>
                    <div className="form_fullLine">
                        <p>Purpose of Booking</p>
                        <input type='text' name='purpose' required />
                    </div>
                    <div className="form_fullLine" style={{ width: '22%' }}>
                        <p>Time of Booking</p>
                        <input type='datetime-local' name='booking_time' min={new Date().toISOString().slice(0, -8)} required />
                    </div>
                    <div className="form_radio">
                        <p>Is this a recurring event?</p>
                        <input type='radio' id='wYes' name='recur_bool' value='yes' onClick={() => toggle('recurring', 'wYes')} required /><label>Yes</label>
                        <input type='radio' id='wNo' name='recur_bool' value='no' onClick={() => toggle('recurring', 'wYes')} required /><label>No</label>
                    </div>
                    <div className="form_fullLine" id="recurring">
                        <p>Day(s) of Week</p>
                        <input type='text' name='recurring_days' />
                    </div>
                    <div className="form_radio">
                        <p>Will you need the main space, the library, or both?</p>
                        <input type='radio' name='space_needed' value='main' required /><label>Main Space</label>
                        <input type='radio' name='space_needed' value='library' required /><label>Library</label>
                        <input type='radio' name='space_needed' value='both' required /><label>Both</label>
                    </div>
                    <div className="form_radio">
                        <p>Will you need the space to be closed during your booking?</p>
                        <input type='radio' name='close_space' value='yes' required /><label>Yes</label>
                        <input type='radio' name='close_space' value='no' required /><label>No</label>
                    </div>
                </div>
                <div className='form_note'>
                    <i>Remember to tidy the space after each event or meeting.</i>
                </div>
                <div className='form_center'>
                    <button type='submit' className='form_submit'>Submit</button><br />
                    {message && <strong><i className='form_note'>{message}</i></strong>}
                </div>
            </form>
        </div>
    )
}

export default SpaceBooking

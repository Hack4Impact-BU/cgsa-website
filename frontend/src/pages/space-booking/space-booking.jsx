import React, { useState } from 'react';
import axios from 'axios';
import './space-booking.css';

function toggle(toToggle, value) {
    const element = document.getElementById(toToggle);
    const radio = document.getElementById(value);
    if (radio.checked) {
        element.style.display = 'flex';
    } else {
        element.style.display = 'none';
    }
}

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
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('https://cgsa-website-9ee3262d35c4.herokuapp.com/booking', formData);
            setMessage(response.data.message);
            setError(null);
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
            setMessage(null);
            setError('Error submitting booking: ' + (error.response ? error.response.data.error : error.message));
        }
    };

    return (
        <div className="form">
            <h1 className="form_header">Space Booking Form</h1>
            <div className="form_description">
                <p style={{ fontSize: '1.5rem' }}>Book the space for a meeting or event!</p>
                <p>
                    For club meetings, priority will be given to those wishing to keep their old meeting
                    times. Other booking conflicts will be resolved based on the form we received first.
                </p>
                <p>
                    We will email your booking confirmation to your primary contact. If you have any
                    questions, feel free to <a href="/contact-us">contact us</a>.
                </p>
                <p><i>
                    Please submit this form 1 week in advance of your requested meeting day.
                </i></p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form_questions">
                    <div className="form_split">
                        <p>First Name</p>
                        <p>Last Name</p>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form_fullLine">
                        <p>BU Email</p>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form_radio">
                        <p>Are you booking for a club or organization?</p>
                        <input
                            type="radio"
                            id="bYes"
                            name="club"
                            value="yes"
                            onClick={() => toggle('clubOrg', 'bYes')}
                        />
                        <label>Yes</label>
                        <input
                            type="radio"
                            id="bNo"
                            name="club"
                            value="no"
                            onClick={() => toggle('clubOrg', 'bYes')}
                        />
                        <label>No</label>
                    </div>
                    <div className="form_fullLine" id="clubOrg">
                        <p>Name of Club or Organization</p>
                        <input
                            type="text"
                            name="clubOrganization"
                            value={formData.clubOrganization}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form_split" style={{ marginTop: '1.5rem' }}>
                        <p>Primary Contact Name</p>
                        <p>Primary Contact Email</p>
                        <input
                            type="text"
                            name="primaryContactName"
                            value={formData.primaryContactName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="primaryContactEmail"
                            value={formData.primaryContactEmail}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form_fullLine">
                        <p>Purpose of Booking</p>
                        <input
                            type="text"
                            name="purpose"
                            value={formData.purpose}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form_fullLine" style={{ width: '22%' }}>
                        <p>Time of Booking</p>
                        <input
                            type="datetime-local"
                            name="bookingTime"
                            value={formData.bookingTime}
                            min={new Date().toISOString().slice(0, -8)}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form_radio">
                        <p>Is this a recurring event?</p>
                        <input
                            type="radio"
                            id="wYes"
                            name="recur"
                            value="yes"
                            onClick={() => toggle('recurring', 'wYes')}
                        />
                        <label>Yes</label>
                        <input
                            type="radio"
                            id="wNo"
                            name="recur"
                            value="no"
                            onClick={() => toggle('recurring', 'wYes')}
                        />
                        <label>No</label>
                    </div>
                    <div className="form_fullLine" id="recurring">
                        <p>Day(s) of Week</p>
                        <input
                            type="text"
                            name="recurringDays"
                            value={formData.recurringDays}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form_radio">
                        <p>Will you need the main space, the library, or both?</p>
                        <input
                            type="radio"
                            name="spaceNeeded"
                            value="main"
                            onChange={handleChange}
                        />
                        <label>Main Space</label>
                        <input
                            type="radio"
                            name="spaceNeeded"
                            value="library"
                            onChange={handleChange}
                        />
                        <label>Library</label>
                        <input
                            type="radio"
                            name="spaceNeeded"
                            value="both"
                            onChange={handleChange}
                        />
                        <label>Both</label>
                    </div>
                    <div className="form_radio">
                        <p>Will you need the space to be closed during your booking?</p>
                        <input
                            type="radio"
                            name="closeSpace"
                            value="yes"
                            onChange={handleChange}
                        />
                        <label>Yes</label>
                        <input
                            type="radio"
                            name="closeSpace"
                            value="no"
                            onChange={handleChange}
                        />
                        <label>No</label>
                    </div>
                </div>
                <div className="form_note">
                    <i>Remember to tidy the space after each event or meeting.</i>
                </div>
                <div className="form_center">
                    <button className="form_submit" type="submit">Submit</button>
                    <br />
                    {message && (
                        <strong>
                            <i className="form_note" style={{ color: 'green' }}>
                                {message}
                            </i>
                        </strong>
                    )}
                    {error && (
                        <strong>
                            <i className="form_note" style={{ color: 'red' }}>
                                {error}
                            </i>
                        </strong>
                    )}
                </div>
            </form>
        </div>
    );
}

export default SpaceBooking;

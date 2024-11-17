import React, { useState } from 'react';
import axios from 'axios';

function Volunteer() {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        pronouns: '',
        graduation_year: '',
        phone: '',
        help_events: '',
        help_library: '',
        safe_space: '',
        questions: ''
    })
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevData => ({ ...prevData, [name]: value }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/volunteer', formData)
            setMessage(response.data.message)
        } catch (error) {
            setMessage('Error signing up to volunteer')
        }
    }

    return (
        <div className="form">
            <h1 className='form_header'>Volunteer Sign-Up</h1>
            <div className="form_description">
                <p style={{ fontSize: '1.5rem' }}>Volunteer at the CGSA!</p>
                <p>Volunteers are super important to the CGSA, and help us make sure everything runs smoothly during the semester. We are really grateful for your help in keeping the space open so that we can provide resources to students!</p>
                <p>There are a couple tasks that need to be done in the space while volunteering, and it is mandatory for volunteers to go through an initial training prior to volunteering. As for the time commitment, you can volunteer for as many or as few hours as you'd like. There are no expectations when it comes to length, but there is an expectation of consistency.</p>
                <p>Join our vibrant community of volunteers to get more involved at the CGSA!</p>
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
                    <div className="form_split">
                        <p>Pronouns</p>
                        <p>Graduation Year</p>
                        <input type='text' name='pronouns' required />
                        <input type='number' name='graduation_year' min={new Date().getFullYear()} max={(new Date().getFullYear()) + 4} required />
                    </div>
                    <div className="form_fullLine" style={{ width: '20%' }}>
                        <p>Phone Number</p>
                        <input type='text' name='phone' required />
                    </div>
                    <div className="form_note" style={{ marginBottom: '-3.5rem' }}>
                        <i>Please fill out <a href="https://docs.google.com/spreadsheets/d/1rTx-5Iu2CQYzHKCdiOWHDR_3A0xsGaccdHIkmPfAsoQ/edit?gid=1133208261#gid=1133208261" target="_blank">this spreadsheet</a> with the hours you would like to volunteer in the space.</i><br />
                        <p style={{ fontSize: '1.2rem' }}>If a spot you want is already filled, that's okay! We want as many people in the space as possible, so feel free to put your name down next to theirs. You can change these hours at any time, but please communicate with us, especially if you are reducing your hours or need to stop volunteering.</p><br />
                    </div>
                    <div className="form_radio">
                        <p>Are you interested in helping run events?</p>
                        <input type='radio' name='help_events' value='yes' required /><label>Yes</label>
                        <input type='radio' name='help_events' value='no' required /><label>No</label>
                    </div>
                    <div className="form_radio">
                        <p>Are you interested in helping organize our library?</p>
                        <input type='radio' name='help_library' value='yes' required /><label>Yes</label>
                        <input type='radio' name='help_library' value='no' required /><label>No</label>
                    </div>
                    <div className="form_fullLine" style={{ width: '40%' }}>
                        <p>How will you help keep the CGSA a safe space?</p>
                        <textarea name='safe_space' required></textarea>
                    </div>
                    <div className="form_fullLine">
                        <p>Do you have any questions?</p>
                        <input type='text' name='questions' required />
                    </div>
                </div>
                <div className='form_center'>
                    <button type='submit' className='form_submit'>Submit</button><br />
                    {message && <strong><i className='form_note'>{message}</i></strong>}
                </div>
            </form>
        </div>
    )
}

export default Volunteer

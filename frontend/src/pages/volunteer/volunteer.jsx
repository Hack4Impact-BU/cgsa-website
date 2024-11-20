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
    questions: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Transform data to match backend field names
    const transformedData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      pronouns: formData.pronouns,
      graduation_year: formData.graduationYear,
      phone: formData.phone,
      help_events: formData.helpEvents,
      help_library: formData.helpLibrary,
      safe_space: formData.safeSpace,
      questions: formData.questions,
    };

    console.log('Transformed Data being sent:', transformedData);

    try {
      const response = await axios.post('http://localhost:5001/volunteers', transformedData);
      setMessage(response.data.message);
      setError(null);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      setMessage(null);
      setError('Error signing up to volunteer: ' + (error.response ? error.response.data.error : error.message));
    }
  };

    return (
        <>
            <div className="form">
                <h1 className='form_header'>Volunteer Sign-Up</h1>
                <div className="form_description">
                    <p style={{ fontSize: '1.5rem' }}>Volunteer at the CGSA!</p>
                    <p>Volunteers are super important to the CGSA, and help us make sure everything runs smoothly during the semester. We are really grateful for your help in keeping the space open so that we can provide resources to students!</p>
                    <p>There are a couple tasks that need to be done in the space while volunteering, and it is mandatory for volunteers to go through an initial training prior to volunteering. As for the time commitment, you can volunteer for as many or as few hours as you'd like. There are no expectations when it comes to length, but there is an expectation of consistency.</p>
                    <p>Join our vibrant community of volunteers to get more involved at the CGSA!</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form_questions">
                        <div className="form_split">
                            <p>First Name</p>
                            <p>Last Name</p>
                            <input type='text' name='firstName' value={formData.firstName} onChange={handleChange} required />
                            <input type='text' name='lastName' value={formData.lastName} onChange={handleChange} required />
                        </div>
                        <div className="form_fullLine">
                            <p>BU Email</p>
                            <input type='email' name='email' value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form_split">
                            <p>Pronouns</p>
                            <p>Graduation Year</p>
                            <input type='text' name='pronouns' value={formData.pronouns} onChange={handleChange} />
                            <input type='number' name='graduationYear' min={new Date().getFullYear()} max={(new Date().getFullYear()) + 4} value={formData.graduationYear} onChange={handleChange} />
                        </div>
                        <div className="form_fullLine" style={{ width: '20%' }}>
                            <p>Phone Number</p>
                            <input type='text' name='phone' value={formData.phone} onChange={handleChange} />
                        </div>
                        <div className="form_note" style={{ marginBottom: '-3.5rem' }}>
                            <i>Please fill out <a href="https://docs.google.com/spreadsheets/d/1rTx-5Iu2CQYzHKCdiOWHDR_3A0xsGaccdHIkmPfAsoQ/edit?gid=1133208261#gid=1133208261" target="_blank">this spreadsheet</a> with the hours you would like to volunteer in the space.</i><br />
                            <p style={{ fontSize: '1.2rem' }}>If a spot you want is already filled, that's okay! We want as many people in the space as possible, so feel free to put your name down next to theirs. You can change these hours at any time, but please communicate with us, especially if you are reducing your hours or need to stop volunteering.</p><br />
                        </div>
                        <div className="form_radio">
                            <p>Are you interested in helping run events?</p>
                            <input type='radio' name='helpEvents' value='yes' onChange={handleChange} /><label>Yes</label>
                            <input type='radio' name='helpEvents' value='no' onChange={handleChange} /><label>No</label>
                        </div>
                        <div className="form_radio">
                            <p>Are you interested in helping organize our library?</p>
                            <input type='radio' name='helpLibrary' value='yes' onChange={handleChange} /><label>Yes</label>
                            <input type='radio' name='helpLibrary' value='no' onChange={handleChange} /><label>No</label>
                        </div>
                        <div className="form_fullLine" style={{ width: '40%' }}>
                            <p>How will you help keep the CGSA a safe space?</p>
                            <textarea name='safeSpace' value={formData.safeSpace} onChange={handleChange}></textarea>
                        </div>
                        <div className="form_fullLine">
                            <p>Do you have any questions?</p>
                            <input type='text' name='questions' value={formData.questions} onChange={handleChange} />
                        </div>
                    </div>
                    <div className='form_center'>
                        <button className='form_submit' type='submit'>Submit</button><br />
                        {message && <strong><i className='form_note'>{message}</i></strong>}
                    </div>
                </form>
            </div>
        </>
    );
}

export default Volunteer;

import React, { useState } from 'react';
import axios from 'axios';

function Newsletter() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://cgsa-website-9ee3262d35c4.herokuapp.com/newsletter', {
        firstName: firstName,
        lastName: lastName,
        email: email,
      });
      setMessage(response.data.message);
      setError(null);
    } catch (error) {
      setMessage(null);
      setError('Error signing up. Please try again later.');
      console.error(error.message);
    }
  };

  return (
    <>
      <div className="form">
        <h1 className="form_header">Newsletter Sign-Up</h1>
        <p className="form_description" style={{ fontSize: '1.5rem' }}>Sign up for our newsletter to stay in the loop for upcoming events!</p>
        <form onSubmit={handleSubmit}>
          <div className="form_questions">
            <div className="form_split">
              <div>
                <p>First Name</p>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <p>Last Name</p>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form_fullLine">
              <p>Email</p>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="form_center">
            <button className="form_submit" type="submit">
              Submit
            </button>
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
    </>
  );
}

export default Newsletter;
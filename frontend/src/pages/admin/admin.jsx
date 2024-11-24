import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { GoogleLogin, GoogleLogout } from "@leecheuk/react-google-login";
import { gapi } from "gapi-script";
import "react-quill/dist/quill.snow.css";
import "./admin.css";
import { DateTime } from 'luxon';

function Admin() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [newsletterData, setNewsletterData] = useState([]);
    const [bookingData, setBookingData] = useState([]);
    const [volunteerData, setVolunteerData] = useState([]);

    const CLIENTID = "350830969073-gu011la3p72geggr365bb41u9itah08d.apps.googleusercontent.com";
    const allowedEmails = ["sethun@bu.edu", "agodel@bu.edu", "mebattll@gmail.com", "zbattal@bu.edu"];

    const onLoginSuccess = (res) => {
        const email = res.profileObj.email;
        if (allowedEmails.includes(email)) {
            setIsAuthenticated(true);
            setUserEmail(email);
            console.log("Login Successful: ", res.profileObj);
        } else {
            alert("Access denied: Unauthorized email.");
            setIsAuthenticated(false);
        }
    };

    const onLogoutSuccess = () => {
        setIsAuthenticated(false);
        setUserEmail("");
        console.log("Logout Successful");
    };

    const onFailure = (res) => {
        console.log("Login Failed: ", res);
    };

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: CLIENTID,
                scope: ""
            });
        }
        gapi.load("client:auth2", start);
    }, []);

    const modules = {
        toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["image"],
        ],
    };

    useEffect(() => {
        const fetchNewsletters = async () => {
            try {
                const response = await fetch("http://localhost:5001/newsletters");
                const data = await response.json();
                setNewsletterData(data);
            } catch (error) {
                console.error("Error fetching newsletters:", error);
            }
        };

        const fetchBookings = async () => {
            try {
                const response = await fetch("http://localhost:5001/bookings");
                const data = await response.json();
                setBookingData(data);
            } catch (error) {
                console.error("Error fetching bookings:", error);
            }
        };

        const fetchVolunteers = async () => {
            try {
                const response = await fetch("http://localhost:5001/volunteers");
                const data = await response.json();
                setVolunteerData(data);
            } catch (error) {
                console.error("Error fetching volunteers:", error);
            }
        };

        fetchNewsletters();
        fetchBookings();
        fetchVolunteers();
    }, []);

    return (
        <>
            <h1 className="page_title" style={{marginBottom: "-1rem"}}>Admin</h1>
            {!isAuthenticated ? (
                <GoogleLogin
                    clientId={CLIENTID}
                    buttonText="Login"
                    onSuccess={onLoginSuccess}
                    onFailure={onFailure}
                    cookiePolicy="single_host_origin"
                    isSignedIn={true}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} className="form_submit">Login</button>
                    )}
                />
            ) : (
                <GoogleLogout
                    clientId={CLIENTID}
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} className="form_submit">Logout</button>
                    )}
                />
            )}

            {isAuthenticated && (
                <div className="admin_wrapper">
                    <h1 className="page_title">Create a New Blog Post</h1>
                    <div className="admin_formGroup">
                        <label className="form_questions">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="admin_titleInput"
                        />
                    </div>
                    <div className="admin_formGroup">
                        <label className="form_questions">Author</label>
                        <input
                            type="text"
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            className="admin_titleInput"
                        />
                    </div>
                    <div className="admin_formGroup">
                        <label className="form_questions">Blog Post</label>
                        <ReactQuill
                            value={content}
                            onChange={setContent}
                            modules={modules}
                            placeholder="Write your blog post here..."
                        />
                    </div>
                    <button className="form_submit">Submit</button>

                    <div className="tables_container">
                        <h2 className="table_header">Newsletter Sign-Up Data</h2>
                        <table className="data_table">
                            <thead>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>BU Email</th>
                                </tr>
                            </thead>
                            <tbody>
                            {newsletterData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                        </tr>
                    ))}

                            </tbody>
                        </table>
                        <h2 className="table_header">Space Booking Form Data</h2>
                        <div className="scrollable_container">
                            <table className="data_table">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>BU Email</th>
                                        <th>Booking for Club</th>
                                        <th>Primary Contact Name</th>
                                        <th>Primary Contact Email</th>
                                        <th>Purpose of Booking</th>
                                        <th>Time of Booking</th>
                                        <th>Recurring Event</th>
                                        <th>Space Needed</th>
                                        <th>Closed During Booking</th>
                                    </tr>
                                </thead>
                                <tbody>
                    {bookingData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.clubOrganization || "N/A"}</td>
                            <td>{item.primaryContactName}</td>
                            <td>{item.primaryContactEmail}</td>
                            <td>{item.purpose}</td>
                            <td>{DateTime.fromISO(item.bookingTime).toFormat('MM/dd/yyyy h:mm a')}</td>
                            <td>{item.recurringDays || "N/A"}</td>
                            <td>{item.spaceNeeded}</td>
                            <td>{item.closeSpace}</td>
                        </tr>
                    ))}
                </tbody>
                            </table>
                        </div>


                        <h2 className="table_header">Volunteer Sign-Up Data</h2>
                        <div className="scrollable_container">
                            <table className="data_table">
                                <thead>
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>BU Email</th>
                                        <th>Pronouns</th>
                                        <th>Graduation Year</th>
                                        <th>Phone Number</th>
                                        <th>Interested in Events</th>
                                        <th>Interested in Organizing Library</th>
                                        <th>How to Keep Space Safe</th>
                                        <th>Questions</th>
                                    </tr>
                                </thead>
                                <tbody>
                    {volunteerData.map((item, index) => (
                        <tr key={index}>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.pronouns}</td>
                            <td>{item.graduationYear}</td>
                            <td>{item.phone}</td>
                            <td>{item.helpEvents}</td>
                            <td>{item.helpLibrary}</td>
                            <td>{item.safeSpace}</td>
                            <td>{item.questions}</td>
                        </tr>
                    ))}
                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Admin

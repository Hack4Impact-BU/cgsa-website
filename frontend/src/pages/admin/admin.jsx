import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./admin.css";

function Admin() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    // Quill toolbar configuration
    const modules = {
        toolbar: [
            ["bold", "italic", "underline"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["image"],
        ],
    };

    return (
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
                        <tr>
                            <td></td><td></td><td></td>
                        </tr>
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
                            <tr>
                                <td></td><td></td><td></td>
                                <td></td><td></td><td></td>
                                <td></td><td></td><td></td>
                                <td></td><td></td>
                            </tr>
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
                            <tr>
                                <td></td><td></td><td></td>
                                <td></td><td></td><td></td>
                                <td></td><td></td><td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Admin

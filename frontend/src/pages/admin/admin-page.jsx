import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./admin-page.css";

function AdminPage() {
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
        </div>
    );
}

export default AdminPage;

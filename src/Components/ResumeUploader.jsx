
import React from 'react';

const ResumeUploader = ({ onUpload }) => {
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const dummyResume = {
            name: "Khushi",
            summary: "Experienced developer...",
            experience: [
                { company: "Interview Ghost", role: "Data Analysis", years: "2023-2025" }
            ],
            education: [
                { institution: "Maharshi Dayanand University", degree: "B.Tech CSE", year: "2019 - 2023" }
            ],
            skills: ["React", "Node.js", "FastAPI"]
        };
        onUpload(dummyResume);
    };

    return (
        <div>
            <label>Upload Resume (.pdf or .docx): </label>
            <input type="file" accept=".pdf,.docx" onChange={handleFileUpload} />
        </div>
    );
};

export default ResumeUploader;



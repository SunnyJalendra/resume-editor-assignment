

import React from 'react';

const SaveAndDownload = ({ resumeData }) => {
    const handleSave = async () => {
        try {
            const res = await fetch('http://localhost:8000/save-resume', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(resumeData)
            });

            const data = await res.json();
            alert(data.message);
        } catch (err) {
            console.error('Save failed:', err);
            alert('Failed to save resume.');
        }
    };

    const handleDownload = () => {
        const blob = new Blob([JSON.stringify(resumeData, null, 2)], {
            type: 'application/json'
        });

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'resume.json';
        link.click();
    };

    return (
        <div style={{ marginTop: '30px' }}>
            <button className="save-btn" onClick={handleSave}>💾 Save Resume</button>
            <button className="download-btn" onClick={handleDownload}>⬇️ Download Resume</button>

        </div>
    );
};

export default SaveAndDownload;


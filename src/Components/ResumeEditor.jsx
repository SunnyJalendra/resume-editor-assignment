
import React from 'react';
import SectionEnhancer from './SectionEnhancer';
import './ResumeEditor.css';


const ResumeEditor = ({ resumeData, setResumeData }) => {
    const handleChange = (field, value) => {
        setResumeData({ ...resumeData, [field]: value });
    };

    const handleListChange = (section, index, field, value) => {
        const updatedSection = resumeData[section].map((item, i) =>
            i === index ? { ...item, [field]: value } : item
        );
        setResumeData({ ...resumeData, [section]: updatedSection });
    };

    return (
        <div className="container">
            <div style={{ marginTop: '20px' }}>
                <h2>Edit Resume</h2>

                {/* Name and Summary */}
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={resumeData.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                    />
                </div>



                <div className="section">
                    <SectionEnhancer
                        label="Summary"
                        field="summary"
                        value={resumeData.summary}
                        onChange={(newVal) => handleChange('summary', newVal)}
                    />
                </div>


                {/* Experience */}

                <h3>Experience</h3>

                <div className="section">
                    {resumeData.experience.map((exp, index) => (
                        <SectionEnhancer
                            key={index}
                            label={`Experience ${index + 1}`}
                            field={`experience-${index}`}
                            value={`${exp.role} at ${exp.company} (${exp.years})`}
                            onChange={(enhancedText) => {
                                // Extract data back from enhanced text (simplified)
                                const updated = { ...exp, role: enhancedText };
                                const updatedList = [...resumeData.experience];
                                updatedList[index] = updated;
                                setResumeData({ ...resumeData, experience: updatedList });
                            }}
                        />
                    ))}
                </div>

                {/* Education */}


                <h3>Education</h3>

                <div className="section">
                    {resumeData.education.map((edu, index) => (
                        <SectionEnhancer
                            key={index}
                            label={`Education ${index + 1}`}
                            field={`education-${index}`}
                            value={`${edu.degree} at ${edu.institution} (${edu.year})`}
                            onChange={(enhancedText) => {
                                const updated = { ...edu, degree: enhancedText };
                                const updatedList = [...resumeData.education];
                                updatedList[index] = updated;
                                setResumeData({ ...resumeData, education: updatedList });
                            }}
                        />
                    ))}
                </div>


                {/* Skills */}

                <h3>Skills</h3>

                <div className="section">
                    {resumeData.skills.map((skill, index) => (
                        <SectionEnhancer
                            key={index}
                            label={`Skill ${index + 1}`}
                            field={`skill-${index}`}
                            value={skill}
                            onChange={(newVal) => {
                                const updatedSkills = [...resumeData.skills];
                                updatedSkills[index] = newVal;
                                setResumeData({ ...resumeData, skills: updatedSkills });
                            }}
                        />
                    ))}

                </div>


            </div>
        </div>


    );
};

export default ResumeEditor;


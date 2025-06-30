
import React, { useState } from 'react';

const SectionEnhancer = ({ label, field, value, onChange }) => {
    const [loading, setLoading] = useState(false);

    const enhanceContent = async () => {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:8000/ai-enhance', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    section: field,
                    content: value,
                }),
            });

            const data = await res.json();
            onChange(data.enhanced);
        } catch (err) {
            console.error('Enhancement failed', err);
        }
        setLoading(false);
    };

    return (
        <div style={{ marginBottom: '16px' }}>
            <label>{label}</label>
            <textarea
                rows="4"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <button onClick={enhanceContent} disabled={loading}>
                {loading ? 'Enhancing...' : 'Enhance with AI'}
            </button>
        </div>
    );
};

export default SectionEnhancer;

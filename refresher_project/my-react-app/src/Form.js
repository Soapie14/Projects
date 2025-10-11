import React, { useState } from 'react';

function Questionnaire({ onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        experience: '',
        favoritePosition: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send form data to backend
        const response = await fetch('http://127.0.0.1:5000/api/questionnaire', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        console.log(result);

        // Close the popup
        onClose();
    };

    return (
        <div className="overlay">
            <div className="modal">
                <h2>Welcome! Quick Questionnaire</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </label>

                    <label>
                        Experience:
                        <select name="experience" value={formData.experience} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </label>

                    <label>
                        Favorite Position:
                        <input type="text" name="favoritePosition" value={formData.favoritePosition} onChange={handleChange} />
                    </label>

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Questionnaire;

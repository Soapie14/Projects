import React, { useState } from 'react';

const Info = () => {
    const [name, setName] = useState("");
    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            {/* Step 2: Create the input field */}
            <input
                type="text"
                className="border p-2 mb-4 text-lg"
                placeholder="Enter your name"
                value={name}
                onChange={handleInputChange}
            />

            {/* Step 4: Display the entered name */}
            {name && (
                <div className="text-2xl mt-4">
                    Hello, <span className="font-bold">{name}</span>!
                </div>
            )}
        </div>
    );
};


export default Info;

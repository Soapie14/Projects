import React, { useState } from 'react';

const Info = () => {
    // Declare a useState variable 'name' with an initial empty string value.
    // 'setName' is the function to update the state.
    const [name, setName] = useState("");

    // Handle input changes by updating the 'name' state with the input's value.
    const handleInputChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            {/* "name"'s to-do list */}
            {name && (
                <div className="text-4xl mt-4">
                    <span className="font-bold text-3xl mt-4">{name}</span>'s To-Do List
                </div>
            )}
            {/* input field */}
            <input
                type="text"
                className="border p-2 mb-4 text-lg"
                placeholder="Enter your name"
                value={name} // The input value is controlled by the 'name' state
                onChange={handleInputChange} // Updates 'name' state when the input value changes
            />

        </div>
    );
};

export default Info;

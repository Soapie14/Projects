import React, { useState } from 'react';

const Info = () => {
    // Step 1: Declare a state variable 'name' with an initial empty string value.
    // 'setName' is the function to update the state.
    const [name, setName] = useState("");

    // Step 3: Handle input changes by updating the 'name' state with the input's value.
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
                value={name} // The input value is controlled by the 'name' state
                onChange={handleInputChange} // Updates 'name' state when the input value changes
            />

            {/* Step 4: Conditionally render the greeting message if 'name' is not empty */}
            {name && (
                <div className="text-2xl mt-4">
                    Hello, <span className="font-bold">{name}</span>!
                </div>
            )}
        </div>
    );
};

export default Info;

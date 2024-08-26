import React, { useState } from 'react'  

const List = () => {

    // useState hook to manage the state of the list items
    // 'items' is the current state, and 'setItems' is the function to update it
    const [items, setItems] = useState([
        { id: 1, text: "Item 1", checked: false },  // Initial list item with id 1, text "Item 1", and not checked
        { id: 2, text: "Item 2", checked: false },  // Initial list item with id 2, text "Item 2", and not checked
        { id: 3, text: "Item 3", checked: false },  // Initial list item with id 3, text "Item 3", and not checked
    ]);

    // Function to handle the checkbox change to line through text
    const handleCheckboxChange = (id) => {
        // Update the state by mapping over the items
        // If the item's id matches the id passed to the function, toggle its 'checked' value
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    // Return the JSX that defines what the component will render
    return (
        <div className="p-4 "> 
            <h1 className="flex items-center justify-center text-2xl font-bold font-sans mb-4">Items:</h1>  

            {/* Render an unordered list */}
            <ul>
                {/* Map over the 'items' array to create a list item (li) for each object in the array */}
                {items.map((item) => (
                    <li key={item.id} className="mb-2 flex justify-center items-center">
                        {/* Checkbox input, controlled by the 'checked' state of the item */}
                        <input
                            type="checkbox"
                            checked={item.checked}  // The checkbox is checked if the 'checked' property of the item is true
                            onChange={() => handleCheckboxChange(item.id)}  // Call handleCheckboxChange with the item's id when the checkbox is clicked
                            className="mr-2"
                        />
                        {/* Display the text of the item */}
                        <span className={`text-lg ${item.checked ? "line-through" : ""}`}>
                            {/* Apply a strikethrough style if the item is checked */}
                            {item.text}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List

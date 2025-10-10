import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa'; // Importing the plus and trash icons from react-icons

const List = () => {
    const [items, setItems] = useState([
        { id: 1, text: "Item 1", checked: false },
        { id: 2, text: "Item 2", checked: false },
        { id: 3, text: "Item 3", checked: false },
    ]);

    // Function to handle the checkbox change to line through text
    const handleCheckboxChange = (id) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

    // Function to handle text input change for an item
    const handleInputChange = (id, newText) => {
        setItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, text: newText } : item
            )
        );
    };

    // Function to add a new item to the list
    const handleAddItem = () => {
        const newItem = {
            id: items.length + 1,  // Generate a new id based on the length of the items array
            text: `Item ${items.length + 1}`,  // Default text for the new item
            checked: false,  // New item is unchecked by default
        };
        setItems([...items, newItem]);  // Add the new item to the state
    };

    // Function to delete an item from the list
    const handleDeleteItem = (id) => {
        setItems((prevItems) => prevItems.filter(item => item.id !== id));  // Remove the item with the given id
    };

    return (
        <div className="p-4">
            <h1 className="flex items-center justify-center text-2xl font-bold font-sans mb-4">Items:</h1>

            <ul>
                {items.map((item) => (
                    <li key={item.id} className="mb-2 flex justify-center items-center">
                        <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => handleCheckboxChange(item.id)}
                            className="mr-2"
                        />
                        <input
                            type="text"
                            value={item.text}
                            onChange={(e) => handleInputChange(item.id, e.target.value)}
                            className={`text-lg ${item.checked ? "line-through" : ""} border p-1 mr-2`}
                        />
                        <button
                            onClick={() => handleDeleteItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                            title="Delete item"
                        >
                            <FaTrash /> {/* Trash icon from react-icons */}
                        </button>
                    </li>
                ))}
            </ul>
            <div className='flex justify-center'> {/* Button to add a new item */}
                <button
                    onClick={handleAddItem}
                    className="flex items-center justify-center mt-4 bg-blue-300 text-white rounded-full w-10 h-10"
                    title="Add new item"
                >
                    <FaPlus /> {/* Plus icon from react-icons */}
                </button>
            </div>
        </div>
    );
};

export default List;

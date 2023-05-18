import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

/** Form for creating a new item to add to a list.
 *
 * Has state for the name/quantity of the item; on submission,
 * sends {name, qty} to fn rec'd from parent.
 *
 */

const NewColorForm = ({ addColor }) => {
    const [color, setColor] = useState('');
    const navigate = useNavigate();

    /** Send {name, quantity} to parent
     *    & clear form. */

    const handleSubmit = (e) => {
        e.preventDefault();
        // Generate a unique ID for the new color (you can use any method you prefer)
        const id = Date.now().toString();
        const newColor = { id, name: color, value: color };
        addColor(newColor);
        setColor('');
        navigate('/colors');

    };
    /** render form */

    return (
        <div>
            <h1>Add New Color</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    required
                />
                <button type="submit">Add Color</button>
            </form>
        </div>
    );
};

export default NewColorForm;
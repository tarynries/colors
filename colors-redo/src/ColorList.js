import React from "react";
import { Link } from 'react-router-dom';



const ColorList = ({ colors }) => {
    return (
        <div>
            <h1>Color List</h1>
            <ul>
                {colors.map((color) => (
                    <li key={color.id}>
                        <Link to={`/colors/${color.id}`}>{color.name}</Link>
                    </li>
                ))}
            </ul>
            <Link to="/colors/new">Add Color</Link>
        </div>
    );
}


export default ColorList;
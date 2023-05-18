import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const Color = ({ colors }) => {
    const { color } = useParams();

    const selectedColor = colors.find((c) => c.id === color);

    if (!selectedColor) {
        return <Navigate to="/colors" />;
    }

    return (
        <div>
            <h1>{selectedColor.name}</h1>
            <div style={{ backgroundColor: selectedColor.value, width: '200px', height: '200px' }}></div>
        </div>
    );
};

export default Color;
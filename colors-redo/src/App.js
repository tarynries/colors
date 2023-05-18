import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ColorList from './ColorList';
import Color from './Color';
import NewColorForm from './NewColorForm';

function App() {
  const [colors, setColors] = useState([]);

  const addColor = (color) => {
    setColors((prevColors) => [color, ...prevColors]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/colors" element={<ColorList colors={colors} />} />
        <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
        <Route path="/colors/:color" element={<Color colors={colors} />} />
        <Route path="/" element={<Navigate to="/colors" />} />
      </Routes>
    </Router>
  );
}

export default App;

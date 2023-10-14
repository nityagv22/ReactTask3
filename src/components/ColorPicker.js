import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setIsColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleButtonClick = () => {
    setIsColorListVisible(!isColorListVisible);
  };

  const handleColorClick = (color, event) => {
    event.preventDefault();
    setSelectedColor(color);
    setBackgroundColor(color);
    setIsColorListVisible(false);
  };

  return (
    <div className="color-picker" style={{ backgroundColor: backgroundColor }}>
      <button className="color-button" onClick={handleButtonClick}>Pick a color</button>
      {isColorListVisible && (
        <ul className="color-list">
          {colors.map((color, index) => (
            <li
              key={index}
              onClick={handleColorClick.bind(null, color)}
              style={{ backgroundColor: color }}
            >
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default ColorPicker;

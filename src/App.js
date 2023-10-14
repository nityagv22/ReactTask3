import React from 'react';
import ColorPicker from './components/ColorPicker';
import './App.css';

const App = () => {
  const colors = ['red', 'green', 'blue',  'yellow', 'pink', 'lightblue', 'orange', 'purple', 'lightpink', 'darkgreen', 'skyblue', 'brown', 'lightgreen'];

  return (
    <div>
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;

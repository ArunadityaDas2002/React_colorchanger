import React, { useState } from 'react';
import './App.css'; // Import your CSS file

function App() {
  const [color, setColor] = useState("olive");

  const containerStyle = {
    backgroundColor: color,
    width: '100%',
    height: '100vh',
    transition: 'background-color 200ms ease',
  };

  return (
    <div className="container" style={containerStyle}>
      <div className="fixed-container">
        <div className="content">
          <button onClick={() => setColor("red")} className="color_button" style={{backgroundColor:"red"}}>Red</button>
          <button onClick={() => setColor("blue")} className="color_button" style={{backgroundColor:"blue"}}>Blue</button>
          <button onClick={() => setColor("green")} className="color_button" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={() => setColor("pink")} className="color_button" style={{backgroundColor:"pink"}}>Pink</button>
          <button onClick={() => setColor("orange")} className="color_button" style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={() => setColor("violet")} className="color_button" style={{backgroundColor:"violet"}}>Violet</button>
        </div>
      </div>
    </div>
  );
}

export default App;

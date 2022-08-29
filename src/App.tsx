import React, { useState } from 'react';
import './App.css';

function App() {
  const [width, setWidth] = useState(80);
  const [height, setHeight] = useState(80);
  const [color, setColor] = useState('#000');

  const generateImage = (e:any) =>{
    window.location.href = `${window.location.origin}/${width}x${height}/${color.replace('#','')}`;
  }
  return (
    <div className="App">
      <div className="form-box">
        <input type="number" placeholder='Ancho' value={width} onChange={e=> setWidth(Number(e.target.value))} />
        <input type="number" placeholder='Alto' value={height} onChange={e=> setHeight(Number(e.target.value))} />
        <label htmlFor="color">
          <div className="btn-color">
            <h3>COLOR</h3>
          </div>
        </label>
        <button onClick={generateImage}>Generar</button>
        <input type="color" id='color' value={color} onChange={e=> setColor(e.target.value)} />
      </div>
    </div>
  );
}

export default App;

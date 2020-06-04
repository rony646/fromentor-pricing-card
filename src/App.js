import React from 'react';
import top from './images/bg-top.svg'
import bottom from './images/bg-bottom.svg'
import Button from './Button/Button'
import './App.css'

function App() {

  return (
    <div className="App">
        <span id='top'><img src={top} alt='bg-top'></img></span>
        <span id='bottom'><img src={bottom} alt='bg-bottom'></img></span>

        <Button />

        <div className="cards-box">
          <div className="white-card"></div>
          <div className="purple-card"></div>
          <div className="white-card"></div>
        </div>
    </div>
  );
}

export default App;

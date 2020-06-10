import React from 'react';
import top from './images/bg-top.svg'
import bottom from './images/bg-bottom.svg'
import Button from './Button/Button'
import WhiteCard from './Cards/WhiteCard'
import PurpleCard from './Cards/PurpleCard'
import './App.css'

function App() {

  return (
    <div className="App">
        <span id='top'><img src={top} alt='bg-top'></img></span>
        <span id='bottom'><img src={bottom} alt='bg-bottom'></img></span>

        <Button />

        <div className="cards-box">
          <WhiteCard 
            classes="white-card border-left" 
            category="Basic" 
            price={19.99}
            storage="500 GB"
            users={2}
            upload="3 GB"/>

          <PurpleCard 
            title="Professional" 
            category="Professional" 
            price={24.99}
            storage="1 TB"
            users={5}
            upload="10 GB"/>
          <WhiteCard 
            classes="white-card border-right" 
            category="Master" 
            price={39.99}
            storage="2 TB"
            users={10}
            upload="30 GB"/> 
        </div>
    </div>
  );
}

export default App;

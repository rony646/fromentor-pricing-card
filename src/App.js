import React, {useState} from 'react';
import top from './images/bg-top.svg'
import bottom from './images/bg-bottom.svg'
import Button from './Button/Button'
import WhiteCard from './Cards/WhiteCard'
import PurpleCard from './Cards/PurpleCard'
import './App.css'

function App() {
  let [prices, setPrices] = useState({
    basic: 19.99, 
    professional: 24.99,
    master: 39.99
  })
  
  function handlePrices(event) {
    if(!event.target.checked) {
      setPrices({
        basic: 199.99, 
        professional: 249.99,
        master: 399.99
      })
    } else {
      setPrices({
        basic: 19.99, 
        professional: 24.99,
        master: 39.99
      })
    }
  }
  return (
    <div className="App">

        <span id='top'><img src={top} alt='bg-top'></img></span>
        <span id='bottom'><img src={bottom} alt='bg-bottom'></img></span>

        <Button set={handlePrices}/>

        <div className="cards-box">
          <WhiteCard 
            classes="white-card border-left" 
            category="Basic" 
            price={prices.basic}
            storage="500 GB"
            users={2}
            upload="3 GB"/>

          <PurpleCard 
            title="Professional" 
            category="Professional" 
            price={prices.professional}
            storage="1 TB"
            users={5}
            upload="10 GB"/>
          <WhiteCard 
            classes="white-card border-right" 
            category="Master" 
            price={prices.master}
            storage="2 TB"
            upload="30 GB"
            users={10}/> 
        </div>

    </div>
  );
}

export default App;

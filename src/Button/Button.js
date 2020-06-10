import React from 'react';
import './Button.css';

function Button(props) {
    return(
        <div className="toggle-container">
          <h1>Our Pricing</h1>
          <div className="title-box">
            <span>Annualy</span>
            <label className="switch">
                <input type="checkbox" onChange={(e) => props.set(e)} defaultChecked/>
                <span className="slider round"/>
            </label>
            <span>Monthly</span>
          </div>
        </div>
    )
}

export default Button;
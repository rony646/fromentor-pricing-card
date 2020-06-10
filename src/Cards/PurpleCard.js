import React from 'react';
import '../Cards/Cards.css';

const purple = props => {
    return (
        <div className="purple-card">
            <span>{props.category}</span>
            <div className="pricing">
                <span class="dolar-sign">$</span>{props.price}
            </div>
            <div className="white-line"></div>
            <div className="sub">
                <span>{props.storage} Storage</span>
            </div>
            <div className="white-line"></div>
            <div className="sub">
                <span>{props.users} Users Allowed</span>
            </div>
            <div className="white-line"></div>
            <div className="sub">
                <span>Send up to {props.upload}</span>
            </div>
            <div className="white-line"></div>
            <button className="white-button">LEARN MORE</button>
        </div>
    )
}

export default purple;
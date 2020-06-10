import React from  'react';
import '../Cards/Cards.css'

function WhiteCard(props) {
    return(
        <div className={props.classes}>
            <span>{props.category}</span>
            <div className="pricing">
                <span class="dolar-sign">$</span>{props.price}
            </div>
            <div className="black-line"></div>
            <div className="sub">
                <span>{props.storage} storage</span>
            </div>
            <div className="black-line"></div>
            <div className="sub">
                <span>{props.users} users allowed</span>
            </div>
            <div className="black-line"></div>
            <div className="sub">
                <span>Send up to {props.upload}</span>
            </div>
            <div className="black-line"></div>
            <button className="purple-button">LEARN MORE</button>
        </div>
    )
};


export default WhiteCard;
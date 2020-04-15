import React from 'react';
import '../css/infobox.css';

export default function InfoBox(props) {
    return (
        <div className={"infoBox " + props.color} id='infoBox'>
            <div className="single-character">
                <i className={props.icon}></i>
            </div>
            <div className="text">
                {props.text}  
            </div>
        </div>
    );
}
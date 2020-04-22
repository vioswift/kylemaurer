import React from 'react';
import '../css/buttons/button.css';
import '../css/buttons/project-button.css';
import '../css/buttons/minibar-button.css';

export default function Button(props) {
    return (
        <a 
            href={props.url} 
            target={props.target}
            className={props.buttonType + " " + props.color} 
            rel="noopener noreferrer">
                {props.icon ? (<i className={props.icon}></i>) : ''}
                {" " + props.text}
        </a>
    );
}
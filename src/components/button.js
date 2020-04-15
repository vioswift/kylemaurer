import React from 'react';
import '../css/buttons/project-button.css';

export default function Button(props) {
    return (
        <a 
            href={props.url} 
            target={props.target}
            className={props.buttonType + " " + props.color} 
            rel="noopener noreferrer">
                {props.icon !== undefined ? (<i className={props.icon}></i>) : ''}
                {" " + props.text}
        </a>
    );
}
import React from 'react';
import '../css/cards.css';

export default function card(props) {
    const items = props.items.map((number, keyID) =>
        <li key={keyID}>{number}</li>
    );

    return (
        <div className={"card " + props.color}>
            <h2>{props.heading}</h2>
            <ul className="bullet">
                {items}
            </ul>
        </div>
    );
}
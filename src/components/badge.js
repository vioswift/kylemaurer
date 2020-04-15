import React from 'react';
import '../css/badges.css';

export default function Badge(props) {
    return (<div className={"badge " + props.color}>{props.text}</div>);
}
import React from 'react';
import '../../css/icon-buttons.css';
import Icon from './Icon';
import programmingJSON from '../../json/programming.json';

export default function Icons(props) {
    const searchName = (text) => {
        return programming => programming.text.toLowerCase().includes(text.toLowerCase());
    }

    const getCategory = (category) => {
        if (category === '') {
            return () => true;
        } else {
            return programming => programming.category.some(item => category.toLowerCase() === item.toLowerCase());
        }
    }

    const getItem = (text, category) => {
        if (text === '') {
            return getCategory(category);
        } else {
            return searchName(text);
        }
    }

    const getColor = (stored_color, id) => {
        if (props.colors === undefined) {
            return stored_color;
        }else {
            return props.colors[id % props.colors.length];
        }
    }

    const getIcons = () => {
        if (props.indexStart !== undefined && props.indexEnd !== undefined) {
            return programmingJSON.programming.filter(getItem(props.text, props.category)).map((programming, keyID) => {
                return (<Icon key={keyID} icon={programming.icon} color={getColor(programming.color, keyID)} text={programming.text} url={programming.url}/>);
            }).slice(props.indexStart, props.indexEnd);
        } else {
            return programmingJSON.programming.filter(getItem(props.text, props.category)).map((programming, keyID) => {
                return (<Icon key={keyID} icon={programming.icon} color={programming.color} text={programming.text} url={programming.url}/>)
            });
        }
    }

    // just used to get array size and print it on console
    if (props.getCount !== undefined) {
        console.log(programmingJSON.programming.length);
    }

    return (
        <ul id="icon-buttons" className="icon-buttons">
            {getIcons()}
        </ul>
    );
}
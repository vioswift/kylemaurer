import React from 'react';
import Card from './card';
import technologiesJSON from '../../json/technologies.json';

export default function Cards(props) {
    const getColor = (stored_color, id) => {
        if (props.colors === undefined) {
            return stored_color;
        }else {
            return props.colors[id % props.colors.length];
        }
    }

    // just used to get array size and print it on console
    if (props.getCount !== undefined) {
        console.log(technologiesJSON.technologies.length);
    }

    if (props.indexStart !== undefined && props.indexEnd !== undefined) {
        return technologiesJSON.technologies.map((technologies, keyID) => {
            return (<Card key={keyID} heading={technologies.text} items={technologies.items} color={getColor(technologies.color, keyID)}/>);
        }).slice(props.indexStart, props.indexEnd);
    } else {
        return technologiesJSON.technologies.map((technologies, keyID) => {
            return (<Card key={keyID} heading={technologies.text} items={technologies.items} color={technologies.color}/>);
        });
    }
}
import React from 'react';
import InfoBox from './InfoBox';
import experienceJSON from '../../json/experience.json';

export default function InfoBoxes(props) {
    const getColor = (stored_color, id) => {
        if (props.colors === undefined) {
            return stored_color;
        }else {
            return props.colors[id % props.colors.length];
        }
    }

    // just used to get array size and print it on console
    if (props.getCount !== undefined) {
        console.log(experienceJSON.experiences.length);
    }

    if (props.indexStart !== undefined && props.indexEnd !== undefined) {
        return experienceJSON.experiences.map((experience, keyID) => {
            return (<InfoBox key={keyID} icon={experience.icon} color={ getColor(experience.color, keyID) } text={experience.text}/>);
        }).slice(props.indexStart, props.indexEnd);
    } else {
        return experienceJSON.experiences.map((experience, keyID) => {
            return <InfoBox key={keyID} icon={experience.icon} color={experience.color} text={experience.text}/>
        });
    }
}
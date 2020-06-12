import React from 'react';

export default function SliderItem(props) {
    const getImage = () => {
        if (props.logo) {
            return <img src={require("../../images/projects/" + props.logo)} alt={props.text + " Logo"}/>;
        }
    }

    return (
        <div className={"slider-item slider" + props.slide}>
            <span href="projects">{props.text.toUpperCase()}</span>
            {getImage()}
        </div>
    );
}
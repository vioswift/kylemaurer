import React from 'react';

export default function SliderItem(props) {
    return (
        <div className={"slider-item slider" + props.slide}>
            <span href="projects">{props.text.toUpperCase()}</span>
        </div>
    );
}
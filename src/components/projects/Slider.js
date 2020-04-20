import React, { useState } from 'react';
import '../../css/slider.css';
import SliderItem from './SliderItem';
import projectsJSON from '../../json/projects.json';

export default function Slider() {
    const [count, setCount] = useState(0);

    const getCount = () => {
        setCount(count + 1);
        return count;
    }

    const getNumber = () => {
        return Math.floor(Math.random() * 10 + 1);
    }

    const getProjectSlides = projectsJSON.projects.map((project, keyID) =>
        <SliderItem key={keyID} text={project.heading} slide={getNumber()}/>
    );

    const getSmallProjectSlides = projectsJSON.small_projects.map((project, keyID) =>
        <SliderItem key={keyID} text={project.heading} slide={getNumber()}/>
    );

    return (
        <div className={"slider"}>
            {getProjectSlides}
            {getSmallProjectSlides}
        </div>
    );
}
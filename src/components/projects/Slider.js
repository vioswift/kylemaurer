import React, { useState, useEffect } from 'react';
import '../../css/slider.css';
import '../../css/buttons/slider-button.css';
import SliderItem from './SliderItem';
import projectsJSON from '../../json/projects.json';

export default function Slider() {
    const [scrollElement, setScrollElement] = useState(0);
    const scrollSpeed = 150;

    useEffect(() => {
        setScrollElement(document.getElementById("sliderScroll"));
    }, []);

    const getScroll = () => {
        return scrollElement.scrollLeft;
    }

    const getMaxScroll = () => {
        return scrollElement.scrollWidth - scrollElement.clientWidth;
    }

    const getNumber = (num) => {
        return num + 1;
    }

    const scrollLeft = () => {
        if (getScroll() >= 0) {
            return getScroll() + scrollSpeed;
        }
    }

    const scrollRight = () => {
        if (getScroll() <= getMaxScroll()) {
            return getScroll() - scrollSpeed;
        }
    }

    const getProjectSlides = projectsJSON.projects.map((project, keyID) =>
        <SliderItem key={keyID} text={project.heading} logo={project.logo} slide={getNumber(keyID)}/>
    );

    const getSmallProjectSlides = projectsJSON.small_projects.map((project, keyID) =>
        <SliderItem key={keyID} text={project.heading} logo={project.logo} slide={getNumber(keyID)}/>
    );

    const onClickLeft = () => {
        scrollElement.scrollTo(scrollLeft(), 0);
    }

    const onClickRight = () => {
        scrollRight();
        document.getElementById("sliderScroll").scrollTo(scrollRight(), 0);
    }

    return (
        <div className={"slider"}>
            <div className={"slider-button left"} onClick={onClickRight}><i className="fas fa-arrow-left"></i></div>
            <div className={"slider-button right"} onClick={onClickLeft}><i className="fas fa-arrow-right"></i></div>
            <div  id={"sliderScroll"} className={"scroll"}>
                {getProjectSlides}
                {getSmallProjectSlides}
            </div>
        </div>
    );
}
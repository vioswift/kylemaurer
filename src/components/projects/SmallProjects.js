import React from 'react';
import SmallProject from './SmallProject';
import projectsJSON from '../../json/projects.json';

export default function SmallProjects(props) {
    const getColor = (stored_color, id) => {
        if (props.colors === undefined) {
            return stored_color;
        }else {
            return props.colors[id % props.colors.length];
        }
    }

    // just used to get array size and print it on console
    if (props.getCount !== undefined) {
        console.log(projectsJSON.small_projects.length);
    }

    const sortByYear = () => {
        return (project1, project2) => project2.year - project1.year;
    }

    if (props.indexStart !== undefined && props.indexEnd !== undefined) {
        return projectsJSON.small_projects.sort(sortByYear()).map((project, keyID) => {
            return (
                <SmallProject 
                    key={keyID} 
                    heading={project.heading} 
                    text={project.text} 
                    year={project.year} 
                    categories={project.categories}
                    buttons={project.buttons}
                    color={getColor(project.color, keyID)}
                />
            );
        }).slice(props.indexStart, props.indexEnd);
    } else {
        return projectsJSON.small_projects.sort(sortByYear()).map((project, keyID) => {
            return (
                <SmallProject 
                    key={keyID} 
                    heading={project.heading} 
                    text={project.text} 
                    year={project.year} 
                    categories={project.categories}
                    buttons={project.buttons}
                />
            );
        });
    }
}
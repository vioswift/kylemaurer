import React from 'react';
import Project from './Project';
import projectsJSON from '../../json/projects.json';

export default function Projects(props) {
    const getColor = (stored_color, id) => {
        if (props.colors === undefined) {
            return stored_color;
        }else {
            return props.colors[id % props.colors.length];
        }
    }

    // just used to get array size and print it on console
    if (props.getCount !== undefined) {
        console.log(projectsJSON.projects.length);
    }

    const sortByYear = () => {
        return (project1, project2) => project2.year - project1.year;
    }

    if (props.indexStart !== undefined && props.indexEnd !== undefined) {
        return projectsJSON.projects.sort(sortByYear()).map((project, keyID) => {
            return (
                <Project 
                    key={keyID} 
                    heading={project.heading} 
                    text={project.text} 
                    logo={project.logo} 
                    year={project.year} 
                    projectType={project.projectType}
                    categories={project.categories}
                    buttons={project.buttons}
                    color={getColor(project.color, keyID)}
                />
            );
        }).slice(props.indexStart, props.indexEnd);
    } else {
        return projectsJSON.projects.sort(sortByYear()).map((project, keyID) => {
            return (
                <Project 
                    key={keyID} 
                    heading={project.heading} 
                    text={project.text} 
                    logo={project.logo} 
                    year={project.year} 
                    projectType={project.projectType}
                    categories={project.categories}
                    buttons={project.buttons}
                />
            );
        });
    }
}
import React from 'react';
import '../../css/projects.css';
import Badge from '../Badge';
import Button from '../Button';

export default function SmallProject(props) {
    const buttons = () => {
        return props.buttons.map(function(button, keyID) {
            return <Button 
                key={keyID}
                target={"_blank"}
                url={button.url}
                buttonType={"project-button"}
                color={button.color}
                text={button.text}
            />
        });
    }

    const sortByText = () => {
        return ((category1, category2) => {
            if(category1 < category2) { return -1; }
            if(category1 > category2) { return 1; }
            return 0;
        });
    }

    const badges = () => {
        return props.categories.sort(sortByText()).map(function(category, keyID) {
            return (<Badge key={keyID} text={category}/>);
        });
    }

    return (
        <div className="project">
            <h2>{props.heading}</h2>
            <div className="badge-container">
                {badges()}
            </div>
            <div className="buttons">
                {buttons()}
            </div>
        </div>
    );
}
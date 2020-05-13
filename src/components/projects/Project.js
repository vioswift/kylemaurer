import React from 'react';
import '../../css/projects.css';
import Badge from '../Badge';
import Button from '../Button';

export default function Project(props) {
    const buttons = () => {
        return props.buttons.map(function(button, keyID) {
            return <Button 
                key={keyID}
                target={"_blank"}
                url={button.url}
                buttonType={"project-button"}
                color={button.color}
                icon={button.icon}
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
        <li>
            <img src={require("../../images/projects/" + props.logo)} alt={props.heading + " Logo"}/>
            <h2 className="heading">{props.heading}</h2>
            <p>{props.text}</p>
            <small>
                <span className="project-year">- {props.year} -</span> <br/>
                <em><strong>Project Type: {props.projectType}</strong></em>
            </small>
            <div className="badge-container">
                {badges()}
            </div>
            {buttons()}
        </li>
    );
}
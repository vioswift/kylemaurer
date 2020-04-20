import React from 'react';
import '../css/navigation/minibar.css';
import Button from './Button';

export default function MiniBar(props) {
    return (
        <div className="minibar">
            <Button 
                text={"Projects"} 
                buttonType={"minibar-button"} 
                color={"red"} 
                url={"#projects"}
                icon={"fas fa-project-diagram"}
            />
            <Button 
                text={"About"} 
                buttonType={"minibar-button"} 
                color={"red"} 
                url={"#about"}
                icon={"fas fa-user-alt"}
            />
            <Button 
                text={"Contact"} 
                buttonType={"minibar-button"} 
                color={"red"} 
                url={"#contact"}
                icon={"fas fa-envelope"}
            />
        </div>
    );
}
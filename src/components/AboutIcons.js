import React from 'react';
import '../css/about-icons.css';

class AboutIcons extends React.Component {
    render() {
        return (
            <div className="about-icons">
                <div className="circle primary"><i className="fas fa-tachometer-alt"></i><span>Fast Worker</span></div>
                <div className="circle tertiary"><i className="fas fa-user-friends"></i><span>Team Player</span></div>
                <div className="circle primary"><i className="fab fa-pushed"></i><span>Passionate</span></div>
                <div className="circle tertiary"><i className="fas fa-graduation-cap"></i><span>Quick Learner</span></div>
                <div className="circle primary"><i className="fas fa-cogs"></i><span>Problem Solver</span></div>
            </div>
        );
    }
}

export default AboutIcons;

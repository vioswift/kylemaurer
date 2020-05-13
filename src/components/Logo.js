import React from 'react';
import logo from '../images/logo.png';

export default function Logo(props) {
    if (props.fullLogo === true) {
        return (
            <div className="landing-group hideMobile">
                <div className="full-logo">
                    <img src={logo} alt="Kyle Maurer Logo"/>
                </div>
            </div>
        );
    } else {

    }
}
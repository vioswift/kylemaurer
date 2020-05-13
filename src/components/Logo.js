import React from 'react';
import fullLogo from '../images/kyle_logo_full.png';
import logo from '../images/kyle_logo.png';

export default function Logo(props) {
    if (props.fullLogo === true) {
        return (
            <div className="landing-group hideMobile">
                <div className="full-logo">
                    <img src={fullLogo} alt="Kyle Maurer Logo"/>
                </div>
            </div>
        );
    } else {
        return (
            <img src={logo} alt="Kyle Maurer Logo"/>
        );
    }
}
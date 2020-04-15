import React from 'react';
import logo from '../images/logo.png';

export default function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="col c0">
                    <img src={logo} alt="Kyle Maurer Logo"/>
                </div>
                <div className="col">
                    <small>
                        Copyright &#169;
                        {" " + (new Date().getFullYear()) + " "}
                        Kyle Maurer. All Rights Reserved
                    </small>
                </div>
            </div>
        </footer>
    );
}
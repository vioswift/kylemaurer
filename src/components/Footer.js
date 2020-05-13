import React from 'react';
import Logo from './Logo';

export default function Footer() {
    return (
        <footer>
            <div className="row">
                <div className="col c0">
                    <Logo fullLogo={false}/>
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
import React, { useState } from 'react';
import '../css/navigation/menu.css';
import '../css/navigation/topnav.css';
import '../css/navigation/menuToggle.css';
import logo from '../images/logo.png';
import useViewport from '../customhooks/useViewport';


export default function Navigation() {
    const [toggle, setToggle] = useState(false);
    const viewport = useViewport();
    const items = ["Home", "About", "Experience", "Programming", "Technologies", "Projects", "Contact"];

    const handleClick = () => {
        setToggle(!toggle);
    }

    const closeMenu = () => {
        setToggle(false);
    }

    const navItems = items.map((item, keyID) =>
        <li key={keyID}><a href={"#" + item.toLowerCase()} className={keyID === viewport ? 'active' : ''} onClick={closeMenu}>{item}</a></li>
    );

    const menuToggle = (
        <div id="menuToggle" onClick={handleClick} className={toggle ? 'open' : ''}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div> 
    );

    return (
        <>            
            <nav role="navigation" className={"menu " + (toggle ? 'open' : '')}>
                <ul>
                    <li className="logo"><img src={logo} className="logo" alt="Kyle Maurer Logo"/></li>
                    {navItems}
                </ul>
            </nav>
            <div className={"blackout " + (toggle ? 'open' : '')} onClick={closeMenu}><i className="fas fa-arrow-left"></i></div>

            <div className="topnav">
                {menuToggle}
                <a href="#home" className="active">
                    <img src={logo} alt="Kyle Maurer Logo" width="60" height="60"/>
                </a>
            </div>
        </>
    )
}
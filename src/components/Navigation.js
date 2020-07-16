import React, { useState } from 'react';
import '../css/navigation/menu.css';
import '../css/navigation/topnav.css';
import '../css/navigation/menuToggle.css';
import useViewport from '../customhooks/useViewport';
import Logo from './Logo';
import Button from './Button';

export default function Navigation() {
    const [toggle, setToggle] = useState(false);
    const viewport = useViewport();
    const items = ["Home", "About", "Projects", "Experience", "Programming", "Technologies", , "Contact"];

    const handleClick = () => {
        setToggle(!toggle);
    }

    const closeMenu = () => {
        setToggle(false);
    }

    const navItems = items.map((item, keyID) =>
        <li key={keyID}><a href={"#" + item.toLowerCase()} className={"zoomhover " + (keyID === viewport ? 'active' : '')} onClick={closeMenu}>{item}</a></li>
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
                    <li className="logo"><Logo fullLogo={false}/></li>
                    {navItems}
                </ul>
            </nav>
            <div className={"blackout " + (toggle ? 'open' : '')} onClick={closeMenu}><i className="fas fa-arrow-left"></i></div>

            <div className="topnav">
                {menuToggle}
                <a href="#home" className="active">
                    <Logo fullLogo={false}/>
                </a>
                <Button 
                    text={"View Projects"} 
                    buttonType={"topnav button"} 
                    color={"primary"} 
                    url={"#projects"}
                />
            </div>
        </>
    )
}
import React, { useState, useEffect } from 'react';
import '../css/navigation.css';
import logo from '../images/logo.png';
import useWindowSize from '../customhooks/useWindowSize';
import useViewport from '../customhooks/useViewport';


export default function Navigation() {
    const [isMobile, setIsMobile] = useState(false);
    const [hamburgerToggle, setHamburgerToggle] = useState(false);
    const [toggle, setToggle] = useState(false);
    const size = useWindowSize();
    const viewport = useViewport();
    const items = ["Home", "About", "Experience", "Programming", "Technologies", "Projects", "Contact"];

    useEffect(() => {
        resize();
    });

    const handleClick = () => {
        setToggle(!toggle);
    }

    const resize = () => {
        setIsMobile(size.width <= 1024);
    
        if (isMobile && !toggle) {
            setHamburgerToggle(false);
        } else {
            setHamburgerToggle(true);
        }
    }

    const navItems = items.map((item, keyID) =>
        <li key={keyID} className={keyID === viewport ? 'active' : ''}><a href={"#" + item.toLowerCase()} onClick={handleClick}>{item}</a></li>
    );

    return (
        <>
            <div className="topnav">
                <a href="#home" className="active">
                    <img src={logo} alt="Kyle Maurer Logo" width="60" height="60"/>
                </a>
            </div>

            <nav role="navigation">
                <div id="menuToggle">
                    <img src={logo} className="logo" alt="Kyle Maurer Logo"/>
                    <input type="checkbox" id="hamburgerToggle" onChange={handleClick} checked={hamburgerToggle}/>
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        {navItems}
                    </ul>
                </div>
            </nav>
        </>
    )
}
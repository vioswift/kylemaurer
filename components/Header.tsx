import React from "react";
import Image from "next/image";

import NavBar from "./NavBar";
import SiteMetadata from "./MetaData";

export default function Header() {
    return (
        <header>
            <NavBar />
            <div className="header flex light-bg">
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <button>Frontend Developer</button>
                            </div>
                            <div className="col">
                                <button>Backend Developer</button>
                            </div>
                            <div className="col">
                                <button>DevOps Engineer</button>
                            </div>
                            <div className="col">
                                <button>Cloud Engineer</button>
                            </div>
                        </div>
                    </div>

                    <h1 className="white">Building High-Performance Solutions.</h1>
                    <h1 className="white">Elevating User Experience!</h1>
                    <p className="gray">I design and build efficent systems and also high quality user experiences.</p>
                    <a className="green" href="https://www.linkedin.com/in/kyle-maurer/" target="_blank">Let&#39;s chat!</a>
                </div>
                <Image src="/images/banner.png" width={567} height={429} alt="blaiti" />
            </div>
        </header>
    )
}
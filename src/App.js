import React from 'react';
import logo from './images/logo.png';
import './css/style.css';
import './css/base.css';
import './css/page.css';
import './css/grid.css';
import './css/landing-page.css';
import './css/scrollbar.css';
import './css/headings.css';
import './css/miscellaneous.css';
import './css/bullet-points.css';
import Navigation from './components/Navigation';
import AboutIcons from './components/AboutIcons';
import InfoBoxes from './components/infobox/InfoBoxes';
import Programming from './components/programming/Programming';
import Cards from './components/card/cards';
import Projects from './components/projects/Projects';
import SmallProjects from './components/projects/SmallProjects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Navigation/>
            <div className="main" id="main">
                <div className="newpage landing-page">
                    <a className="visuallyhidden" id="home" href="#home">Home</a>
                    <div className="landing-bg"></div>
                    <div className="container">
                        <div className="landing-group">
                            <div className="full-logo">
                                <img src={logo} alt="Kyle Maurer Logo"/>
                                <h1 id="landingPageTitle">Kyle Maurer</h1>
                                <hr/>
                                <h2>I.T PROFESSIONAL</h2>
                            </div>
                            <div className="quote">
                                <em>
                                    <i className="fas fa-quote-left"></i>
                                    Always think three steps ahead!
                                </em>
                            </div>
                        </div>
                        <a href="#about" className="down-button"><i className="fas fa-chevron-down"></i></a>
                    </div>
                </div>

                <div className="newpage">
                    <a className="visuallyhidden" id="about" href="#about">about</a>
                    <div className="container">
                    <h1 className="heading-line red">About</h1>
                        <div className="col" style={{ "textAlign": "center" }}>
                            <AboutIcons/>
                            <p>
                                I have a serious passion for software development, I enjoy solving problems and
                                making things as simple and efficient as possible!
                            </p>
                            <p>
                                I have completed my University degree in a <strong>Bachelor of Information Communication
                                    Technology</strong> and graduated with a <strong>Distinction</strong>.
                            </p>
                            <p>
                                I enjoy working in <strong>front-end</strong> and <strong>back-end</strong> web development, I also enjoy coding software for the
                                desktop, I just love software development!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="newpage bluegradientbg" name="experience" id="test2">
                    <a className="visuallyhidden" name="experience" href="#experience">experience</a>
                    <div className="container">
                        <h1 className="heading-line red">Experience</h1>
                        <div className="col center">
                            <div className="row rauto">
                                <div className="col">
                                    <InfoBoxes indexStart={0} indexEnd={8} colors={["blue", "red"]}/>
                                </div>
                                <div className="col">
                                    <InfoBoxes indexStart={8} indexEnd={16} colors={["red", "blue"]}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="newpage">
                    <a className="visuallyhidden" name="programming" href="programming">programming</a>
                    <div className="container">
                        <h1 className="heading-line red">Programming Skills</h1>
                        <Programming/>
                    </div>
                </div>

                <div className="newpage bluegradientbg">
                    <a className="visuallyhidden" name="technologies" href="technologies">technologies</a>
                    <h1 className="heading-line red">Technologies</h1>
                    <div className="container">
                        <div className="col center">
                            <div className="row rauto">
                                <div className="col">
                                    <Cards indexStart={0} indexEnd={4} colors={["", "darkgrey"]}/>                    
                                </div>
                                <div className="col">
                                    <Cards indexStart={4} indexEnd={8} colors={["darkgrey", ""]}/>                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="newpage">
                    <a className="visuallyhidden" name="projects" href="projects">projects</a>
                    <div className="container">
                        <h1 className="heading-line red">Projects</h1>
                        <h2>Major Projects</h2>
                        <div className="row r100">
                            <ul className="projects">
                                <Projects/>
                            </ul>
                        </div>
                        <h2>Small Projects</h2>
                        <div className="row r100">
                            <ul className="scripts">
                                <SmallProjects/>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="newpage bluegradientbg">
                    <a className="visuallyhidden" name="contact" href="contact">contact</a>
                    <div className="container">
                        <h1 className="heading-line red">Contact</h1>
                        <ContactForm/>
                    </div>
                </div>

                <Footer/>

            </div>
        </>
    );
}

export default App;

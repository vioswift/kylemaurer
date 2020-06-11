import React from 'react';
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
import Page from './components/Page';
import MiniBar from './components/MiniBar';
import Title from './components/Title';
import Logo from './components/Logo';
import Slider from './components/projects/Slider';

function App() {
    return (
        <>
            <Navigation/>
            <div className="main" id="main">
                <div className="newpage landing-page">
                    <a className="visuallyhidden" id="home" href="#home">Home</a>
                    <h1 className="visuallyhidden">Home</h1>
                    <div className="landing-bg"></div>
                    <div className="container">
                        {/* <div className="landing-group">
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
                        </div> */}

                        <Logo fullLogo={true}/>
                        <Title/>
                        <Slider/>
                        <MiniBar/>
                    </div>
                </div>

                <Page heading={"About"} theme={"dark"}>
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
                </Page>

                <Page heading={"Experience"} theme={"light"}>
                    <div className="col center">
                        <div className="row rauto">
                            <div className="col">
                                <InfoBoxes indexStart={0} indexEnd={6} colors={["black", "red"]}/>
                            </div>
                            <div className="col">
                                <InfoBoxes indexStart={6} indexEnd={12} colors={["red", "black"]}/>
                            </div>
                        </div>
                    </div>
                </Page>

                <Page heading={"Programming"} theme={"dark"}>
                    <Programming/>
                </Page>

                <Page heading={"Technologies"} theme={"light"}>
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
                </Page>

                <Page heading={"Projects"} theme={"dark"}>
                    <h2>Major Projects</h2>
                    <div className="row r100">
                        <div className="projects">
                            <Projects/>
                        </div>
                    </div>
                    <h2>Small Projects</h2>
                    <div className="row r100">
                        <div className="scripts">
                            <SmallProjects/>
                        </div>
                    </div>
                </Page>

                <Page heading={"Contact"} theme={"light"}>
                    {/* <div className="col center">
                        <div className="row rauto">
                            <div className="col"> */}
                                <ContactForm/>
                            {/* </div>
                        </div>
                    </div> */}
                </Page>

                <Footer/>
            </div>
        </>
    );
}

export default App;

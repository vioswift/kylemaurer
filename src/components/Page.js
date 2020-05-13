import React from 'react';

export default function Page(props) {
    const getHeadingLower = () => {
        return props.heading.toLowerCase();
    }

    const getTheme = () => {
        if (props.theme === "light") {
            return ({
                background: "bluegradientbg"
            });
        }
        if (props.theme === "dark") {
            return ({
                background: ""
            });
        }
    }

    return (
        <div className={"newpage " + getTheme().background}>
            <a className="visuallyhidden" id={getHeadingLower()} href={"#" + getHeadingLower()}>{getHeadingLower()}</a>
            <div className="container">
                <h1 className="heading-line">{props.heading}</h1>
                {props.children}
            </div>
        </div>
    );
}
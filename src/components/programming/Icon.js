import React from 'react';
import '../../css/icon-buttons.css';

class Icon extends React.Component {
    render() {
        return (
            <>
                <li className={this.props.color}>
                    <a href={this.props.url} target="_blank" rel="noopener noreferrer">
                        <i className={this.props.icon}></i>
                        <p>{this.props.text}</p>
                    </a>
                </li>
            </>
        );
    }
}

export default Icon;
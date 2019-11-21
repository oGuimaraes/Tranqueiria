import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Button extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to={this.props.to}>
                    <button id="Button">{this.props.title}</button>
                </Link>
            </React.Fragment>
        )
    }
}

export default Button

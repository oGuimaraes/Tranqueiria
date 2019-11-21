import React, { Component } from 'react'
import {Dropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class DropdownItem extends Component {
    render() {
        return (
            <Link to ={this.props.to}>
                <Dropdown.Item >{this.props.title}</Dropdown.Item>
            </Link>
        )
    }
}

export default DropdownItem

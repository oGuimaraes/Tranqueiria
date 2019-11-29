import React, { Component } from 'react'

export class CheckBox extends Component {
    render() {
        return (
            <>
                <input type='checkbox' onChange={this.props.updateFilter.bind(this,this.props.type,this.props.title)}></input>
                {this.props.title}
            </>
        )
    }
}

export default CheckBox

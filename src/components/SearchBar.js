import React, { Component } from 'react'
import Button from './Button'

export class SearchBar extends Component {
    render() {
        return (
            <React.Fragment>
                <input id="searchBar"></input>
                <Button to={this.props.to} title="Buscar"></Button>
            </React.Fragment>
        )
    }
}

export default SearchBar

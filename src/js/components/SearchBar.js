import React, { Component } from 'react'
import {changeSearchElement} from '../actions/index'
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";


const mapDispatchToProps = (dispatch) =>({
    changeSearchElement: (searchElement) => dispatch(changeSearchElement(searchElement))
});

export class SearchBar extends Component {
    state = {
        searchElement: ''
    }
    changeInput = (e) => this.setState({searchElement: e.target.value});
    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.searchElement!==''){  
            this.props.changeSearchElement(this.state.searchElement)
            const searchElement = this.state.searchElement
            this.setState({searchElement: ''});
            this.props.history.push(`/search/${searchElement}`);
        }
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.onSubmit} id="formSearch">
                    <input
                    type="text" 
                    id="searchBar"
                    value={this.state.searchElement}
                    onChange={this.changeInput}
                    placeholder="Buscar"></input>
                    <button type="submit" value="submit" id="Button">Buscar</button>
                </form>
            </React.Fragment>
        )
    }
}

export default withRouter( connect(null,mapDispatchToProps) (SearchBar))

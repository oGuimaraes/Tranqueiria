import React, { Component } from 'react'
import {changeSearchElement} from '../actions/index'
import {connect} from 'react-redux'
import { withRouter } from "react-router-dom";
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


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

                    <div className={'search-input', 'makeStyles-search-4'} >
                        <SearchIcon />
                        <div className={'MuiInputBase-root' + 'makeStyles-inputRoot-6'}>
                            <InputBase 
                            placeholder="Buscar por ..."
                            type="text" 
                            id="searchBar"
                            value={this.state.searchElement}    
                            onChange={this.changeInput}
                            classes={'MuiInputBase-input', 'makeStyles-inputInput-7'}
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </div>

                    <Button type="submit" value="submit" id="Button" variant="contained" size="small">Buscar</Button> 
                </form>
            </React.Fragment>
        )
    }
}

export default withRouter(connect(null,mapDispatchToProps) (SearchBar))

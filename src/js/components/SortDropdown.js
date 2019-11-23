import React, { Component } from 'react'
import { DropdownButton } from 'react-bootstrap'
import {Dropdown} from 'react-bootstrap'
import {connect} from 'react-redux'
import {setSort} from '../actions/index'

const mapStateToProps = state => ({
    sort:state.sort
})
const mapDispatchToProps = (dispatch) =>({
    setSort: (sortOption) => dispatch(setSort(sortOption))
});
export class SortDropdown extends Component {
    render() {
        return (
            <DropdownButton id="dropdown-button" title="Grupo 1">
                        <Dropdown.Item >a</Dropdown.Item>
                        <Dropdown.Item >b</Dropdown.Item>
                        <Dropdown.Item >c</Dropdown.Item>
            </DropdownButton>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortDropdown)

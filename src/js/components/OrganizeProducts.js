import React, { Component } from 'react'
import CardGroup  from '../components/CardGroup'
import {connect} from 'react-redux'

const mapStateToProps = state =>{
    return({
        filter:state.filter,
        sort:state.sort
    })
};
export class OrganizeProducts extends Component {

    render() {
        return (
            <CardGroup products={this.props.products}/>
        )
    }
}

export default connect(mapStateToProps)(OrganizeProducts)

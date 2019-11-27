import React, { Component } from 'react'
import CardGroup  from '../components/CardGroup'
import {connect} from 'react-redux'
import {A_a_Z,Z_a_A} from '../constants/sort-types'

const mapStateToProps = state =>{
    return({
        filter:state.filter,
        sort:state.sort
    })
};
const compararAaZ = (a, b)=> {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
}
const compararZaA = (a, b)=> {
    return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
}
const ordenar = (nextProps)=>{
    if(nextProps.sort === A_a_Z){
        return [...nextProps.products.sort(compararAaZ)]
    }
    else if(nextProps.sort === Z_a_A){
        return [...nextProps.products.sort(compararZaA)]
    }
    return [...nextProps.products]
}
export class OrganizeProducts extends Component {
    constructor(props){
        super(props)
        this.state = {
            viewProduct: this.props.products
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            viewProduct: ordenar(nextProps)
        };
    }
    render() {
        return (
            <CardGroup products={this.state.viewProduct}/>
        )
    }
}

export default connect(mapStateToProps)(OrganizeProducts)

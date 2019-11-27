import React, { Component } from 'react'
import CardGroup  from '../components/CardGroup'
import {connect} from 'react-redux'
import {A_a_Z,Z_a_A,brand,category,priceAaB,priceBaA} from '../constants/sort-types'
import {compararAaZ,compararZaA,compararBrand,compararCategory,compararPriceAaB,compararPriceBaA} from '../functions'

const mapStateToProps = state =>{
    return({
        filter:state.filter,
        sort:state.sort
    })
};


const ordenar = (nextProps)=>{
    if(nextProps.sort === A_a_Z){
        return [...nextProps.products.sort(compararAaZ)]
    }
    else if(nextProps.sort === Z_a_A){
        return [...nextProps.products.sort(compararZaA)]
    }
    else if(nextProps.sort === brand){
        return [...nextProps.products.sort(compararBrand)]
    }
    else if(nextProps.sort === category){
        return [...nextProps.products.sort(compararCategory)]
    }
    //alterar o metodo de ordenação para utilizar um couting sort 
    else if(nextProps.sort === priceAaB){
        return [...nextProps.products.sort(compararPriceAaB)]
    }
    else if(nextProps.sort === priceBaA){
        console.log("Passou aqui")
        return [...nextProps.products.sort(compararPriceBaA)]
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

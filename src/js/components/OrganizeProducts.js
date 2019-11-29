import React, { Component } from 'react'
import CardGroup  from '../components/CardGroup'
import {connect} from 'react-redux'
import {A_a_Z,Z_a_A,brand,category,priceAaB,priceBaA,color} from '../constants/sort-types'
import {compararAaZ,compararZaA,compararBrand,compararCategory,compararPriceAaB,compararPriceBaA,compararColor} from '../functions'

const mapStateToProps = state =>{
    return({
        filter:state.filter,
        sort:state.sort,
        changeFilter:state.changeFilter
    })
};

const filtrar = (viewProducts,nextProps) =>{
    let newViewProducts = viewProducts
    if(nextProps.filter.brand.length>0){
        nextProps.filter.brand.map(brand=> 
            newViewProducts = [...viewProducts.filter(product => product.brand === brand)]
        )
    }
    if(nextProps.filter.category.length>0){
        nextProps.filter.category.map(category=> 
            newViewProducts = [...viewProducts.filter(product => product.category === category)]
        )
    }
    return newViewProducts
}

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
        return [...nextProps.products.sort(compararPriceBaA)]
    }
    //ordenação esta sendo realizada baseada na conversão do nome da cor para HEX e em seguida convertida para decimal
    else if(nextProps.sort === color){
        return [...nextProps.products.sort(compararColor)]
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
        let viewProducts = ordenar(nextProps)
        viewProducts = filtrar(viewProducts,nextProps)
        
        return {
            viewProduct: viewProducts
        };
    }
    render() {
        return (
            <CardGroup products={this.state.viewProduct}/>
        )
    }
}

export default connect(mapStateToProps)(OrganizeProducts)

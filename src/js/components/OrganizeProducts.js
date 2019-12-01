import React, { Component } from 'react'
import CardGroup  from '../components/CardGroup'
import {connect} from 'react-redux'
import {A_a_Z,Z_a_A,brand,category,priceAaB,priceBaA,color} from '../constants/sort-types'
import {compararAaZ,compararZaA,compararBrand,compararCategory,compararPriceAaB,compararPriceBaA,compararColor,colourNameToHex} from '../functions'
import { Pagination } from 'react-bootstrap'

const mapStateToProps = state =>{
    return({
        filter:state.filter,
        sort:state.sort,
        changeFilter:state.changeFilter
    })
};
const computeColorDistance = (color1,color2) => {
    console.log(color1)
    console.log(color2)
    let r1 = parseInt(color1.substring(1,3),16)
    let g1 = parseInt(color1.substring(3,5),16)
    let b1 = parseInt(color1.substring(5,7),16)
    let r2 = parseInt(color2.substring(1,3),16)
    let g2 = parseInt(color2.substring(3,5),16)
    let b2 = parseInt(color2.substring(5,7),16)
    let distance = Math.sqrt(Math.pow((r2-r1),2)+Math.pow((g2-g1),2)+Math.pow((b2-b1),2))
    let percent = (1 -(distance/Math.sqrt(Math.pow((255),2)+Math.pow((255),2)+Math.pow((255),2))))
    return percent 
}
const filtrar = (viewProducts,nextProps) =>{
    let newViewProducts = viewProducts
    if(nextProps.filter.type===brand)
        newViewProducts = [...viewProducts.filter(product => product.brand === nextProps.filter.filterOption)]
    else if(nextProps.filter.type===category)
        newViewProducts = [...viewProducts.filter(product => product.category === nextProps.filter.filterOption)]
    else if(nextProps.filter.type===color){
        newViewProducts = [...viewProducts.filter(product =>computeColorDistance(colourNameToHex(product.color),colourNameToHex(nextProps.filter.filterOption))>0.80)]
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
        let active = 1;
        let items = [];
        let pagesNumber = this.state.viewProduct.length/15
        for (let number = 1; number <= pagesNumber; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
            {number}
            </Pagination.Item>,
        );
        }

        const paginationBasic = (
            <div>
                <Pagination size="lg">{items}</Pagination>
            </div>
        );
        return (
            <div className='containerProducts'>
            <CardGroup products={this.state.viewProduct}/>
            {paginationBasic}
            </div>
        )
    }
}

export default connect(mapStateToProps)(OrganizeProducts)

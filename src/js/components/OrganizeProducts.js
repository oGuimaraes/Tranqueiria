import React, { Component } from 'react'
import CardGroup  from '../components/CardGroup'
import {connect} from 'react-redux'
import {A_a_Z,Z_a_A,brand,category,priceAaB,priceBaA,color} from '../constants/sort-types'
import {compararAaZ,compararZaA,compararBrand,compararCategory,compararPriceAaB,compararPriceBaA,compararColor,colourNameToHex,computeColorDistance,btnStyle} from '../functions'
import { Pagination } from 'react-bootstrap'

const mapStateToProps = state =>{
    return({
        filter:state.filter,
        sort:state.sort,
        changeFilter:state.changeFilter
    })
};

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
            viewProduct: this.props.products,
            active:1,
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        let viewProducts = ordenar(nextProps)
        viewProducts = filtrar(viewProducts,nextProps)
        
        return {
            viewProduct: viewProducts
        };
    }
    changeActivePage(number){
        this.setState({active:number})
    }
    // renderPaginationButton(number){
    //     return(
    //         <button key={number} onClick={this.changeActivePage.bind(this,number)}>
    //             {number}
    //         </button>
    //     )
    // }
    handleClickStart(){
        this.setState({active:1})
    }
    handleClickPrevious(){
        if(this.state.active!==1)
        this.setState({active:this.state.active-1})
    }
    handleClickNext(pagesNumber){
        if(this.state.active!==pagesNumber)
        this.setState({active:this.state.active+1})
    }
    handleClickEnd(pagesNumber){
        this.setState({active:pagesNumber})
    }
    render() {
        let items = [];
        let pagesNumber = Math.ceil(this.state.viewProduct.length/10)
        
        const paginationBasic = (
            <div>
                <Pagination size="lg">
                    <button onClick={this.handleClickStart.bind(this)} style={btnStyle()}>Inicio</button>
                    <button onClick={this.handleClickPrevious.bind(this)} style={btnStyle()}>Anterior</button>
                            <h4>{this.state.active}</h4>
                    <button onClick={this.handleClickNext.bind(this,pagesNumber)} style={btnStyle()}>Proximo</button>
                    <button onClick={this.handleClickEnd.bind(this,pagesNumber)} style={btnStyle()}>Fim</button>
                </Pagination>
            </div>
        );
        let viewProductPagination = [];
        for(let i=15*(this.state.active-1);i<15*this.state.active&&i<this.state.viewProduct.length;i++){
            viewProductPagination.push(this.state.viewProduct[i])
        }
        return (
            <div className='containerProducts'>
                <CardGroup products={viewProductPagination}/>
                {paginationBasic}
            </div>
        )
    }
}

export default connect(mapStateToProps)(OrganizeProducts)

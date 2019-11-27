import React, { Component } from 'react'
import { DropdownButton } from 'react-bootstrap'
import {connect} from 'react-redux'
import {setSort} from '../actions/index'
import {A_a_Z,Z_a_A,brand,category,priceBaA,priceAaB, color} from '../constants/sort-types'

const mapStateToProps = state => ({
    sort:state.sort
})
const mapDispatchToProps = (dispatch) =>({
    setSort: (sortOption) => dispatch(setSort(sortOption))
});
export class SortDropdown extends Component {
    btnStyle = () =>{
        return{textDecoration:'none',
        width:'100%',
        border:'none',
        background:'none'}
    }
    renderButton = (sort,title) =>{
        return (
            <button 
                onClick={() =>this.props.setSort(sort)} 
                style={this.btnStyle()}>
                {title}</button>
        )
    }
    render() {
        return (
            <DropdownButton id="dropdown-button" title="Ordenar por:">                
                {this.renderButton(A_a_Z,"De A a Z")}
                {this.renderButton(Z_a_A,"De Z a A")}
                {this.renderButton(brand,"Marca")}
                {this.renderButton(category,"Categoria")}
                {this.renderButton(priceBaA,"Preço: baixo a alto")}
                {this.renderButton(priceAaB,"Preço: alto a baixo")}
                {this.renderButton(color,"Cor")}
            </DropdownButton>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortDropdown)

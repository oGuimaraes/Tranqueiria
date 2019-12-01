import React, { Component } from 'react'
import { Card as CardBoot , Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

export class Product extends Component {

    handleClickAddToCart = () => {
        const {addCartProduct, product} = this.props;
        addCartProduct(product);
        this.props.history.push(`/cart/`);
    }

    render() {
        const {image,name,brand,category,currency,price,color,id} = this.props.product
        return (
            <CardBoot style={{ width: '56rem' }}>
                <div className="row">
                <div className="col-md-6">
                <CardBoot.Img variant="top" style={{ width: '28rem' }} src={image} />
                </div>
                <div className="col-md-6">
                <CardBoot.Body>
                <CardBoot.Title>{name}</CardBoot.Title>
                    <CardBoot.Text>
                        Categoria: {category}
                        <br/>
                        Marca: {brand}
                        <br/>
                        {/* INTL NUMBER FORMAT */}
                        {currency}: {price}
                        <canvas width="20px" height="20px" style={{marginLeft:'20px',backgroundColor:color}}>

                        </canvas>
                    </CardBoot.Text>
                    <Button variant="primary" onClick={this.handleClickAddToCart} >Adicionar ao Carrinho</Button>
                </CardBoot.Body>
                </div>
                </div>
            </CardBoot>
        )
    }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators(Actions, dispatch);

export default withRouter(connect(
  null,
  mapDispatchToProps
)(Product));
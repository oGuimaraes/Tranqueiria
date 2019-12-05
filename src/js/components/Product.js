import React, { Component } from 'react'
import { Card as CardBoot , Button} from 'react-bootstrap';
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
            <CardBoot className="product-card" style={{ width: '56rem' }}>
                <div className="row">
                <div className="col-md-6">
                <CardBoot.Img className="product-image" variant="top" style={{ width: '28rem' }} src={image} />
                </div>
                <div className="col-md-6">
                <CardBoot.Body>
                <CardBoot.Title className="product-title">{name}</CardBoot.Title>
                    <CardBoot.Text>
                        <span class="key-text">Categoria</span> {category}
                        <br/>
                        <span class="key-text">Marca:</span> {brand}
                        <br/>
                        {/* INTL NUMBER FORMAT */}
                        <span class="key-text">R$:</span> {price}
                        <br/>
                        <span class="key-text">Cor Primária:</span> <canvas width="20px" height="20px" style={{marginLeft:'20px',backgroundColor:color}}>

                        </canvas>
                    </CardBoot.Text>
                    <div className="button-section">
                        <Button variant="primary" onClick={this.handleClickAddToCart} >Adicionar ao Carrinho</Button>
                    </div>
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
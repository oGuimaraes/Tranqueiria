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
        const {image,name,brand,category,price,color} = this.props.product
        return (
            <div>
                <div className="product-card-desktop">
                    <img className="product-image" alt="productImage" variant="top" src={image} />
                    <div className="card-section">
                    <CardBoot.Title className="product-title">{name}</CardBoot.Title>
                        <div className="card-text">
                            <span class="key-text">Categoria</span> {category}
                            <br/>
                            <span class="key-text">Marca:</span> {brand}
                            <br/>
                            <span class="key-text">R$:</span> {price}
                            <br/>
                            <span class="key-text">Cor Primária:</span> <canvas width="20px" height="20px" style={{marginLeft:'20px',backgroundColor:color}}>

                            </canvas>
                        </div>
                        <div className="button-section">
                            <Button variant="primary" onClick={this.handleClickAddToCart} >Adicionar ao Carrinho</Button>
                        </div>
                    </div>
                </div>



                <div className="product-card-mobile">
                    <CardBoot.Img className="product-image" variant="top" src={image}/>
                    <CardBoot.Body>
                    <CardBoot.Title className="product-title">{name}</CardBoot.Title>
                        <CardBoot.Text className="card-text">
                            <span class="key-text">Categoria</span> {category}
                            <br/>
                            <span class="key-text">Marca:</span> {brand}
                            <br/>
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
        )
    }
}

const mapDispatchToProps = dispatch => 
  bindActionCreators(Actions, dispatch);

export default withRouter(connect(
  null,
  mapDispatchToProps
)(Product));
import React, { Component } from 'react'
import { Card as CardBoot , Button} from 'react-bootstrap';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export class CardProductCart extends Component {

    handleClickRemoveToCart = () => {
        const {removeCartProduct, product} = this.props;
        removeCartProduct(product.id);
    }

    handleChangeQuantity = (event) => {
        const {changeQuantityProduct, product} = this.props;
        changeQuantityProduct(product.id, event.target.value);
    }

    render() {
        const {image,name,brand,category,currency,price,color,quantity} = this.props.product
        return (
            <div className="row">
                <CardBoot style={{fontSize: '14px',}}>
                    <div className="row">
                    <div className="col-md-6">
                    <CardBoot.Img variant="top" style={{ width: '15rem' }} src={image} />
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
                        <input type="number" min="1" value={quantity} onChange={this.handleChangeQuantity}></input>
                        <button onClick={this.handleClickRemoveToCart}>Remover Item</button>
                    </CardBoot.Body>
                    </div>
                    </div>
                </CardBoot>
            </div>
        )
    }
}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => 
  bindActionCreators(Actions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CardProductCart);

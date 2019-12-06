import React, { Component } from 'react'
import { Card as CardBoot } from 'react-bootstrap';
import * as Actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';

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
        const {name,brand,category,price,color,quantity} = this.props.product
        return (
            <div className="row card-product-cart">
                <div>
                    <div>
                    <div className="title">{name}</div>
                        <CardBoot.Text className="card-info">
                            Categoria: {category}
                            <br/>
                            Marca: {brand}
                            <br/>
                            R$: {price}
                            <canvas width="20px" height="20px" style={{marginLeft:'20px',backgroundColor:color}}></canvas>
                        </CardBoot.Text>
                        <div class="buttons-section">
                            
                            <TextField
                            id="standard-number"
                            label="Quantidade"
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={this.handleChangeQuantity}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            />
                            <IconButton onClick={this.handleClickRemoveToCart} aria-label="delete">
                                <DeleteIcon/>
                            </IconButton>
                        </div>
                    </div>
                </div>
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

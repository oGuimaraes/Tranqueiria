import React, { Component } from 'react'
import {connect} from 'react-redux'
import  CardProductCart  from '../components/CardProductCart'

export class CartPage extends Component {

    render() {
        return (
            <div className="cards-section">
                {this.props.cart.map(product => (
                    <CardProductCart key={product.id} product ={product}/>
                ))}
            </div>
        )

    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(
  mapStateToProps
)(CartPage);



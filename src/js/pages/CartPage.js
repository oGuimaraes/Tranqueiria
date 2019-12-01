import React, { Component } from 'react'
import {connect} from 'react-redux'
import  CardProductCart  from '../components/CardProductCart'

export class CartPage extends Component {
    render() {
        const cards = this.props.cart.map(product=>
            <CardProductCart key={product.id-1} product ={product}/>
        )   
        return (
            <div className="cards-section">
                {cards}
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



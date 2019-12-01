import React, { Component } from 'react'
import {connect} from 'react-redux'
import  CardProductCart  from '../components/CardProductCart'

const cart = [
    {id: 953, name: "Refined Metal Salad", category: "Industrial", currency: 'BRL', brand: "Miller - Parker", price: "867.00",image: "http://lorempixel.com/640/480"},{id: 958, name: "Refined Metal Salad", category: "Industrial", brand: "Miller - Parker", price: "867.00", image:"http://lorempixel.com/640/425"}
]

export class CartPage extends Component {
    render() {
        const cards = cart.map(product=>
            <CardProductCart key={product.id-1} product ={product}/>
        )   
        return (
            <div class="cards-section">
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



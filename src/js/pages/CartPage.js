import React, { Component } from 'react'
import {connect} from 'react-redux'
import  CardProductCart  from '../components/CardProductCart';

export class CartPage extends Component {

    handleCheckOut = () => {
        this.props.history.push(`/checkout/`);
    }

    calcTotal = () => {
        let soma = 0;
        console.log(this.props)
        this.props.cart.forEach(product =>{
            let valorTotalProduto = product.price * product.quantity;
            soma+=Number.parseInt(valorTotalProduto);
        })
        return soma;   
    }

    render() {
        return (
            <div className="content-section">
                <div className="cards-section">
                    {this.props.cart.map(product => (
                        <CardProductCart key={product.id} product ={product}/>
                    ))}
                </div>
                <div className="pay-section">
                    <button onClick={this.handleCheckOut}>Fechar Pedido</button>
                    <h3>R$ {this.calcTotal()},00</h3> 
                </div>
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



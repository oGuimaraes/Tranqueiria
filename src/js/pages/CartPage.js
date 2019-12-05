import React, { Component } from 'react'
import {connect} from 'react-redux'
import  CardProductCart  from '../components/CardProductCart';
import { changePriceTotal } from '../actions/index' 

export class CartPage extends Component {

    handleCheckOut = () => {
        if(this.props.cart.length!==0)
            this.props.history.push(`/checkout/`);
        else
            alert('Por favor coloque algum produto no carrinho para prosseguir')
    }

    calcTotal = () => {
        let soma = 0;
        console.log(this.props)
        this.props.cart.forEach(product =>{
            let valorTotalProduto = product.price * product.quantity;
            soma+=Number.parseInt(valorTotalProduto);
        })
        this.props.changePriceTotal(soma)
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

const mapDispatchToProps = (dispatch) =>({
    changePriceTotal: (priceTotal) => dispatch(changePriceTotal(priceTotal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);



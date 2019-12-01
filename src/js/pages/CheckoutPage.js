import React, { Component } from 'react'
import {connect} from 'react-redux'

export class CheckoutPage extends Component {
    render() {
        return (
            <div className="checkout-page">
                Teste
            </div>
        )
    }
}

export default connect()(CheckoutPage)

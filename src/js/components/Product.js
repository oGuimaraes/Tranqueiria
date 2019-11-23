import React, { Component } from 'react'
import { Card as CardBoot , Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

export class Product extends Component {
    render() {
        const {image,name,brand,category,currency,price,color,id} = this.props.product
        return (
            <CardBoot style={{ width: '56rem' }}>
                <div class="row">
                <div class="col-md-6">
                <CardBoot.Img variant="top" style={{ width: '28rem' }} src={image} />
                </div>
                <div class="col-md-6">
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
                    <Button variant="primary">Adicionar ao Carrinho</Button>
                </CardBoot.Body>
                </div>
                </div>
            </CardBoot>
        )
    }
}

export default Product
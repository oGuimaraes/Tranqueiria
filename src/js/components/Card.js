import React, { Component } from 'react'
import { Card as CardBoot , Button} from 'react-bootstrap';

export class Card extends Component {
    render() {
        const {image,name,brand,category,currency,price,color} = this.props.product
        return (
            <CardBoot style={{ width: '18rem' }}>
                <CardBoot.Img variant="top" src={image} />
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
                    <Button variant="primary">Go somewhere</Button>
                </CardBoot.Body>
            </CardBoot>
        )
    }
}

export default Card

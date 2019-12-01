import React, { Component } from 'react'
import { Card as CardBoot , Button} from 'react-bootstrap';

export class CardProductCart extends Component {

    render() {
        const {image,name,brand,category,currency,price,color,id} = this.props.product
        return (
            <div class="row">
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
                        <input type="number"></input>
                        <button>Remover Item</button>
                    </CardBoot.Body>
                    </div>
                    </div>
                </CardBoot>
            </div>
        )
    }
}

export default CardProductCart;

import React, { Component } from 'react'
import  Card  from './Card'

export class CardGroup extends Component {
    renderCard = (product) =>{
        return(
          <Card key={product.id-1} product={product}/>
        )
    }
    render() {
        const cards = this.props.products.map(product=>
            <Card key={product.id-1} product ={product}/>
        )   
        return (
            <div className="CardGroup">
                {cards}
            </div>
        )
    }
}

export default CardGroup

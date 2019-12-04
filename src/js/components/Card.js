import React, { Component } from "react";
import { Card as CardBoot, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

export class Card extends Component {
  render() {
    const {
      image,
      name,
      brand,
      category,
      currency,
      price,
      color,
      id
    } = this.props.product;
    return (
      <CardBoot style={{ width: "18rem" ,backgroundColor:'#F3F0F0',border: '1px solid black',margin:'5px'}}>
        <Link to={`/product/${id}`}>
          {/* <CardBoot.Img variant="top" src={image+"?"+Math.floor(Math.random() * 1000)} /> */ }
          <CardBoot.Img variant="top" src={image+"?"+id} />
        </Link>
        <CardBoot.Body>
          <Link to={`/product/${id}`}>{name}</Link>
          <CardBoot.Text>
            Categoria: {category}
            <br />
            Marca: {brand}
            <br />
            {/* INTL NUMBER FORMAT */}
            {currency}: {price}
            <canvas
              width="20px"
              height="20px"
              style={{ marginLeft: "20px", backgroundColor: color,borderRadius:'5px' }}
            ></canvas>
          </CardBoot.Text>
        </CardBoot.Body>
      </CardBoot>
    );
  }
}

export default Card;

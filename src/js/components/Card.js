import React, { Component } from "react";
import { Card as CardBoot} from "react-bootstrap";
import { Link } from "react-router-dom";

export class Card extends Component {
  render() {
    const {
      image,
      name,
      brand,
      category,
      price,
      color,
      id } = this.props.product;
    return (
      <CardBoot className="product-card">
        <Link to={`/product/${id}`}>
          <div className="image">
            <CardBoot.Img className="product-cart-image" variant="top" src={image+"?"+id} />
          </div>
        </Link>
        <CardBoot.Body>
          <Link to={`/product/${id}`}>{name}</Link>
          <CardBoot.Text>
            Categoria: {category}
            <br />
            Marca: {brand}
            <br />
            R$: {price}
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
